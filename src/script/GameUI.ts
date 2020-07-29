import { ui } from "./../ui/layaMaxUI";
import GameControl from "./GameControl"
import camera, { CameraCapacity } from "@byted-creative/camera"
import { CameraLayaLayer } from "@byted-creative/camera-laya-layer"
import face, { FaceDebug, FaceEvent, FaceInfo } from "@byted-creative/camera-face"

/**
 * 本示例采用非脚本的方式实现，而使用继承页面基类，实现页面逻辑。在IDE里面设置场景的Runtime属性即可和场景进行关联
 * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
 * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
 */
export default class GameUI extends ui.test.TestSceneUI {
    /**设置单例的引用方式，方便其他类引用 */
    static instance: GameUI;
    /**当前游戏积分字段 */
    private _score: number;
    /**游戏控制脚本引用，避免每次获取组件带来不必要的性能开销 */
    private _control: GameControl;

    constructor() {
        super();
        GameUI.instance = this;
        //关闭多点触控，否则就无敌了
        Laya.MouseManager.multiTouchEnabled = false;
    }

    onEnable(): void {
        this._control = this.getComponent(GameControl);
        //点击提示文字，开始游戏
        this.tipLbll.on(Laya.Event.CLICK, this, this.onTipClick);

        this.initCamera();
    }

    onTipClick(e: Laya.Event): void {
        this.tipLbll.visible = false;
        this._score = 0;
        this.scoreLbl.text = "";
        this._control.startGame();
    }

    /**增加分数 */
    addScore(value: number = 1): void {
        this._score += value;
        this.scoreLbl.changeText("分数：" + this._score);
        //随着分数越高，难度增大
        if (this._control.createBoxInterval > 600 && this._score % 20 == 0) this._control.createBoxInterval -= 20;
    }

    startGame(): void {

        this.tipLbll.visible = false;
        this._score = 0;
        this.scoreLbl.text = "";
        this._control.startGame();

        face.on(FaceEvent.onFaceInfos, this.onFaceInfos, this);
        face.on(FaceEvent.onBlink, this.shoot, this);
        face.on(FaceEvent.onBlinkLeft, this.shoot, this);
        face.on(FaceEvent.onBlinkRight, this.shoot, this);
    }

    /**停止游戏 */
    stopGame(): void {
        this.tipLbll.visible = true;
        this.tipLbll.text = "游戏结束了，张嘴重新开始\n\n眨眼发射子弹";

        face.off(FaceEvent.onFaceInfos, this.onFaceInfos, this);
        face.off(FaceEvent.onBlink, this.shoot, this);
        face.off(FaceEvent.onBlinkLeft, this.shoot, this);
        face.off(FaceEvent.onBlinkRight, this.shoot, this);

        this._control.stopGame();

        // 张嘴开始游戏
        face.once(FaceEvent.onMouthAh, this.startGame, this);
    }

    private async initCamera(){
        
        console.log('initCamera',this.cameraRoot, this.cameraRoot.width, this.cameraRoot.height);

        camera.init({
            layerAdapter: new CameraLayaLayer({
                root: this.cameraRoot,
                width: Laya.stage.width,
                height: Laya.stage.height,
            }),
            capacity: [CameraCapacity.Face]
        });

        try{
            await camera.start();
            camera.setBeauty({whiten: 0.4, smoothen: 0.13, enlargeEye: 0.13, slimFace: 0.45});
      
            face.init({});
            face.startDetect();

            // face.debugEnable(FaceDebug.Box);
            // face.debugEnable(FaceDebug.Face);

            // 张嘴开始游戏
            face.once(FaceEvent.onMouthAh, this.startGame, this);

        }catch(e){
            console.log('camera start fail', e);
        }

    }

    private onFaceInfos(faceInfos: FaceInfo[]){

        if(faceInfos.length === 0){
            return;
        }

        const faceInfo = faceInfos[0];
        this.aircraft.x = faceInfo.nose[6].x;
    
    }

    private shoot(){
        this._control.createBullet(this.aircraft.x);
    }

}