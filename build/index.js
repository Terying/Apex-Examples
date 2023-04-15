/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const _20_Driving_1 = __webpack_require__(/*! ./scenes/20_Driving */ "./src/scenes/20_Driving.ts");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let engine = new Apex.Engine({ width: 1200, height: 800 });
        document.body.append(engine.output);
        // let scene = await ProceduralSkybox();
        // let scene = await CubeMapSkybox();
        // let scene = await Component();
        // let scene = await Geometrys();
        // let scene = await UVGeometrys();
        // let scene = await CustomMesh();
        // let scene = await DataTexture();
        // let scene = await RenderTarget();
        // let scene = await CubeRenderTarget();
        // let scene = await LoadHDR();
        // let scene = await PBRMaterial();
        // let scene = await PBRGeometrys();
        // let scene = await PBRTexture();
        // let scene = await LoadGLTF();
        // let scene = await LoadGLTF2();
        // let scene = await BlurPass();
        // let scene = await BloomPass();
        // let scene = await CustomMaterial();
        // let scene = await CustomPostprocessing();
        let scene = yield (0, _20_Driving_1.Driving)();
        engine.launchScene(scene);
    });
}
main();


/***/ }),

/***/ "./src/scenes/20_Driving.ts":
/*!**********************************!*\
  !*** ./src/scenes/20_Driving.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Driving = void 0;
const vs = `
    in vec3 a_Position;
    in vec2 a_Uv;
    out vec2 v_Uv;
    void main(){
        gl_Position = vec4(a_Position, 1.0);
        v_Uv = a_Uv;
    }
`;
const fs = `
    in vec2 v_Uv;
    uniform vec2 u_ScreenSize;
    uniform float u_Time;
    out vec4 fragColor;

    const vec3 skyColor = vec3(200.0 / 255.0 * 1.6, 100.0 / 255.0 * 1.6, 0.0 / 255.0 * 1.6);
    const vec3 groundColor = vec3(0.0);
    const vec3 fog = vec3(1.0, 0.0, 0.0);
    const vec3 sunColor = vec3(1.0, 0.9, 0.0);
    const vec3 sunPosAndRadius = vec3(1.0, 0.6, 0.18);
    const vec4 haloAndThickness = vec4(1.0, 0.93, 0.0, 0.2);
    const vec3 buildColor = vec3(0.3, 0.3, 0.3);

    const float PI2 = 6.2831852;

    float hash11(float p)
    {
        p = fract(p * 0.1031);
        p *= p + 33.33;
        p *= p + p;
        return fract(p);
    }

    float easeQuadraticOut(float t) {
        return t * (2.0 - t);
    }

    float easeExpoOut(float t) {
        return (t == 1.0) ? 1.0 : (-pow(2.0, -10.0 * t) + 1.0);
    }

    float section(float l, float r, float v) {
        return step(l, v) * step(v, r);
    }

    void grid(in vec2 norUv, in float speed, out vec3 bg) {
        vec2 q = 10.0 * vec2(norUv.x / (norUv.y + 1.0), 2.0 / (norUv.y + 1.0));
        vec2 qh = vec2(q.x, round(q.y));
        vec2 qv = vec2(round(q.x - speed * u_Time) + speed * u_Time, q.y);
        float dq = min(length(q - qh), length(q - qv));
        float intensity = 0.2;
        bg += 0.5 * skyColor * smoothstep(0.1, 0.0, dq) * smoothstep(-0.9, 0.5, norUv.y) * intensity;
    }

    void sun(in float d, out vec3 bg) {
        float s = step(sunPosAndRadius.z, d);
        bg = s * bg + (1. - s) * sunColor;
    }

    void halo(in float d, out vec3 bg) {
        float t = clamp(abs(d - sunPosAndRadius.z) / haloAndThickness.w, 0.0, 1.0);
        t = easeExpoOut(t);
        bg = mix(haloAndThickness.rgb, bg, t);
    }

    void building(in vec2 uv, in vec4 ssom, in float intensity, out vec3 bg) {
        float scale = ssom.x;
        float speed = ssom.y;
        float offset = ssom.z;
        float maxH = ssom.w;
        float x = floor(uv.x * scale + u_Time * speed + offset);
        float h = hash11(x) * maxH;
        bg = step(h, uv.y) * bg + step(uv.y, h) * buildColor * intensity;
    }

    void plane(in vec2 uv, out vec3 bg) {

        float f = 1.0;
        //顶部
        f = section(0.2, 0.25, uv.x) * step(uv.y, 0.26);
        f = max(f, section(0.25, 0.3, uv.x) * step(uv.y, 0.13 + (-2.6 * (uv.x - 0.3))));
        f = max(f, section(0.3, 0.62, uv.x) * step(uv.y, 0.13 + smoothstep(0.3, 0.62, uv.x) * 0.08));
        f = max(f, section(0.62, 0.85, uv.x) * step(uv.y, smoothstep(0.95, 0.62, uv.x) * 0.21));

        //尾部
        f *= max(1.0 - section(0.12, 0.26, uv.y), step(0.2 + (-0.15 * (uv.y - 0.26)), uv.x));
        f *= max(1.0 - section(0.10, 0.12, uv.y), step(0.221 + (1.5 * (uv.y - 0.12)), uv.x));
        f *= max(1.0 - section(0.03, 0.05, uv.y), step(0.221 + (-1.5 * (uv.y - 0.03)), uv.x));

        //底部
        f *= max(1.0 - section(0.2, 0.85, uv.x), step(0.03 + smoothstep(0.5, 0.75, uv.x) * 0.025, uv.y));
        bg = mix(bg, vec3(0.0), f);

        //流线
        float x = clamp(uv.x, 0.225, 0.835);
        float y = 0.03 + smoothstep(0.4, 0.85, x) * 0.025;
        float d = length(uv - vec2(x, y));
        float intensity = pow(0.05 + 0.6 * sin(PI2 * x + 0.003 * u_Time), 5.0) + 0.02;
        bg += vec3(1.0 , 0.1, 0.0) * 0.0001 / (d * d + 0.00001) * smoothstep(-1.0, 1.0, x) * intensity;
        
    }

    void pole(in vec2 uv, in vec2 sr, out vec3 bg) {
        float speed = sr.x;
        float radius = sr.y;
        float pos = mod(2.0 + u_Time * speed, 2.0);
        float d = abs(uv.x - pos);
        bg = mix(bg, vec3(0.0), smoothstep(radius, 0.0, d));
    }

    void main(){

        vec2 uv = v_Uv;
        //将(0, 0)移至中心、uv等距化
        vec2 norUv = (2.0 * gl_FragCoord.xy - u_ScreenSize) / min(u_ScreenSize.x, u_ScreenSize.y);

        //背景
        vec3 bg = skyColor;

        //网格
        grid(norUv, -0.0005, bg);

        //太阳
        float d = length(norUv - sunPosAndRadius.xy);
        sun(d, bg);
        halo(d, bg);

        //建筑
        building(uv, vec4(40.0, 0.001, 0.0, 0.4), 1.0, bg);
        building(uv, vec4(20.0, 0.002, 1000.0, 0.6), 0.5, bg);

        //雾
        bg = mix(fog, bg, easeQuadraticOut(uv.y));
        bg = mix(groundColor, bg, easeQuadraticOut(uv.y));

        //战机
        plane(uv, bg);

        //柱子
        pole(uv, vec2(-0.005, 0.05), bg);
        fragColor = vec4(bg, 1.0);

    }
`;
function Driving() {
    let scene = new Apex.Scene("Driving");
    let skyboxMaterial = new Apex.SkySphereMaterial();
    scene.env.skybox.material = skyboxMaterial;
    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    let camera = cameraGo.addComponent(Apex.Camera);
    scene.addChild(cameraGo);
    //创建InvertShader
    let shader = Apex.Managers.Shader.addShader("DrivingShader", new Set([Apex.Const.ATTRIBUTE_MAP.a_Position, Apex.Const.ATTRIBUTE_MAP.a_Uv]), new Set([Apex.Const.UNIFORM_MAP.u_ScreenSize, Apex.Const.UBO_ITEM_MAP.u_Time]));
    shader.addPass(vs, fs);
    //在后期上作画
    camera.postprocessor = new Apex.Postprocessor(camera, [new DrivingPass()]);
    return scene;
}
exports.Driving = Driving;
/**
 *@author jhui
 *@description Synthwave song
 *@date 2023-04-11 19:13:18
 */
class DrivingPass extends Apex.EffectPass {
    _initShader() {
        this._shader = Apex.Managers.Shader.findShader("DrivingShader");
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map