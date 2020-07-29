(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var test;
        (function (test) {
            class TestSceneUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("test/TestScene");
                }
            }
            test.TestSceneUI = TestSceneUI;
            REG("ui.test.TestSceneUI", TestSceneUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));

    class GameControl extends Laya.Script {
        constructor() {
            super();
            this.createBoxInterval = 1000;
            this._time = 0;
            this._started = false;
        }
        onEnable() {
            this._time = Date.now();
            this._gameBox = this.owner.getChildByName("gameBox");
        }
        onUpdate() {
            let now = Date.now();
            if (now - this._time > this.createBoxInterval && this._started) {
                this._time = now;
                this.createBox();
            }
        }
        createBox() {
            let box = Laya.Pool.getItemByCreateFun("dropBox", this.dropBox.create, this.dropBox);
            box.pos(Math.random() * (Laya.stage.width - 100), -100);
            this._gameBox.addChild(box);
        }
        createBullet(x) {
            let flyer = Laya.Pool.getItemByCreateFun("bullet", this.bullet.create, this.bullet);
            flyer.pos(x, 1000);
            this._gameBox.addChild(flyer);
        }
        startGame() {
            if (!this._started) {
                this._started = true;
                this.enabled = true;
            }
        }
        stopGame() {
            this._started = false;
            this.enabled = false;
            this.createBoxInterval = 1000;
            this._gameBox.removeChildren();
        }
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    function getCjsExportFromNamespace (n) {
    	return n && n['default'] || n;
    }

    var eventemitter3 = createCommonjsModule(function (module) {
    'use strict';
    var has = Object.prototype.hasOwnProperty, prefix = '~';
    function Events() { }
    if (Object.create) {
        Events.prototype = Object.create(null);
        if (!new Events().__proto__)
            prefix = false;
    }
    function EE(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
        if (typeof fn !== 'function') {
            throw new TypeError('The listener must be a function');
        }
        var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
        if (!emitter._events[evt])
            emitter._events[evt] = listener, emitter._eventsCount++;
        else if (!emitter._events[evt].fn)
            emitter._events[evt].push(listener);
        else
            emitter._events[evt] = [emitter._events[evt], listener];
        return emitter;
    }
    function clearEvent(emitter, evt) {
        if (--emitter._eventsCount === 0)
            emitter._events = new Events();
        else
            delete emitter._events[evt];
    }
    function EventEmitter() {
        this._events = new Events();
        this._eventsCount = 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
        var names = [], events, name;
        if (this._eventsCount === 0)
            return names;
        for (name in (events = this._events)) {
            if (has.call(events, name))
                names.push(prefix ? name.slice(1) : name);
        }
        if (Object.getOwnPropertySymbols) {
            return names.concat(Object.getOwnPropertySymbols(events));
        }
        return names;
    };
    EventEmitter.prototype.listeners = function listeners(event) {
        var evt = prefix ? prefix + event : event, handlers = this._events[evt];
        if (!handlers)
            return [];
        if (handlers.fn)
            return [handlers.fn];
        for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
            ee[i] = handlers[i].fn;
        }
        return ee;
    };
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
        var evt = prefix ? prefix + event : event, listeners = this._events[evt];
        if (!listeners)
            return 0;
        if (listeners.fn)
            return 1;
        return listeners.length;
    };
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt])
            return false;
        var listeners = this._events[evt], len = arguments.length, args, i;
        if (listeners.fn) {
            if (listeners.once)
                this.removeListener(event, listeners.fn, undefined, true);
            switch (len) {
                case 1: return listeners.fn.call(listeners.context), true;
                case 2: return listeners.fn.call(listeners.context, a1), true;
                case 3: return listeners.fn.call(listeners.context, a1, a2), true;
                case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
                case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
                case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
            }
            for (i = 1, args = new Array(len - 1); i < len; i++) {
                args[i - 1] = arguments[i];
            }
            listeners.fn.apply(listeners.context, args);
        }
        else {
            var length = listeners.length, j;
            for (i = 0; i < length; i++) {
                if (listeners[i].once)
                    this.removeListener(event, listeners[i].fn, undefined, true);
                switch (len) {
                    case 1:
                        listeners[i].fn.call(listeners[i].context);
                        break;
                    case 2:
                        listeners[i].fn.call(listeners[i].context, a1);
                        break;
                    case 3:
                        listeners[i].fn.call(listeners[i].context, a1, a2);
                        break;
                    case 4:
                        listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                        break;
                    default:
                        if (!args)
                            for (j = 1, args = new Array(len - 1); j < len; j++) {
                                args[j - 1] = arguments[j];
                            }
                        listeners[i].fn.apply(listeners[i].context, args);
                }
            }
        }
        return true;
    };
    EventEmitter.prototype.on = function on(event, fn, context) {
        return addListener(this, event, fn, context, false);
    };
    EventEmitter.prototype.once = function once(event, fn, context) {
        return addListener(this, event, fn, context, true);
    };
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt])
            return this;
        if (!fn) {
            clearEvent(this, evt);
            return this;
        }
        var listeners = this._events[evt];
        if (listeners.fn) {
            if (listeners.fn === fn &&
                (!once || listeners.once) &&
                (!context || listeners.context === context)) {
                clearEvent(this, evt);
            }
        }
        else {
            for (var i = 0, events = [], length = listeners.length; i < length; i++) {
                if (listeners[i].fn !== fn ||
                    (once && !listeners[i].once) ||
                    (context && listeners[i].context !== context)) {
                    events.push(listeners[i]);
                }
            }
            if (events.length)
                this._events[evt] = events.length === 1 ? events[0] : events;
            else
                clearEvent(this, evt);
        }
        return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;
        if (event) {
            evt = prefix ? prefix + event : event;
            if (this._events[evt])
                clearEvent(this, evt);
        }
        else {
            this._events = new Events();
            this._eventsCount = 0;
        }
        return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    if ('undefined' !== 'object') {
        module.exports = EventEmitter;
    }
    });

    var extendStatics$1 = function (d, b) {
        extendStatics$1 = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics$1(d, b);
    };
    function __extends$1(d, b) {
        extendStatics$1(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign$1 = function () {
        __assign$1 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };
    function __awaiter$1(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator$1(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function isTT() {
        return typeof tt !== "undefined";
    }
    var grouping = {
        log: ['log'],
        info: ['info'],
        warn: ['warn'],
        error: ['error'],
        silent: []
    };
    var logLevel = {};
    var methodLevel = {};
    Object.keys(grouping).forEach(function (k, i) {
        logLevel[i] = k;
        logLevel[k] = logLevel[k.toUpperCase()] = i;
        grouping[k].forEach(function (m) {
            methodLevel[m] = i;
        });
    });
    var levelNum = function (level) {
        return typeof level === 'number' ? level : logLevel[level] || 0;
    };
    var nop = function () { };
    var ConsoleLevel = function () {
        function ConsoleLevel(logger) {
            var _this = this;
            if (logger === void 0) {
                logger = console;
            }
            this.level = 'log';
            this.enabled = true;
            var _loop_1 = function (method) {
                if (typeof logger[method] === 'function') {
                    this_1[method] = function () {
                        var arg = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            arg[_i] = arguments[_i];
                        }
                        if (_this.enabled && _this.levelnum <= methodLevel[method]) {
                            logger[method].apply(logger, arg);
                        }
                    };
                }
                else {
                    this_1[method] = nop;
                }
            };
            var this_1 = this;
            for (var method in methodLevel) {
                _loop_1(method);
            }
            var _loop_2 = function (method) {
                if (!this_2[method] && typeof logger[method] === 'function') {
                    this_2[method] = function () {
                        var arg = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            arg[_i] = arguments[_i];
                        }
                        if (_this.enabled && _this.levelnum < logLevel['silent']) {
                            logger[method].apply(logger, arg);
                        }
                    };
                }
            };
            var this_2 = this;
            for (var method in logger) {
                _loop_2(method);
            }
        }
        Object.defineProperty(ConsoleLevel.prototype, "levelnum", {
            get: function () {
                return levelNum(this.level);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConsoleLevel.prototype, "disabled", {
            get: function () {
                return !this.enabled;
            },
            set: function (d) {
                this.enabled = !d;
            },
            enumerable: true,
            configurable: true
        });
        ConsoleLevel.prototype.in = function (level) {
            return this.enabled && this.levelnum <= levelNum(level);
        };
        ConsoleLevel.grouping = grouping;
        ConsoleLevel.logLevel = logLevel;
        ConsoleLevel.methodLevel = methodLevel;
        ConsoleLevel.levelNum = levelNum;
        return ConsoleLevel;
    }();
    var logger = new ConsoleLevel();
    var _a;
    var CameraStatus;
    (function (CameraStatus) {
        CameraStatus[CameraStatus["Initialized"] = 0] = "Initialized";
        CameraStatus[CameraStatus["Opening"] = 1] = "Opening";
        CameraStatus[CameraStatus["Ready"] = 2] = "Ready";
        CameraStatus[CameraStatus["Stopped"] = 3] = "Stopped";
    })(CameraStatus || (CameraStatus = {}));
    var CameraCapacity;
    (function (CameraCapacity) {
        CameraCapacity["Face"] = "face";
    })(CameraCapacity || (CameraCapacity = {}));
    var CameraEvent;
    (function (CameraEvent) {
        CameraEvent["onReady"] = "onReady";
        CameraEvent["onDestroy"] = "onDestroy";
        CameraEvent["onError"] = "onError";
    })(CameraEvent || (CameraEvent = {}));
    var CAMERA_ERROR_CODE;
    (function (CAMERA_ERROR_CODE) {
        CAMERA_ERROR_CODE[CAMERA_ERROR_CODE["INIT_SUCCESS"] = 0] = "INIT_SUCCESS";
        CAMERA_ERROR_CODE[CAMERA_ERROR_CODE["INIT_FAIL"] = 1] = "INIT_FAIL";
        CAMERA_ERROR_CODE[CAMERA_ERROR_CODE["AUTHORIZE_FAIL"] = 2] = "AUTHORIZE_FAIL";
    })(CAMERA_ERROR_CODE || (CAMERA_ERROR_CODE = {}));
    var CAMERA_ERROR_MSG = (_a = {}, _a[CAMERA_ERROR_CODE.INIT_SUCCESS] = 'success', _a[CAMERA_ERROR_CODE.INIT_FAIL] = 'init failed', _a[CAMERA_ERROR_CODE.AUTHORIZE_FAIL] = 'authorize failed', _a);
    var CameraError = function (_super) {
        __extends$1(CameraError, _super);
        function CameraError(code, msg) {
            var _this = _super.call(this, msg) || this;
            _this.code = code;
            _this.msg = msg;
            return _this;
        }
        return CameraError;
    }(Error);
    var Camera = function (_super) {
        __extends$1(Camera, _super);
        function Camera() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._state = CameraStatus.Stopped;
            _this._isInitialized = false;
            _this._isShow = true;
            _this.FRAME_DURATION = 1000 * 1 / 30;
            return _this;
        }
        Camera.prototype.init = function (params) {
            if (this._state !== CameraStatus.Stopped) {
                logger.warn("[Camera] initialization failed, please call function 'stop' firstly");
                return false;
            }
            var param = __assign$1({}, params);
            if (!this.validate(param)) {
                logger.warn('[Camera] camera init fail, bad params');
                return false;
            }
            this._config = param;
            this._isInitialized = true;
            if (this._config.debug === false) {
                logger.level = 'warn';
            }
            else {
                logger.level = 'log';
            }
            logger.log('camera init success', this._config);
            return true;
        };
        Camera.prototype.validate = function (params) {
            if (!params.layerAdapter) {
                logger.warn("[Camera] initialization failed, layerAdapter can not be empty");
                return false;
            }
            if (!params.capacity) {
                params.capacity = [];
            }
            if (!params.debug) {
                params.debug = false;
            }
            if (!params.direction) {
                params.direction = 'front';
            }
            if (!params.pretty) {
                params.pretty = false;
            }
            return true;
        };
        Camera.prototype.start = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var error, error, beautyFlag, capacity, direction, video, e_1, error;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this._state !== CameraStatus.Stopped) {
                                logger.warn("[Camera] start failed, please call function 'stop' firstly");
                                error = new CameraError(CAMERA_ERROR_CODE.INIT_FAIL, "start failed, please call function 'stop' firstly");
                                this.emit(CameraEvent.onError, error);
                                throw error;
                            }
                            if (!this._isInitialized) {
                                logger.warn("[Camera] start failed, please call function 'init' firstly");
                                error = new CameraError(CAMERA_ERROR_CODE.INIT_FAIL, "start failed, please call function 'init' firstly");
                                this.emit(CameraEvent.onError, error);
                                throw error;
                            }
                            this._cameraLayer = this._config.layerAdapter;
                            beautyFlag = false;
                            capacity = {};
                            if (this._config.pretty) {
                                beautyFlag = true;
                            }
                            this._config.capacity.forEach(function (element) {
                                if (element === CameraCapacity.Face) {
                                    beautyFlag = true;
                                }
                            });
                            direction = 'front';
                            if (this._config.direction) {
                                direction = this._config.direction;
                            }
                            if (!isTT())
                                return [3,
                                    7];
                            this._camera = tt.createCamera();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 5, , 6]);
                            return [4,
                                this._camera.start(direction, beautyFlag, capacity)];
                        case 2:
                            video = _a.sent();
                            if (!video)
                                return [3,
                                    4];
                            this._video = video;
                            return [4,
                                this._cameraLayer.initVideo(video)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            return [3,
                                6];
                        case 5:
                            e_1 = _a.sent();
                            logger.log(e_1);
                            error = new CameraError(CAMERA_ERROR_CODE.INIT_FAIL, "start failed");
                            this.emit(CameraEvent.onError, error);
                            throw error;
                        case 6:
                            return [3,
                                9];
                        case 7:
                            return [4,
                                this._cameraLayer.initVideo(null)];
                        case 8:
                            _a.sent();
                            _a.label = 9;
                        case 9:
                            this._isShow = true;
                            this._timer = setInterval(this.update.bind(this), this.FRAME_DURATION);
                            this._state = CameraStatus.Ready;
                            logger.log('camera start success');
                            this.emit(CameraEvent.onReady);
                            return [2
                            ];
                    }
                });
            });
        };
        Camera.prototype.update = function () {
            var _a;
            if (this._cameraLayer) {
                (_a = this._cameraLayer) === null || _a === void 0 ? void 0 : _a.update(this._isShow);
            }
        };
        Camera.prototype.setBeauty = function (param) {
            if (!param) {
                return;
            }
            if (!isTT()) {
                return;
            }
            if (this._camera) {
                this._camera.setBeautifyParam(param.whiten, param.smoothen, param.enlargeEye, param.slimFace);
            }
        };
        Camera.prototype.pause = function () {
            if (!isTT()) {
                return;
            }
            if (this._camera) {
                this._camera.pause();
            }
        };
        Camera.prototype.resume = function () {
            if (!isTT()) {
                return;
            }
            if (this._camera) {
                this._camera.resume();
            }
        };
        Camera.prototype.stop = function () {
            if (this._state === CameraStatus.Stopped) {
                return;
            }
            if (this._timer) {
                clearInterval(this._timer);
            }
            this._timer = null;
            this._isShow = false;
            if (this._cameraLayer) {
                this._cameraLayer.destroy();
            }
            if (this._camera && isTT()) {
                this._camera.destroy();
                this._camera = null;
            }
            this._video = null;
            this._state = CameraStatus.Stopped;
            this.emit(CameraEvent.onDestroy);
        };
        Camera.prototype.getVideo = function () {
            return this._video;
        };
        Camera.prototype.getLayer = function () {
            return this._cameraLayer;
        };
        Camera.prototype.getCapacity = function () {
            if (this._config) {
                var ret_1 = {};
                this._config.capacity.forEach(function (element) {
                    ret_1[element] = true;
                });
                return ret_1;
            }
            else {
                return {};
            }
        };
        Camera.prototype.getConfig = function () {
            if (this._config) {
                return this._config;
            }
            else {
                return {};
            }
        };
        Camera.prototype.show = function () {
            this._isShow = true;
        };
        Camera.prototype.hide = function () {
            this._isShow = false;
        };
        return Camera;
    }(eventemitter3);
    var ICameraLayer = function () {
        function ICameraLayer(param) {
        }
        return ICameraLayer;
    }();
    var index = new Camera();

    var extendStatics$2 = function (d, b) {
        extendStatics$2 = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics$2(d, b);
    };
    function __extends$2(d, b) {
        extendStatics$2(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter$2(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator$2(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var CameraLayaLayer = function (_super) {
        __extends$2(CameraLayaLayer, _super);
        function CameraLayaLayer(param) {
            var _this = _super.call(this, param) || this;
            _this._fixedWidth = false;
            _this._fixedHeight = false;
            _this._isPortrait = true;
            _this._graphics = {};
            _this._root = param.root;
            if (param.width) {
                _this.width = param.width;
            }
            if (param.height) {
                _this.height = param.height;
            }
            if (param.fixedWidth) {
                _this._fixedWidth = true;
            }
            if (param.fixedHeight) {
                _this._fixedHeight = true;
            }
            if (param.orientation) {
                _this._isPortrait = true;
            }
            else {
                _this._isPortrait = true;
            }
            return _this;
        }
        Object.defineProperty(CameraLayaLayer.prototype, "x", {
            get: function () {
                if (this._root) {
                    return this._root.x;
                }
                else {
                    return 0;
                }
            },
            set: function (value) {
                if (this._root) {
                    this._root.x = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CameraLayaLayer.prototype, "y", {
            get: function () {
                if (this._root) {
                    return this._root.y;
                }
                else {
                    return 0;
                }
            },
            set: function (value) {
                if (this._root) {
                    this._root.y = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CameraLayaLayer.prototype, "isPortrait", {
            get: function () {
                return this._isPortrait;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CameraLayaLayer.prototype, "width", {
            get: function () {
                if (this._width) {
                    return this._width;
                }
                else {
                    if (this._root) {
                        return this._root.width;
                    }
                    else {
                        return 0;
                    }
                }
            },
            set: function (value) {
                if (this._root) {
                    this._width = value;
                    this._root.width = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CameraLayaLayer.prototype, "height", {
            get: function () {
                if (this._height) {
                    return this._height;
                }
                else {
                    if (this._root) {
                        return this._root.height;
                    }
                    else {
                        return 0;
                    }
                }
            },
            set: function (value) {
                if (this._root) {
                    this._height = value;
                    this._root.height = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        CameraLayaLayer.prototype.initNode = function () {
            try {
                if (this._node) {
                    this._node.destroy();
                }
                this._node = new Laya.Box();
                this._node.name = 'cameraNode';
                if (this._isPortrait) {
                    this._node.width = this.width;
                    this._node.height = this.height;
                    this._node.rotation = 0;
                    this._node.pos(0, 0);
                }
                else {
                    this._node.width = this.width;
                    this._node.height = this.height;
                    this._node.rotation = -90;
                    this._node.pos(0, this.height);
                }
                this._node.cacheAs = 'none';
                this._root.cacheAs = 'none';
                this._root.addChild(this._node);
                this._content = new Laya.Box();
                this._content.name = 'cameraContent';
                this._node.addChild(this._content);
            }
            catch (e) {
                console.log(e);
            }
        };
        CameraLayaLayer.prototype.initVideo = function (video) {
            return __awaiter$2(this, void 0, void 0, function () {
                var texture2d;
                return __generator$2(this, function (_a) {
                    this.initNode();
                    if (Laya.Browser.onMiniGame) {
                        this._video = video;
                        this._canvas = tt.createCanvas();
                        texture2d = new Laya.Texture2D(this.width, this.height, 1, false, false);
                        texture2d.loadImageSource(this._canvas);
                        this._texture = new Laya.Texture(texture2d);
                        this._texture.height = this.height;
                        this._texture.width = this.width;
                        this.adapt();
                    }
                    return [2
                    ];
                });
            });
        };
        CameraLayaLayer.prototype.adapt = function () {
            if (this._texture.width === 0) {
                console.warn('[camera-laya-layer] texture width is 0');
                return;
            }
            if (this._texture.height === 0) {
                console.warn('[camera-laya-layer] texture height is 0');
                return;
            }
            var rate1 = this._texture.height / this._texture.width;
            if (this.width === 0) {
                console.warn('[camera-laya-layer] root width is 0');
                return;
            }
            var rate2;
            if (this._isPortrait) {
                rate2 = this.height / this.width;
            }
            else {
                rate2 = this.width / this.height;
            }
            if (this._fixedHeight) {
                var scale = void 0;
                if (this._isPortrait) {
                    scale = this.height / this._texture.height;
                    this._canvas.height = this.height;
                    this._canvas.width = this._texture.width * scale;
                }
                else {
                    scale = this.width / this._texture.height;
                    this._canvas.height = this.width;
                    this._canvas.width = this._texture.width * scale;
                }
            }
            if (this._fixedWidth) {
                var scale = void 0;
                if (this._isPortrait) {
                    scale = this.width / this._texture.width;
                    this._canvas.width = this.width;
                    this._canvas.height = this._texture.height * scale;
                }
                else {
                    scale = this.height / this._texture.width;
                    this._canvas.width = this.height;
                    this._canvas.height = this._texture.height * scale;
                }
            }
            if (!this._fixedWidth && !this._fixedHeight) {
                if (rate1 > rate2) {
                    var scale = void 0;
                    if (this._isPortrait) {
                        scale = this.width / this._texture.width;
                        this._canvas.width = this.width;
                        this._canvas.height = this._texture.height * scale;
                    }
                    else {
                        scale = this.height / this._texture.width;
                        this._canvas.width = this.height;
                        this._canvas.height = this._texture.height * scale;
                    }
                }
                else {
                    var scale = void 0;
                    if (this._isPortrait) {
                        scale = this.height / this._texture.height;
                        this._canvas.height = this.height;
                        this._canvas.width = this._texture.width * scale;
                    }
                    else {
                        scale = this.width / this._texture.height;
                        this._canvas.height = this.width;
                        this._canvas.width = this._texture.width * scale;
                    }
                }
            }
        };
        CameraLayaLayer.prototype.update = function (isShow) {
            if (!this._texture)
                return;
            if (isShow) {
                if (Laya.Browser.onMiniGame) {
                    var context = this._canvas.getContext('2d');
                    if (this._isPortrait) {
                        var x = void 0, y = void 0, width = void 0, height = void 0;
                        var rate1 = this.height / this.width;
                        var rate2 = this._video.videoHeight / this._video.videoWidth;
                        if (rate1 > rate2) {
                            x = (this._video.videoWidth - this._video.videoHeight / rate1) / 2;
                            y = 0;
                            width = this._video.videoHeight / rate1;
                            height = this._video.videoHeight;
                            context.drawImage(this._video, x, y, width, height, 0, 0, this.width, this.height);
                        }
                        else {
                            x = 0;
                            y = (this._video.videoHeight - this._video.videoWidth * rate1) / 2;
                            width = this._video.videoWidth;
                            height = this._video.videoWidth * rate1;
                            context.drawImage(this._video, x, y, width, height, 0, 0, this.width, this.height);
                        }
                    }
                    else {
                        var x = void 0, y = void 0, width = void 0, height = void 0;
                        var rate1 = this.width / this.height;
                        var rate2 = this._video.videoHeight / this._video.videoWidth;
                        if (rate1 > rate2) {
                            x = (this._video.videoWidth - this._video.videoHeight / rate1) / 2;
                            y = 0;
                            width = this._video.videoHeight / rate1;
                            height = this._video.videoHeight;
                            context.drawImage(this._video, x, y, width, height, 0, 0, this.width, this.height);
                        }
                        else {
                            x = 0;
                            y = (this._video.videoHeight - this._video.videoWidth * rate1) / 2;
                            width = this._video.videoWidth;
                            height = this._video.videoWidth * rate1;
                            context.drawImage(this._video, x, y, width, height, 0, 0, this.width, this.height);
                        }
                    }
                    this._texture.bitmap.loadImageSource(this._canvas, true);
                    this._node.texture = this._texture;
                }
            }
            else {
                this._content.texture = null;
            }
        };
        CameraLayaLayer.prototype.destroy = function () {
            this._content.texture = null;
            this._texture.destroy();
            this._texture = null;
            this._texture && this._texture.destroy();
            this._texture = null;
            this._node && this._node.destroy();
            this._node = null;
        };
        CameraLayaLayer.prototype.getGraphics = function (layer) {
            if (!this._graphics[layer]) {
                var node = new Laya.Box();
                this._root.addChild(node);
                var graphics = node.graphics;
                this._graphics[layer] = graphics;
                return this._graphics[layer] = graphics;
            }
            else {
                return this._graphics[layer];
            }
        };
        CameraLayaLayer.prototype.clear = function (layer) {
            this.getGraphics(layer).clear();
        };
        CameraLayaLayer.prototype.convertLocation = function (x, y) {
            var rate1 = this.height / this.width;
            var rate2 = this._video.videoHeight / this._video.videoWidth;
            var xOffset = 0;
            var yOffset = 0;
            var scale;
            if (this._isPortrait) {
                if (rate1 > rate2) {
                    xOffset = (this._video.videoWidth - this._video.videoHeight / rate1) / 2;
                    yOffset = 0;
                    scale = this._texture.height / this._video.videoHeight;
                }
                else {
                    xOffset = 0;
                    yOffset = (this._video.videoHeight - this._video.videoWidth * rate1) / 2;
                    scale = this._texture.width / this._video.videoWidth;
                }
                return {
                    x: (x - xOffset) * scale,
                    y: (y - yOffset) * scale
                };
            }
            else {
                scale = this._texture.width / this._video.videoWidth;
                return {
                    y: x * scale,
                    x: y * scale
                };
            }
        };
        CameraLayaLayer.prototype.convertSize = function (width, height) {
            var rate1 = this.height / this.width;
            var rate2 = this._video.videoHeight / this._video.videoWidth;
            var scale;
            if (this._isPortrait) {
                if (rate1 > rate2) {
                    scale = this._texture.height / this._video.videoHeight;
                }
                else {
                    scale = this._texture.width / this._video.videoWidth;
                }
                return {
                    width: width * scale,
                    height: height * scale
                };
            }
            else {
                scale = this._texture.width / this._video.width;
                return {
                    width: height * scale,
                    height: width * scale
                };
            }
        };
        CameraLayaLayer.prototype.drawPoint = function (layer, x, y) {
            var graphics = this.getGraphics(layer);
            graphics.drawCircle(x, y, 4, '#ffffff');
        };
        CameraLayaLayer.prototype.drawRect = function (layer, left, top, width, height) {
            var graphics = this.getGraphics(layer);
            graphics.drawLines(0, 0, [left, top, left + width, top, left + width, height + top, left, height + top, left, top], '#ffffff', 4);
        };
        return CameraLayaLayer;
    }(ICameraLayer);

    var extendStatics$3 = function (d, b) {
        extendStatics$3 = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p];
        };
        return extendStatics$3(d, b);
    };
    function __extends$3(d, b) {
        extendStatics$3(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign$2 = function () {
        __assign$2 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign$2.apply(this, arguments);
    };
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function isTT$1() {
        return typeof tt !== "undefined";
    }
    var grouping$1 = {
        log: ['log'],
        info: ['info'],
        warn: ['warn'],
        error: ['error'],
        silent: []
    };
    var logLevel$1 = {};
    var methodLevel$1 = {};
    Object.keys(grouping$1).forEach(function (k, i) {
        logLevel$1[i] = k;
        logLevel$1[k] = logLevel$1[k.toUpperCase()] = i;
        grouping$1[k].forEach(function (m) {
            methodLevel$1[m] = i;
        });
    });
    var levelNum$1 = function (level) {
        return typeof level === 'number' ? level : logLevel$1[level] || 0;
    };
    var nop$1 = function () { };
    var ConsoleLevel$1 = function () {
        function ConsoleLevel(logger) {
            var _this = this;
            if (logger === void 0) {
                logger = console;
            }
            this.level = 'log';
            this.enabled = true;
            var _loop_1 = function (method) {
                if (typeof logger[method] === 'function') {
                    this_1[method] = function () {
                        var arg = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            arg[_i] = arguments[_i];
                        }
                        if (_this.enabled && _this.levelnum <= methodLevel$1[method]) {
                            logger[method].apply(logger, arg);
                        }
                    };
                }
                else {
                    this_1[method] = nop$1;
                }
            };
            var this_1 = this;
            for (var method in methodLevel$1) {
                _loop_1(method);
            }
            var _loop_2 = function (method) {
                if (!this_2[method] && typeof logger[method] === 'function') {
                    this_2[method] = function () {
                        var arg = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            arg[_i] = arguments[_i];
                        }
                        if (_this.enabled && _this.levelnum < logLevel$1['silent']) {
                            logger[method].apply(logger, arg);
                        }
                    };
                }
            };
            var this_2 = this;
            for (var method in logger) {
                _loop_2(method);
            }
        }
        Object.defineProperty(ConsoleLevel.prototype, "levelnum", {
            get: function () {
                return levelNum$1(this.level);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConsoleLevel.prototype, "disabled", {
            get: function () {
                return !this.enabled;
            },
            set: function (d) {
                this.enabled = !d;
            },
            enumerable: true,
            configurable: true
        });
        ConsoleLevel.prototype.in = function (level) {
            return this.enabled && this.levelnum <= levelNum$1(level);
        };
        ConsoleLevel.grouping = grouping$1;
        ConsoleLevel.logLevel = logLevel$1;
        ConsoleLevel.methodLevel = methodLevel$1;
        ConsoleLevel.levelNum = levelNum$1;
        return ConsoleLevel;
    }();
    var logger$1 = new ConsoleLevel$1();
    var FaceActionType;
    (function (FaceActionType) {
        FaceActionType["Blink"] = "blink";
        FaceActionType["BlinkLeft"] = "blink_left";
        FaceActionType["BlinkRight"] = "blink_right";
        FaceActionType["MouthAh"] = "mouth_ah";
        FaceActionType["HeadYaw"] = "head_yaw";
        FaceActionType["HeadYawIndian"] = "head_yaw_indian";
        FaceActionType["HeadPitch"] = "head_pitch";
        FaceActionType["BrowJump"] = "brow_jump";
        FaceActionType["MouthPout"] = "mouth_pout";
    })(FaceActionType || (FaceActionType = {}));
    var FaceStatus;
    (function (FaceStatus) {
        FaceStatus[FaceStatus["Initialized"] = 0] = "Initialized";
        FaceStatus[FaceStatus["Opening"] = 1] = "Opening";
        FaceStatus[FaceStatus["Ready"] = 2] = "Ready";
        FaceStatus[FaceStatus["Stopped"] = 3] = "Stopped";
    })(FaceStatus || (FaceStatus = {}));
    var MAX_INTERVAL = 60;
    var MIN_INTERVAL = 15;
    var DEFAULT_INTERVAL = 30;
    var NAME = 'face';
    var FaceEvent;
    (function (FaceEvent) {
        FaceEvent["onFaceInfos"] = "onFaceInfos";
        FaceEvent["onFaceActions"] = "onFaceActions";
        FaceEvent["onBlink"] = "onBlink";
        FaceEvent["onBlinkLeft"] = "onBlinkLeft";
        FaceEvent["onBlinkRight"] = "onBlinkRight";
        FaceEvent["onMouthAh"] = "onMouthAh";
        FaceEvent["onHeadYaw"] = "onHeadYaw";
        FaceEvent["onHeadYawIndian"] = "onHeadYawIndian";
        FaceEvent["onHeadPitch"] = "onHeadPitch";
        FaceEvent["onBrowJump"] = "onBrowJump";
        FaceEvent["onMouthPout"] = "onMouthPout";
    })(FaceEvent || (FaceEvent = {}));
    var FaceDebug;
    (function (FaceDebug) {
        FaceDebug[FaceDebug["Box"] = 128] = "Box";
        FaceDebug[FaceDebug["Face"] = 127] = "Face";
        FaceDebug[FaceDebug["FaceOutline"] = 1] = "FaceOutline";
        FaceDebug[FaceDebug["Eyebrow"] = 2] = "Eyebrow";
        FaceDebug[FaceDebug["Eye"] = 4] = "Eye";
        FaceDebug[FaceDebug["Nose"] = 8] = "Nose";
        FaceDebug[FaceDebug["Mouth"] = 16] = "Mouth";
    })(FaceDebug || (FaceDebug = {}));
    var Face = function (_super) {
        __extends$3(Face, _super);
        function Face() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._state = FaceStatus.Stopped;
            _this._isInitialized = false;
            _this._config = {};
            _this._faceInfos = [];
            _this._debug = 0;
            return _this;
        }
        Face.prototype.init = function (param) {
            if (this._state !== FaceStatus.Stopped) {
                logger$1.warn("[Camera-face] initialization failed, please call function 'stop' firstly");
                return false;
            }
            this._config = __assign$2({}, param);
            this.validate(this._config);
            if (this._config.debug) {
                logger$1.level = 'log';
            }
            else {
                logger$1.level = 'warn';
            }
            this._isInitialized = true;
            logger$1.log('[camera-face] face init', this._config);
            return true;
        };
        Face.prototype.validate = function (param) {
            if (!param.debug) {
                param.debug = false;
            }
            if (!param.interval) {
                param.interval = DEFAULT_INTERVAL;
            }
            else {
                if (param.interval < MIN_INTERVAL) {
                    param.interval = MIN_INTERVAL;
                }
                if (param.interval > MAX_INTERVAL) {
                    param.interval = MAX_INTERVAL;
                }
            }
        };
        Face.prototype.startDetect = function () {
            if (this._state !== FaceStatus.Stopped) {
                logger$1.error("[Camera-face] start failed, please call function 'stopDetect' firstly");
                return false;
            }
            if (!this._isInitialized) {
                logger$1.error("[Camera-face] start failed, please call function 'init' firstly");
                return false;
            }
            if (!index.getCapacity().face) {
                logger$1.error("[Camera-face] start failed, please init face in camera firstly");
                return false;
            }
            if (!this.isSupport()) {
                logger$1.error("[Camera-face] face detect is not supported!");
                return false;
            }
            if (isTT$1()) {
                this._detector = tt.createFaceDetector();
                var duration = 1000 / DEFAULT_INTERVAL;
                try {
                    duration = 1000 / this._config.interval;
                }
                catch (e) {
                    duration = 1000 / DEFAULT_INTERVAL;
                }
                this._timer = setInterval(this.update.bind(this), duration);
                this.addActionListener();
            }
            this._state = FaceStatus.Ready;
            logger$1.log('[camera-face] startDetect');
            return true;
        };
        Face.prototype.getFaceInfos = function () {
            return __spreadArrays(this._faceInfos);
        };
        Face.prototype.addActionListener = function () {
            if (this._detector) {
                this._detector.onActions(this.onActions.bind(this));
            }
        };
        Face.prototype.onActions = function (detectData) {
            var _this = this;
            if (detectData.actions.length > 0) {
                this.emit(FaceEvent.onFaceActions, {
                    id: detectData.id,
                    actions: detectData.actions
                });
                detectData.actions.forEach(function (element) {
                    switch (element) {
                        case FaceActionType.Blink:
                            _this.emit(FaceEvent.onBlink, {
                                id: detectData.id
                            });
                            break;
                        case FaceActionType.BlinkLeft:
                            _this.emit(FaceEvent.onBlinkLeft, {
                                id: detectData.id
                            });
                            break;
                        case FaceActionType.BlinkRight:
                            _this.emit(FaceEvent.onBlinkRight, {
                                id: detectData.id
                            });
                            break;
                        case FaceActionType.BrowJump:
                            _this.emit(FaceEvent.onBrowJump, {
                                id: detectData.id
                            });
                            break;
                        case FaceActionType.HeadPitch:
                            _this.emit(FaceEvent.onHeadPitch, {
                                id: detectData.id
                            });
                            break;
                        case FaceActionType.HeadYaw:
                            _this.emit(FaceEvent.onHeadYaw, {
                                id: detectData.id
                            });
                            break;
                        case FaceActionType.HeadYawIndian:
                            _this.emit(FaceEvent.onHeadYawIndian, {
                                id: detectData.id
                            });
                            break;
                        case FaceActionType.MouthAh:
                            _this.emit(FaceEvent.onMouthAh, {
                                id: detectData.id
                            });
                            break;
                        case FaceActionType.MouthPout:
                            _this.emit(FaceEvent.onMouthPout, {
                                id: detectData.id
                            });
                            break;
                    }
                });
            }
        };
        Face.prototype.removeActionListener = function () {
            if (this._detector) {
                this._detector.offActions(this.onActions.bind(this));
            }
        };
        Face.prototype.stopDetect = function () {
            this.removeAllListeners();
            this.removeActionListener();
            this._debug = 0;
            if (this._timer) {
                clearInterval(this._timer);
            }
            this._timer = null;
            this._detector = null;
            index.getLayer().clear(NAME);
            this._state = FaceStatus.Stopped;
        };
        Face.prototype.isSupport = function () {
            if (isTT$1()) {
                if (tt.createFaceDetector) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        };
        Face.prototype.update = function () {
            var _this = this;
            if (!isTT$1()) {
                return;
            }
            if (this._detector && index.getVideo()) {
                this._detector.detectFaces(index.getVideo()).then(function (res) {
                    _this._faceInfos = [];
                    var layer = index.getLayer();
                    layer.clear(NAME);
                    if (res.length > 0) {
                        _this._faceInfos = _this.updateFaceInfo(res, layer);
                        _this.emit(FaceEvent.onFaceInfos, __spreadArrays(_this._faceInfos));
                    }
                });
            }
        };
        Face.prototype.updateFaceInfo = function (data, layer) {
            var _this = this;
            var faceInfos = [];
            data.forEach(function (element) {
                var boundingBoxPoint = _this.convertLocation(element.boundingBox.left, element.boundingBox.top);
                var _a = _this.convertSize(element.boundingBox.width, element.boundingBox.height), width = _a.width, height = _a.height;
                var faceOutlineInfo = [];
                var eyebrowInfo = [];
                var eyeInfo = [];
                var noseInfo = [];
                var mouthInfo = [];
                var isPortrait = true;
                if (index.getLayer()) {
                    isPortrait = index.getLayer().isPortrait;
                }
                if (_this._debug & FaceDebug.Box) {
                    if (!isPortrait) {
                        boundingBoxPoint.y += height;
                    }
                    layer.drawRect(NAME, boundingBoxPoint.x, boundingBoxPoint.y, width, height);
                }
                element.landmarks.forEach(function (e) {
                    switch (e.type) {
                        case 'face':
                            e.locations.forEach(function (point) {
                                var convertLocation = _this.convertLocation(point.x, point.y);
                                faceOutlineInfo.push(convertLocation);
                                if (_this._debug & FaceDebug.FaceOutline) {
                                    layer.drawPoint(NAME, convertLocation.x, convertLocation.y);
                                }
                            });
                            break;
                        case 'eyebrow':
                            e.locations.forEach(function (point) {
                                var convertLocation = _this.convertLocation(point.x, point.y);
                                eyebrowInfo.push(convertLocation);
                                if (_this._debug & FaceDebug.Eyebrow) {
                                    layer.drawPoint(NAME, convertLocation.x, convertLocation.y);
                                }
                            });
                            break;
                        case 'eye':
                            e.locations.forEach(function (point) {
                                var convertLocation = _this.convertLocation(point.x, point.y);
                                eyeInfo.push(convertLocation);
                                if (_this._debug & FaceDebug.Eye) {
                                    layer.drawPoint(NAME, convertLocation.x, convertLocation.y);
                                }
                            });
                            break;
                        case 'nose':
                            e.locations.forEach(function (point) {
                                var convertLocation = _this.convertLocation(point.x, point.y);
                                noseInfo.push(convertLocation);
                                if (_this._debug & FaceDebug.Nose) {
                                    layer.drawPoint(NAME, convertLocation.x, convertLocation.y);
                                }
                            });
                            break;
                        case 'mouth':
                            e.locations.forEach(function (point) {
                                var convertLocation = _this.convertLocation(point.x, point.y);
                                mouthInfo.push(convertLocation);
                                if (_this._debug & FaceDebug.Mouth) {
                                    layer.drawPoint(NAME, convertLocation.x, convertLocation.y);
                                }
                            });
                            break;
                    }
                });
                var faceInfo = {
                    id: element.id,
                    score: element.score,
                    boundingBox: {
                        left: boundingBoxPoint.x,
                        top: boundingBoxPoint.y,
                        width: width,
                        height: height
                    },
                    faceOutline: faceOutlineInfo,
                    eyebrow: eyebrowInfo,
                    eye: eyeInfo,
                    nose: noseInfo,
                    mouth: mouthInfo,
                    pitch: element.pitch,
                    roll: isPortrait ? element.roll : element.roll + 90,
                    yaw: element.yaw
                };
                faceInfos.push(faceInfo);
            });
            return faceInfos;
        };
        Face.prototype.convertLocation = function (x, y) {
            var layer = index.getLayer();
            return layer.convertLocation(x, y);
        };
        Face.prototype.convertSize = function (width, height) {
            var layer = index.getLayer();
            return layer.convertSize(width, height);
        };
        Face.prototype.debugEnable = function (mask) {
            this._debug |= mask;
        };
        Face.prototype.debugDisable = function (mask) {
            this._debug &= ~mask;
        };
        return Face;
    }(eventemitter3);
    var index$1 = new Face();

    class GameUI extends ui.test.TestSceneUI {
        constructor() {
            super();
            GameUI.instance = this;
            Laya.MouseManager.multiTouchEnabled = false;
        }
        onEnable() {
            this._control = this.getComponent(GameControl);
            this.tipLbll.on(Laya.Event.CLICK, this, this.onTipClick);
            this.initCamera();
        }
        onTipClick(e) {
            this.tipLbll.visible = false;
            this._score = 0;
            this.scoreLbl.text = "";
            this._control.startGame();
        }
        addScore(value = 1) {
            this._score += value;
            this.scoreLbl.changeText("分数：" + this._score);
            if (this._control.createBoxInterval > 600 && this._score % 20 == 0)
                this._control.createBoxInterval -= 20;
        }
        startGame() {
            this.tipLbll.visible = false;
            this._score = 0;
            this.scoreLbl.text = "";
            this._control.startGame();
            index$1.on(FaceEvent.onFaceInfos, this.onFaceInfos, this);
            index$1.on(FaceEvent.onBlink, this.shoot, this);
            index$1.on(FaceEvent.onBlinkLeft, this.shoot, this);
            index$1.on(FaceEvent.onBlinkRight, this.shoot, this);
        }
        stopGame() {
            this.tipLbll.visible = true;
            this.tipLbll.text = "游戏结束了，张嘴重新开始\n\n眨眼发射子弹";
            index$1.off(FaceEvent.onFaceInfos, this.onFaceInfos, this);
            index$1.off(FaceEvent.onBlink, this.shoot, this);
            index$1.off(FaceEvent.onBlinkLeft, this.shoot, this);
            index$1.off(FaceEvent.onBlinkRight, this.shoot, this);
            this._control.stopGame();
            index$1.once(FaceEvent.onMouthAh, this.startGame, this);
        }
        initCamera() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('initCamera', this.cameraRoot, this.cameraRoot.width, this.cameraRoot.height);
                index.init({
                    layerAdapter: new CameraLayaLayer({
                        root: this.cameraRoot,
                        width: Laya.stage.width,
                        height: Laya.stage.height,
                    }),
                    capacity: [CameraCapacity.Face]
                });
                try {
                    yield index.start();
                    index.setBeauty({ whiten: 0.4, smoothen: 0.13, enlargeEye: 0.13, slimFace: 0.45 });
                    index$1.init({});
                    index$1.startDetect();
                    index$1.once(FaceEvent.onMouthAh, this.startGame, this);
                }
                catch (e) {
                    console.log('camera start fail', e);
                }
            });
        }
        onFaceInfos(faceInfos) {
            if (faceInfos.length === 0) {
                return;
            }
            const faceInfo = faceInfos[0];
            this.aircraft.x = faceInfo.nose[6].x;
        }
        shoot() {
            this._control.createBullet(this.aircraft.x);
        }
    }

    class Bullet extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            var rig = this.owner.getComponent(Laya.RigidBody);
            rig.setVelocity({ x: 0, y: -10 });
        }
        onTriggerEnter(other, self, contact) {
            this.owner.removeSelf();
        }
        onUpdate() {
            if (this.owner.y < -10) {
                this.owner.removeSelf();
            }
        }
        onDisable() {
            Laya.Pool.recover("bullet", this.owner);
        }
    }

    class DropBox extends Laya.Script {
        constructor() {
            super();
            this.level = 1;
        }
        onEnable() {
            this._rig = this.owner.getComponent(Laya.RigidBody);
            this.level = Math.round(Math.random() * 5) + 1;
            this._text = this.owner.getChildByName("levelTxt");
            this._text.text = this.level + "";
        }
        onUpdate() {
            this.owner.rotation++;
        }
        onTriggerEnter(other, self, contact) {
            var owner = this.owner;
            if (other.label === "buttle") {
                if (this.level > 1) {
                    this.level--;
                    this._text.changeText(this.level + "");
                    owner.getComponent(Laya.RigidBody).setVelocity({ x: 0, y: -10 });
                    Laya.SoundManager.playSound("sound/hit.wav");
                }
                else {
                    if (owner.parent) {
                        let effect = Laya.Pool.getItemByCreateFun("effect", this.createEffect, this);
                        effect.pos(owner.x, owner.y);
                        owner.parent.addChild(effect);
                        effect.play(0, true);
                        owner.removeSelf();
                        Laya.SoundManager.playSound("sound/destroy.wav");
                    }
                }
                GameUI.instance.addScore(1);
            }
            else if (other.label === "ground") {
                owner.removeSelf();
                GameUI.instance.stopGame();
            }
        }
        createEffect() {
            let ani = new Laya.Animation();
            ani.loadAnimation("test/TestAni.ani");
            ani.on(Laya.Event.COMPLETE, null, recover);
            function recover() {
                ani.removeSelf();
                Laya.Pool.recover("effect", ani);
            }
            return ani;
        }
        onDisable() {
            Laya.Pool.recover("dropBox", this.owner);
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/GameUI.ts", GameUI);
            reg("script/GameControl.ts", GameControl);
            reg("script/Bullet.ts", Bullet);
            reg("script/DropBox.ts", DropBox);
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "test/TestScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
