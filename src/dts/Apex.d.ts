declare namespace Apex {
export default class Config {
    static width: number;
    static height: number;
    static antiAliasing: boolean;
    static isFPS: boolean;
    static get aspect(): number;
    static set(options?: {
        width?: number;
        height?: number;
        antiAliasing?: boolean;
        isFPS?: boolean;
    }): void;
}


export declare class Engine {
    private _inputSystem;
    private _scriptSystem;
    private _physicsSystem;
    private _rendererSystem;
    private _performanceSystem;
    get output(): HTMLCanvasElement;
    constructor(options?: {
        width?: number;
        height?: number;
        antiAliasing?: boolean;
    });
    stop(): void;
    continue(): void;
    destroy(): void;
    private _logicalUpdate;
    private _renderUpdate;
    launchScene(scene: Scene): void;
}

/**
 *@author jhui
 *@description 拓展位运算（初始长度为64位）
 *@description 由于js操蛋的位运算最高只能支持32位，故对其进行拓展
 *@description 注意：位运算的速度不一定比传统运算快，最好按需使用
 *@description 注意：如果确定不需要用超过32位的位运算，无需使用该类（直接使用位运算符操作即可）
 *@date 2023-01-10 14:18:26
 */
export declare class BitOp {
    private _bits;
    /**默认长度为64位 */
    constructor(length?: number);
    get bits(): Int32Array;
    get length(): number;
    set length(value: number);
    setBit(bit: number, enable: boolean): BitOp;
    setBitByIndexPos(index: number, position: number, enable: boolean): BitOp;
    getBit(bit: number): boolean;
    getBitByIndexPos(index: number, position: number): boolean;
    /**
     *@description 与
     *@param
     *@return
     */
    and(bitOp: BitOp): BitOp;
    /**
     *@description 或
     *@param
     *@return
     */
    or(bitOp: BitOp): BitOp;
    /**
     *@description 异或
     *@param
     *@return
     */
    xor(bitOp: BitOp): BitOp;
    /**
     *@description 非
     *@param
     *@return
     */
    not(): BitOp;
    /**
     *@description 左移
     *@param count      左移count个单位
     *@return
     */
    leftMove(count: number): BitOp;
    /**
     *@description 右移
     *@param count      右移count个单位
     *@return
     */
    rightMove(count: number): BitOp;
    toString(): string;
    private _setLength;
    private _setMaxLength;
}

/**
 *@author jhui
 *@description 全局常量
 *@date 2022-10-23 21:25:06
 */
export declare namespace Const {
    /**精度常量 */
    const PRECISION: {
        LV0: number;
        LV1: number;
        LV2: number;
        LV3: number;
        LV4: number;
        LV5: number;
    };
    enum FLOAT_TYPE {
        /**浮点类型 */
        FloatType = 0,
        /**半浮点类型 */
        HalfFloatType = 1
    }
    enum TYPE_ARRAY {
        Uint8 = 0,
        Uint16 = 1,
        Uint32 = 2,
        Float32 = 3,
        Float64 = 4
    }
    type TypeArray = Uint8Array | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array | Float32Array | Float64Array;
    /**GameObjec Event */
    const GO_EVENT: {
        /**添加子对象 */
        ADD_CHILD: string;
        /**附加到父节点下 */
        ADD_TO_PARENT: string;
        /**移除子对象 */
        REMOVE_CHILD: string;
        /**从父对象上移除 */
        REMOVE_FROM_PARENT: string;
        /**更换父对象 */
        PARENT_CHANGE: string;
        /**gameobjec.activeInHierarchy发生变更 */
        GO_STATE_CHANGE: string;
        /**更改在兄弟列表中的顺序 */
        SIBILING_INDEX_CHANGE: string;
        /**添加组件 */
        ADD_COMPONENT: string;
        /**移除组件 */
        REMOVE_COMPONENT: string;
        /**transform组件变脏 */
        TRANSFORM_CHANGED: string;
    };
    /**变换标记 */
    const TRANSFORM_FLAG: {
        /**无变换 */
        NONE: number;
        /**平移变换 */
        POSITION: number;
        /**旋转变换 */
        ROTATION: number;
        /**缩放变换 */
        SCALE: number;
        /**变换组合：旋转缩放 */
        RS: number;
        /**变换组合：平移旋转缩放 */
        TRS: number;
        /**TRS反向掩码 */
        TRS_MASK: number;
        /**世界矩阵 */
        WORLD_MATRIX: number;
    };
    enum GL_TYPE {
        BOOL = 0,
        BOOL2 = 1,
        BOOL3 = 2,
        BOOL4 = 3,
        INT = 4,
        INT2 = 5,
        INT3 = 6,
        INT4 = 7,
        UINT = 8,
        UINT2 = 9,
        UINT3 = 10,
        UINT4 = 11,
        FLOAT = 12,
        FLOAT2 = 13,
        FLOAT3 = 14,
        FLOAT4 = 15,
        DOUBLE = 16,
        DOUBLE2 = 17,
        DOUBLE3 = 18,
        DOUBLE4 = 19,
        MATRIX2 = 20,
        MATRIX2x3 = 21,
        MATRIX3 = 22,
        MATRIX3x2 = 23,
        MATRIX4 = 24,
        COLOR = 25,
        TEXTURE = 26,
        CUBE_TEXTURE = 27,
        /**结构体 */
        STRUCT = 28,
        /**标量数组 */
        FLOAT_ARRAY = 29,
        /**矢量数组 */
        VECTOR_ARRAY = 30,
        /**结构体数组 */
        STRUCT_ARRAY = 31
    }
    const GL_DRAW_MODE: {
        POINTS: number;
        LINE_STRIP: number;
        LINE_LOOP: number;
        LINES: number;
        TRIANGLE_STRIP: number;
        TRIANGLE_FAN: number;
        TRIANGLES: number;
    };
    const GL_RENDER_BATCH: {
        NONE: number;
        STATIC: number;
        DYNAMIC: number;
        INSTANCE: number;
    };
    const GL_RENDER_MODE: {
        /**不透明 */
        OPAQUE: number;
        /**镂空（进行透明度测试） */
        CUTOUT: number;
        /**隐现 */
        FADE: number;
        /**透明（进行透明度混合） */
        TRANSPARENT: number;
    };
    const GL_RENDER_QUEUE: {
        OPAQUE: number;
        ALPHA_TEST: number;
        TRANSPARENT: number;
    };
    const GL_CULL_FACE: {
        NONE: number;
        BACK: number;
        FRONT: number;
        FRONT_BACK: number;
    };
    const GL_DEPTH: {
        TEST_OFF: number;
        TEST_NEVER: number;
        TEST_LESS: number;
        TEST_EQUAL: number;
        TEST_LEQUAL: number;
        TEST_GREATER: number;
        TEST_NOTEQUAL: number;
        TEST_GEQUAL: number;
        TEST_ALWAYS: number;
    };
    const GL_STENCIL: {
        TEST_OFF: number;
        TEST_NEVER: number;
        TEST_LESS: number;
        TEST_EQUAL: number;
        TEST_LEQUAL: number;
        TEST_GREATER: number;
        TEST_NOTEQUAL: number;
        TEST_GEQUAL: number;
        TEST_ALWAYS: number;
        OP_ZERO: number;
        OP_KEEP: number;
        OP_REPLACE: number;
        OP_INCR: number;
        OP_INCR_WRAP: number;
        OP_DECR: number;
        OP_DECR_WRAP: number;
        OP_INVERT: number;
    };
    const GL_BLENDING: {
        NONE: number;
        NORMAL: number;
        ADDITIVE: number;
        SUBTRACTIVE: number;
        MULTIPLY: number;
        ZERO_FACTOR: number;
        ONE_FACTOR: number;
        ONE_MINUS_SRC_COLOR_FACTOR: number;
        ONE_MINUS_SRC_ALPHA_FACTOR: number;
        ONE_MINUS_DST_ALPHA_FACTOR: number;
        ONE_MINUS_DST_COLOR_FACTOR: number;
        SRC_COLOR_FACTOR: number;
        SRC_ALPHA_FACTOR: number;
        SRC_ALPHA_SATURATE_FACTOR: number;
        DST_ALPHA_FACTOR: number;
        DST_COLOR_FACTOR: number;
        ADD_EQUATION: number;
        SUB_EQUATION: number;
        REVERSE_SUB_EQUATION: number;
        MIN_EQUATION: number;
        MAX_EQUATION: number;
    };
    enum TONE_MAPPING {
        LINEAR = 0,
        REINHARD = 1,
        OPTIMIZED_CINEON = 2,
        ACES_FILMIC = 3
    }
    /**默认Attribute表，系统会自动赋值 */
    const ATTRIBUTE_MAP: {
        a_Position: string;
        a_Normal: string;
        a_Tangent: string;
        a_Color: string;
        a_Uv: string;
        a_Uv1: string;
    };
    /**默认Uniform表，系统会自动赋值 */
    const UNIFORM_MAP: {
        u_MvpMatrix: string;
        u_ModelMatrix: string;
        u_NormalMatrix: string;
        u_EnvLightMap: string;
        u_EnvRefMap: string;
        u_EnvBRDFLUTMap: string;
        u_SourceMap: string;
        u_ScreenSize: string;
    };
    const EnvLightMapDefineName = "ENV_LIGHT_MAP";
    const EnvRefMapDefineName = "ENV_REF_MAP";
    const EnvBRDFLUTDefineName = "ENV_BRDF_LUT_MAP";
    /**UniformBlock */
    const UBO_MAP: {
        CameraBlock: string;
        SceneBlock: string;
        LightBlock: string;
        ShadowBlock: string;
    };
    /**BlockItem */
    const UBO_ITEM_MAP: {
        u_ViewMatrix: string;
        u_ProjectMatrix: string;
        u_ViewProjectMatrix: string;
        u_ProjectParams: string;
        u_Viewport: string;
        u_CameraPosition: string;
        u_CameraDirection: string;
        u_CameraUp: string;
        u_Time: string;
        u_FogStart: string;
        u_FogRange: string;
        u_FogColor: string;
        u_EnvColorAndIntensity: string;
        u_LightCounts: string;
        u_ParallelLights: string;
        u_PointLights: string;
        u_SpotLights: string;
    };
    const PARALLEL_LIGHT_STRUCT: {
        direction: string;
        colorAndIntensity: string;
    };
    const POINT_LIGHT_STRUCT: {
        position: string;
        colorAndIntensity: string;
        constLinearQuad: string;
    };
    const SPOT_LIGHT_STRUCT: {
        positionAndCutOff: string;
        directionAndOuterCutOff: string;
        colorAndIntensity: string;
        constLinearQuad: string;
    };
    /**纹理类型 */
    enum TEX_TYPE {
        /**一维 */
        TEXTURE_1D = 0,
        /**二维 */
        TEXTURE_2D = 1,
        /**三维 */
        TEXTURE_3D = 2,
        /**立方纹理 */
        CUBE = 3
    }
    enum TEX_ENCODING {
        LINEAR = 0,
        SRGB = 1
    }
    const TEX_INTERNAL_FORMAT: {
        R8: number;
        R8I: number;
        R8UI: number;
        R8_SNORM: number;
        R16I: number;
        R16UI: number;
        R16F: number;
        R32I: number;
        R32UI: number;
        R32F: number;
        RG8: number;
        RG8I: number;
        RG8UI: number;
        RG8_SNORM: number;
        RG16I: number;
        RG16UI: number;
        RG16F: number;
        RG32I: number;
        RG32UI: number;
        RG32F: number;
        RGB8: number;
        RGB8I: number;
        RGB8UI: number;
        RGB8_SNORM: number;
        RGB16I: number;
        RGB16UI: number;
        RGB16F: number;
        RGB32I: number;
        RGB32UI: number;
        RGB32F: number;
        SRGB8: number;
        RGB565: number;
        R11F_G11F_B10F: number;
        RGB9_E5: number;
        RGBA8: number;
        RGBA8I: number;
        RGBA8UI: number;
        RGBA8_SNORM: number;
        SRGB8_ALPHA8: number;
        RGBA16I: number;
        RGBA16UI: number;
        RGBA16F: number;
        RGBA32I: number;
        RGBA32UI: number;
        RGBA32F: number;
        RGBA4: number;
        RGB5_A1: number;
        RGB10_A2: number;
        RGB10_A2UI: number;
    };
    /**纹理格式 */
    const TEX_FORMAT: {
        RED: number;
        RED_INTEGER: number;
        RG: number;
        RG_INTEGER: number;
        RGB: number;
        RGB_INTEGER: number;
        RGBA: number;
        RGBA_INTEGER: number;
    };
    /**纹理内部数据格式 */
    const TEX_DATA_TYPE: {
        BYTE: number;
        SHORT: number;
        UNSIGNED_BYTE: number;
        UNSIGNED_SHORT: number;
        INT: number;
        UNSIGNED_INT: number;
        UNSIGNED_SHORT_5_6_5: number;
        UNSIGNED_SHORT_5_5_5_1: number;
        UNSIGNED_SHORT_4_4_4_4: number;
        UNSIGNED_INT_5_9_9_9_REV: number;
        UNSIGNED_INT_2_10_10_10_REV: number;
        UNSIGNED_INT_10F_11F_11F_REV: number;
        HALF_FLOAT: number;
        FLOAT: number;
    };
    const TEX_MAPPING: {};
    /**纹理填充方式 */
    const TEX_WRAP: {
        REPEAT: number;
        MIRRORED_REPEAT: number;
        CLAMP_TO_EDGE: number;
    };
    /**纹理过滤参数 */
    const TEX_FILTER: {
        NEAREST: number;
        NEAREST_MIPMAP_LINEAR: number;
        NEAREST_MIPMAP_NEAREST: number;
        LINEAR: number;
        LINEAR_MIPMAP_LINEAR: number;
        LINEAR_MIPMAP_NEAREST: number;
    };
    /**RenderTarget format */
    const RT_FORMAT: {
        RG8: number;
        RG16F: number;
        RG32F: number;
        RGB8: number;
        SRGB8: number;
        RGBA8: number;
        SRGB8_ALPHA8: number;
        RGB16F: number;
        RGBA16F: number;
        RGB32F: number;
        RGBA32F: number;
        DEPTH_COMPONENT16: number;
        DEPTH_COMPONENT24: number;
        DEPTH_COMPONENT32F: number;
        STENCIL_INDEX8: number;
        DEPTH24_STENCIL8: number;
    };
    enum PRIMITIVE_TYPE {
        CUBE = 0,
        SPHERE = 1,
        CONE = 2,
        CYLINDER = 3,
        CAPSULE = 4,
        TORUS = 5,
        TORUS_KNOT = 6,
        QUAD = 7,
        PLANE = 8
    }
    /**资源类型 */
    enum ASSET_TYPE {
        BITMAP = 0,
        TEXTURE = 1,
        TEXTURE3D = 2,
        CUBE_TEXTURE = 3,
        AUDIO = 4,
        GLTF = 5,
        ARRAY_BUFFER = 6,
        BLOB = 7,
        DOCUMENT = 8,
        JSON = 9,
        TEXT = 10
    }
    /**天空盒类型 */
    enum SKYBOX_TYPE {
        /**天空盒 */
        SkyBox = 0,
        /**天空球 */
        SkySphere = 1
    }
    /**灯光类型 */
    enum LIGHT_TYPE {
        /**平行光 */
        Parallel = 0,
        /**点光源 */
        Point = 1,
        /**聚光灯 */
        Spot = 2
    }
    /**灯光模式 */
    enum LIGHT_MODE {
        /**实时光源 */
        Realtime = 0,
        /**混合光源 */
        Mixed = 1,
        /**烘焙光源 */
        Baked = 2
    }
    /**阴影类型 */
    enum SHADOW_TYPE {
        No = 0,
        Hard = 1,
        Soft = 2
    }
    /**环境光类型 */
    enum ENV_LIGHT_TYPE {
        SkyBox = 0,
        Color = 1
    }
    /**环境反射类型 */
    enum ENV_REF_TYPE {
        SkyBox = 0,
        Custom = 1
    }
    enum LAYER {
        NONE = 0,
        Default = 1,
        Layer1 = 2,
        Layer2 = 4,
        Layer3 = 8,
        Layer4 = 16,
        Layer5 = 32,
        Layer6 = 64,
        Layer7 = 128,
        Layer8 = 256,
        SkyBox = 512,
        ALL = 1023
    }
    const KEY_BOARD: {
        ShiftLeft: string;
        AltLeft: string;
        ControlLeft: string;
        ArrowUp: string;
        ArrowDown: string;
        ArrowLeft: string;
        ArrowRight: string;
        KeyQ: string;
        KeyW: string;
        KeyE: string;
        KeyR: string;
        KeyT: string;
        KeyU: string;
        KeyI: string;
        KeyO: string;
        KeyP: string;
        KeyA: string;
        KeyS: string;
        KeyD: string;
        KeyF: string;
        KeyG: string;
        KeyH: string;
        KeyJ: string;
        KeyK: string;
        KeyL: string;
        KeyZ: string;
        KeyX: string;
        KeyC: string;
        KeyV: string;
        KeyB: string;
        KeyN: string;
        KeyM: string;
    };
}

export declare class Handler {
    private static _TAG;
    static get(method: Function, context: Object, ...params: Array<any>): Handler;
    static put(t: Handler | Array<Handler>): void;
    private _method;
    private _context;
    private _params;
    constructor(method?: Function, context?: Object, ...params: Array<any>);
    set(method: Function, context: Object, ...params: Array<any>): void;
    call(...params: Array<any>): void;
}

export declare class Timer {
    private _delay;
    private _delta;
    private _baseFrame;
    private _onceHandlers;
    private _loopHandlers;
    /**当前已经执行的帧数 */
    private _curFrame;
    private _wait;
    private _sumDelta;
    private _tick;
    /**
     *@description 计时器构造函数
     *@param delay          延迟时间（如果基于帧率则为延迟帧数）
     *@param delta          间隔时间（如果基于帧率则为间隔帧数）
     *@param baseFrame      是否基于帧率调度
     *@return
     */
    constructor(delay?: number, delta?: number, baseFrame?: boolean);
    get delay(): number;
    get delta(): number;
    get baseFrame(): boolean;
    get curFrame(): number;
    addHandler(handler: Handler, once?: boolean): void;
}

export declare class Asset {
    protected _uuid: string;
    protected _referenceList: Set<string>;
    protected _beReferenceList: Set<string>;
    constructor();
    get uuid(): string;
    protected _addRef(uuid: string): void;
    protected _decRef(uuid: string): void;
    protected _addBeRef(uuid: string): void;
    protected _decBeRef(uuid: string): void;
}

export declare class Animation extends Component {
    /**由内部进行分配 */
    static readonly FLAG: number;
}

export declare class BaseCamera extends Component {
    protected _clearFlags: number;
    protected _background: Color;
    protected _cullingLayers: number;
    protected _orthographic: boolean;
    protected _fov: number;
    protected _size: number;
    protected _aspect: number;
    protected _nearPlane: number;
    protected _farPlane: number;
    protected _viewport: Vector4;
    protected _projectMatrix: Matrix4;
    protected _projectMatrixNeedUpdate: boolean;
    protected _viewMatrixNeedUpdate: boolean;
    protected _depth: number;
    protected _occlusionCulling: boolean;
    protected _renderTarget: BaseRenderTarget;
    protected _enabledHDR: boolean;
    protected _enabledSMAA: boolean;
    protected _toneMapping: Const.TONE_MAPPING;
    protected _gamma: number;
    protected _isCubeCamera: boolean;
    constructor();
    get clearFlags(): number;
    set clearFlags(value: number);
    get cullingLayers(): number;
    set cullingLayers(value: number);
    get fov(): number;
    set fov(value: number);
    get aspect(): number;
    set aspect(value: number);
    get background(): Color;
    get depth(): number;
    set depth(value: number);
    get renderTarget(): BaseRenderTarget;
    set renderTarget(value: BaseRenderTarget);
    get enabledHDR(): boolean;
    set enabledHDR(value: boolean);
    get enabledSMAA(): boolean;
    set enabledSMAA(value: boolean);
    get toneMapping(): Const.TONE_MAPPING;
    set toneMapping(value: Const.TONE_MAPPING);
    get gamma(): number;
    set gamma(value: number);
    get projectMatrix(): Matrix4;
    get isCubeCamera(): boolean;
    protected _onEvent(): void;
    protected _updateViewMatrix(): void;
    protected _updateProjectMatrix(): void;
    protected _onTransformChange(flags: number): void;
}

export declare class Camera extends BaseCamera {
    /**由内部进行分配 */
    static readonly FLAG: number;
    private _viewMatrix;
    private _viewProjectMatrix;
    private _postprocessor;
    private _uboData;
    constructor();
    get renderTarget(): RenderTarget;
    set renderTarget(value: RenderTarget);
    get viewMatrix(): Matrix4;
    get projectMatrix(): Matrix4;
    get viewProjectMatrix(): Matrix4;
    get postprocessor(): Postprocessor;
    set postprocessor(value: Postprocessor);
    getCameraUBOData(): Map<string, any>;
    protected _updateViewMatrix(): void;
}

/**
 *@author jhui
 *@description 该组件做为脚本组件的基类
 *@date 2022-11-30 15:33:43
 */
export declare class Behaviour extends Component {
    onFixedUpdate?(dt: number): void;
    onUpdate?(dt: number): void;
    onLateUpdate?(dt: number): void;
    onRenderBefore?(dt: number): void;
    onRenderAfter?(dt: number): void;
}


/**
 *@author jhui
 *@description 组件，以组合的方式为GameObjec提供功能
 *@description 必须附加到GameObject上，不能单独实例，由引擎内部创建
 *@date 2022-12-05 11:35:00
 */
export declare class Component extends EventDispatcher {
    /**内部管理的索引 */
    protected _innerIx: number;
    protected _uuid: string;
    protected _gameobject: GameObject;
    protected _enabled: boolean;
    protected _activeInHierarchy: boolean;
    protected _invalid: boolean;
    protected _dontDestroy: boolean;
    protected _callEnable: boolean;
    protected _callStart: boolean;
    protected _dirty: boolean;
    constructor();
    get uuid(): string;
    get gameobject(): GameObject;
    get enabled(): boolean;
    set enabled(value: boolean);
    get activeInHierarchy(): boolean;
    get invalid(): boolean;
    /**
     *@description 生命周期内只会执行一次
     *@description 只要附加到GameObject上就会立即执行
     *@param
     *@return
     */
    protected onAwake(): void;
    /**
     *@description 组件激活时会执行
     *@description 初次激活会延迟到下一个帧循环中执行
     *@param
     *@return
     */
    protected onEnable(): void;
    /**
     *@description 生命周期内只会执行一次
     *@description 会延迟到下一个帧循环中执行
     *@param
     *@return
     */
    protected onStart(): void;
    /**
     *@description 组件失活时会执行
     *@param
     *@return
     */
    protected onDisable(): void;
    protected onDestroy(): void;
    destroy(): void;
    protected _onEvent(): void;
    protected _offEvent(): void;
    protected _onGameObjectActiveChange(active: boolean): void;
}

export declare class CubeCamera extends BaseCamera {
    /**由内部进行分配 */
    static readonly FLAG: number;
    private _subCameras;
    constructor();
    set cullingLayers(value: number);
    get renderTarget(): CubeRenderTarget;
    set renderTarget(value: CubeRenderTarget);
    get subCameras(): Array<Camera>;
    protected onAwake(): void;
    private _initSubCameras;
    protected _updateViewMatrix(): void;
    protected _updateProjectMatrix(): void;
    private _setViewMatrix;
}

export declare class Light extends Component {
    static getAttenuation(range: number, out: Vector3): void;
    static getParallelUBOData(): Map<string, any>;
    static getPointUBOData(): Map<string, any>;
    static getSpotUBOData(): Map<string, any>;
    /**由内部进行分配 */
    static readonly FLAG: number;
    private _type;
    private _mode;
    private _color;
    private _intensity;
    private _shadowType;
    private _range;
    private _spotAngle;
    private _spotOutAngle;
    private _parallelUBOData;
    private _pointUBOData;
    private _spotUBOData;
    getLightUBOData: () => Map<string, any>;
    constructor();
    get type(): Const.LIGHT_TYPE;
    set type(value: Const.LIGHT_TYPE);
    get color(): Color;
    set color(value: Color);
    get intensity(): number;
    set intensity(value: number);
    /**只有PointLight、和SpotLight才生效 */
    get range(): number;
    /**只有PointLight、和SpotLight才生效 */
    set range(value: number);
    /**SpotLight才生效 */
    get spotAngle(): number;
    /**SpotLight才生效 */
    set spotAngle(value: number);
    get spotOutAngle(): number;
    set spotOutAngle(value: number);
    protected onAwake(): void;
    protected _onEvent(): void;
    private _updateType;
    private _onTransformChange;
}

export declare class LineRenderer extends Component {
    /**由内部进行分配 */
    static readonly FLAG: number;
    private _curve;
}

/**
 *@author jhui
 *@description 网格过滤器
 *@date 2022-12-04 16:15:15
 */
export declare class MeshFilter extends Component {
    /**由内部进行分配 */
    static readonly FLAG: number;
    private _mesh;
    get mesh(): Mesh;
    set mesh(value: Mesh);
}

export declare class MeshRenderer extends Component {
    /**由内部进行分配 */
    static readonly FLAG: number;
    private _materials;
    private _castShadow;
    private _receiveShadow;
    private _frustumCulled;
    constructor();
    get material(): Material;
    set material(value: Material);
    get materials(): Array<Material>;
    set materials(value: Array<Material>);
}

export declare class RigidBody extends Component {
    /**由内部进行分配 */
    static readonly FLAG: number;
}

export declare class SkinnedMeshRenderer extends Component {
    /**由内部进行分配 */
    static readonly FLAG: number;
}

/**
 *@author jhui
 *@description 漫游组件
 *@date 2023-02-19 10:53:30
 */
export declare class Wander extends Behaviour {
    private _tr;
    private _forward;
    private _right;
    private _up;
    private _euler;
    private _moveSpeed;
    private _rotateSpeed;
    get moveSpeed(): number;
    set moveSpeed(value: number);
    get rotateSpeed(): number;
    set rotateSpeed(value: number);
    protected onAwake(): void;
    protected onStart(): void;
    onUpdate(dt: number): void;
}

/**
 *@author jhui
 *@description 空间变换组件
 *@description 确保局部空间属性最新，世界空间属性按需更新
 *@date 2022-12-20 14:24:11
 */
export declare class Transform extends Component {
    /**由内部进行分配 */
    static readonly FLAG: number;
    private _position;
    private _rotation;
    private _scale;
    private _localPosition;
    private _localRotation;
    private _localScale;
    private _worldMatrix;
    private _dirtyWorldFlags;
    constructor();
    get position(): Vector3;
    set position(value: Vector3);
    get localPosition(): Vector3;
    set localPosition(value: Vector3);
    get rotation(): Quaternion;
    set rotation(value: Quaternion);
    get localRotation(): Quaternion;
    set localRotation(value: Quaternion);
    get scale(): Vector3;
    set scale(value: Vector3);
    get localScale(): Vector3;
    set localScale(value: Vector3);
    get worldMatrix(): Matrix4;
    set worldMatrix(value: Matrix4);
    protected onAwake(): void;
    private _initProperty;
    getUp(out: Vector3): Vector3;
    getRight(out: Vector3): Vector3;
    getForward(out: Vector3): Vector3;
    getLocalMatrix(out: Matrix4): Matrix4;
    getWorldMatrixInv(out: Matrix4): Matrix4;
    setTransformByMatrix(mtx: Matrix4, isWorld?: boolean): void;
    setRotateByEuler(euler: Euler, isWorld?: boolean): void;
    setRotateByQuaternion(q: Quaternion, isWorld?: boolean): void;
    setRotateByMatrix(mtx: Matrix4, isWorld?: boolean): void;
    applyTranslate(v: Vector3, isWorld?: boolean): void;
    applyRotateAround(target: Vector3, axis: Vector3, radian: number, isWorld?: boolean): void;
    applyRotateByAxisAngle(axis: Vector3, radian: number, isWorld?: boolean): void;
    applyRotateByEuler(euler: Euler, isWorld?: boolean): void;
    applyRotateX(radian: number, isWorld?: boolean): void;
    applyRotateY(radian: number, isWorld?: boolean): void;
    applyRotateZ(radian: number, isWorld?: boolean): void;
    applyRotateByMatrix(mtx: Matrix4, isWorld?: boolean): void;
    applyRotateByQuaternion(quat: Quaternion, isWorld?: boolean): void;
    applyScale(s: Vector3, isWorld?: boolean): void;
    applyMatrix(mtx: Matrix4, isWorld?: boolean): void;
    transformPointToLocal(worldPos: Vector3, out: Vector3): Vector3;
    transformPointToWorld(localPos: Vector3, out: Vector3): Vector3;
    transformVectorToLocal(worldV: Vector3, out: Vector3): Vector3;
    transformVectorToWorld(localV: Vector3, out: Vector3): Vector3;
    lookAt(target: Vector3, up: Vector3, isWorld?: boolean): void;
    /**
     *@description 自身变换发生改变，需要通知子对象
     *@param flags      变换类型
     *@return
     */
    private _transform;
    /**
     *@description 父对象的世界变换发生改变
     *@param flags      变换类型
     *@return
     */
    private _onParentTransform;
    /**
     *@description 更换父对象
     *@param keepWorld      是否保持原来的世界变换
     *@return
     */
    private _onParentChange;
    private _positionUpdate;
    private _localPositionUpdate;
    private _rotationUpdate;
    private _localRotationUpdate;
    private _scaleUpdate;
    private _localScaleUpdate;
    private _worldMatrixUpdate;
    /**
     *@description 更新自身所在链路的上游世界变换
     *@param
     *@return
     */
    private _updateWorldTransform;
    /**尝试更新世界坐标 */
    private _tryUpdatePosition;
    private _tryUpdateRotation;
    private _tryUpdateScale;
    private _tryUpdateWorldMatrix;
    private _getDirtyWorldFlag;
    private _setDirtyWorldFlag;
}

export declare class Stats {
    private _mode;
    private _container;
    private _frames;
    private _beginTime;
    private _prevTime;
    private _fpsPanel;
    private _msPanel;
    private _memPanel;
    constructor();
    get dom(): HTMLDivElement;
    addPanel(panel: Panel): Panel;
    showPanel(id: number): void;
    begin(): void;
    end(): number;
    update(): void;
}
declare class Panel {
    private _name;
    private _fg;
    private _bg;
    private _min;
    private _max;
    private _pr;
    private _width;
    private _height;
    private _text_x;
    private _text_y;
    private _graph_x;
    private _graph_y;
    private _graph_width;
    private _graph_height;
    private _canvas;
    private _context;
    constructor(name: string, fg: string, bg: string);
    get dom(): HTMLCanvasElement;
    update(value: number, maxValue: number): void;
}
export {};

export declare class Event {
    private _name;
    private _handle;
    private _context;
    constructor(name: string, handle: Function, context: Object);
    get name(): string;
    get context(): Object;
    isEqual(ev: Event): boolean;
    call(...params: Array<any>): void;
    destroy(): void;
}

export declare class EventDispatcher {
    protected _listenerMap: Map<string, Array<Event>>;
    addEventListener(event: Event): void;
    /**
     *@description 判断是否存在指定事件，-1为不存在
     *@param eventName  事件名
     *@param context    事件绑定对象（上下文）
     *@return 事件索引
     */
    hasEventListener(eventName: string, context: Object): number;
    removeEventListener(eventName: string, context: Object): void;
    dispatchEvent(eventName: string, ...params: Array<any>): void;
}

export declare class GameObject extends EventDispatcher {
    /**标识该对象存在的的组件 */
    protected _componentFlags: number;
    /**标识该对象处于激活状态的组件 */
    protected _activeComponentFlags: number;
    /**标志该对象上一帧处于激活状态的组件 */
    protected _lastActiveComponentFlags: number;
    protected _belongScene: Scene;
    protected _uuid: string;
    protected _tag: string;
    protected _layer: number;
    protected _name: string;
    protected _parent: GameObject;
    protected _children: Array<GameObject>;
    protected _siblingIndex: number;
    protected _components: Array<Component>;
    protected _transform: Transform;
    protected _active: boolean;
    protected _activeInUpstream: boolean;
    protected _invalid: boolean;
    protected _isScene: boolean;
    protected _attributeMap: Map<any, any>;
    constructor(name?: string);
    get uuid(): string;
    get name(): string;
    get parent(): GameObject;
    get children(): ReadonlyArray<GameObject>;
    get siblingIndex(): number;
    get components(): ReadonlyArray<Component>;
    get transform(): Transform;
    get layer(): number;
    set layer(value: number);
    get active(): boolean;
    set active(value: boolean);
    /**在场景中的激活状态 */
    get activeInHierarchy(): boolean;
    get attributeMap(): Map<any, any>;
    protected _initProperty(): void;
    /**
     *@description 添加子对象
     *@param child          子对象
     *@param keepWorld      是否保持子对象的世界变换
     *@return
     */
    addChild(child: GameObject, keepWorld?: boolean): void;
    /**
     *@description 添加子对象（指定索引位置）
     *@param child          子对象
     *@param siblingIndex   索引位置
     *@param keepWorld      是否保持子对象的世界变换
     *@return
     */
    addChildAt(child: GameObject, siblingIndex: number, keepWorld?: boolean): void;
    /**
     *@description 设置父对象
     *@param parent         父对象
     *@param keepWorld      是否保持自身的世界变换
     *@return
     */
    setParent(parent: GameObject, keepWorld?: boolean): void;
    /**
     *@description 如果单纯想切换父对象，推荐使用addChild/setParent
     *@param keepWorld      是否保持自身的世界变换
     *@return
     */
    removeFromParent(keepWorld?: boolean): void;
    /**
     *@description 移除子对象
     *@param child      子对象
     *@param keepWorld  是否保持子对象的世界变换
     *@return
     */
    removeChild(child: GameObject, keepWorld?: boolean): void;
    /**
     *@description 移除指定位置的子对象
     *@param siblingIndex       子对象的索引位置
     *@param keepWorld          是否保持子对象的世界变换
     *@return
     */
    removeChildAt(siblingIndex: number, keepWorld?: boolean): void;
    /**
     *@description 移除所有子对象
     *@param keepWorld      是否保持子对象的世界变换
     *@return
     */
    removeAllChildren(keepWorld?: boolean): void;
    getChildAt(siblingIndex: number): GameObject;
    getChildByName(name: string): GameObject;
    getChildrenByName(name: string): Array<GameObject>;
    getChildByUUID(uuid: string): GameObject;
    getChildByPath(path: string): GameObject;
    getSiblingIndex(): number;
    setSiblingIndex(newSiblingIndex: number): void;
    addComponent<T extends Component>(constructor: new () => T): T;
    getComponent<T extends Component>(componentType: typeof Component): T;
    getComponentInChildren<T extends Component>(componentType: typeof Component): T;
    getComponentsInChildren<T extends Component>(componentType: typeof Component): T;
    hasComponent(...componentTypes: Array<typeof Component>): boolean;
    update(): void;
    /**
     *@description 向上遍历
     *@param callFunc   对每个GameObject执行的方法，该方法的返回值为true表示继续遍历
     *@param ignoreSelf 忽略自身
     *@return
     */
    upstream(callFunc: (gObject: GameObject) => boolean, ignoreSelf?: boolean): void;
    /**
     *@description 向下遍历
     *@param callFunc   对每个GameObject执行的方法，该方法的返回值（0：继续遍历；1：停止继续向下遍历，可以继续遍历兄弟节点；2：停止所有遍历）
     *@param ignoreSelf 忽略自身
     *@return
     */
    downstream(callFunc: (gObject: GameObject) => number, ignoreSelf?: boolean): number;
    clone(): GameObject;
    destroy(destroyChildren?: boolean): void;
    protected _onEvent(): void;
    protected _offEvent(): void;
    /**
     *@description 自身组件的启用/禁用状态
     *@param flag       组件标识
     *@param enabled    是否启用
     *@return
     */
    protected _onComponentStateChange(flag: number, enabled: boolean): void;
    /**
     *@description 自生状态发生改变（通知场景标脏），包括以下几种中情况：
     *@description 1、自身的 activeInHierarchy 发生改变
     *@description 2、添加/移除子对象
     *@description 3、添加/移除组件
     *@description 4、自身组件的 activeInHierarchy 发生改变
     *@description 5、自身组件类型发生改变（如灯光组件的灯光类型）
     *@param
     *@return
     */
    protected _onDirty(): void;
    upstreamEvent(eventName: string, ignoreSelf?: boolean): void;
    downstreamEvent(eventName: string, ignoreSelf?: boolean): void;
    /**
     *@description 建立父子关系
     *@param parent 父节点
     *@param child  child
     *@param siblingIndex  插入位置索引
     *@return
     */
    protected _link(parent: GameObject, child: GameObject, siblingIndex?: number): void;
    /**
     *@description 解除父子关系
     *@param parent 父节点
     *@param child  child
     *@return
     */
    protected _unLink(parent: GameObject, child: GameObject): void;
    protected _removeAllChildren(parent: GameObject): void;
    protected _changedSiblingIndex(parent: GameObject, child: GameObject, newSiblingIndex: number): void;
    protected _updateChildSiblingIndex(parent: GameObject): void;
    protected _getComponent(componentType: typeof Component): number;
    protected _removeComponent(componentType: typeof Component): void;
    private _setActive;
    /**
     *@description 设置当前GameObject上游链路链路的激活状态
     *@param value  是否激活
     *@return
     */
    private _setActiveInUpstream;
    private _onActiveInHierarchyChange;
    private static _cubeMesh;
    private static _sphereMesh;
    private static _coneMesh;
    private static _cylinderMesh;
    private static _capsuleMesh;
    private static _torusMesh;
    private static _torusKnotMesh;
    private static _quadMesh;
    private static _planeMesh;
    private static _material;
    /**
     *@description 创建3D对象
     *@param type   几何体类型
     *@param name   命名
     *@return GameObject
     */
    static createPrimitive(type: Const.PRIMITIVE_TYPE, name?: string): GameObject;
}

/**
 *@author jhui
 *@description 环境设置
 *@date 2023-02-22 16:40:48
 */
export declare class EnvSetting {
    private _scene;
    private _fog;
    private _skybox;
    private _envLight;
    private _envReflection;
    private _gi;
    constructor(scene: Scene);
    get fog(): Fog;
    get skybox(): SkyBox;
    get envLight(): EnvLight;
    get envReflection(): EnvReflection;
    get gi(): GI;
    /**
     *@description 判断是否需要生成全局光照
     *@param
     *@return |更新反射纹理|更新环境光纹理|
     */
    needUpdateeGI(): number;
}

export declare class Scene extends GameObject {
    private _assetMap;
    private _handleQueueMap;
    private _envSetting;
    private _uboData;
    private _dirty;
    protected _initProperty(): void;
    get env(): EnvSetting;
    setHandleQueue(queue: Array<number>): void;
    getHandleQueue(queue: number): Array<GameObject>;
    getGameObjectByTag(tag: string): Array<GameObject>;
    /**
     *@description 获取SceneUBO数据
     *@param
     *@return Map<string, any>
     */
    getSceneUBOData(): Map<string, any>;
    update(): boolean;
    private _updateQueues;
    private _addToQueue;
    private _clearQueues;
    private _onAddGameObject;
    private _onRemoveGameObject;
    /**
     * 场景树变脏:
     * 1、增加/删除节点
     * 2、节点组件状态（启用/禁用）发生变化
     * @returns
     */
    private _onSceneTreeDirty;
}

export declare class AssetManager {
    private static _ins;
    static ins(): AssetManager;
    private _crossOrigin;
    private _withCredentials;
    private _path;
    private _resourcePath;
    private _requestHeader;
    private _fileLoader;
    private _bitMapLoader;
    private _textureLoader;
    private _cubeTextureLoader;
    private _gltfLoader;
    private _urlCacheMap;
    private _uuidCacheMap;
    private constructor();
    get urlCacheMap(): Map<string, any>;
    get uuidCacheMap(): Map<string, any>;
    get crossOrigin(): string;
    set crossOrigin(value: string);
    get withCredentials(): boolean;
    set withCredentials(value: boolean);
    get path(): string;
    set path(value: string);
    get resourcePath(): string;
    set resourcePath(value: string);
    get requestHeader(): any;
    set requestHeader(value: any);
    get fileLoader(): FileLoader;
    get bitMapLoader(): BitMapLoader;
    get textureLoader(): TextureLoader;
    get cubeTextureLoader(): CubeTextureLoader;
    get gltfLoader(): GLTFLoader;
    /**
     *@description 通过资源路径获取资源
     *@description 资源路径并不能指定唯一的资源，因为同一个资源可能会有几种储存方式
     *@description 如果需要指定唯一的资源则使用UUID获取
     *@param url        资源路径
     *@param type       资源类型
     *@return
     */
    getAssetByURL<T>(url: string, type: Const.ASSET_TYPE): T;
    /**
     *@description 通过UUID获取资源（唯一确定的资源）
     *@param
     *@return
     */
    getAssetByUUID<T>(uuid: string): T;
    /**
     *@description 缓存资源
     *@param url        资源路径 + /assetType
     *@param asset      资源对象
     *@return
     */
    cacheAsset(url: string, asset: Asset): void;
    /**
     *@description 异步资源加载
     *@param url                资源地址
     *@param type               资源类型，不指定则自行判断
     *@return T
     */
    loadAsync<T>(url: string, type?: Const.ASSET_TYPE): Promise<T>;
    /**
     *@description 异步资源加载
     *@param url                资源地址
     *@param type               资源类型，不指定则自行判断
     *@param options.onLoad     加载成功回调
     *@param options.onProgress 加载进度
     *@param options.onError    加载失败回调
     *@param options.args       自定义参数（如果有，则会以onLoad/onError函数的参数形式传入）
     *@return T
     */
    load<T>(url: string, type: Const.ASSET_TYPE, options: {
        onLoad: (res: T, ...args: any) => void;
        onProgress?: (event: ProgressEvent) => void;
        onError?: (event: any, ...args: any) => void;
        args?: any[];
    }): void;
    /**
     *@description 文件类型资源加载
     *@param url                资源地址
     *@param responseType       期望服务器返回的资源类型（默认为"text"）
     *@param options.onLoad     加载成功回调
     *@param options.onProgress 加载进度
     *@param options.onError    加载失败回调
     *@param options.args       自定义参数（如果有，则会以onLoad/onError函数的参数形式传入）
     *@return
     */
    loadFile<T, K extends keyof {
        arraybuffer: "arraybuffer";
        blob: "blob";
        document: "document";
        json: "json";
        text: "text";
    }>(url: string, responseType: K, options: {
        onLoad: (res: T, ...args: any) => void;
        onProgress?: (event: ProgressEvent) => void;
        onError?: (event: any, ...args: any) => void;
        args?: any[];
    }): void;
}

/**
 *@author jhui
 *@description 全局事件管理器
 *@date 2023-01-28 18:47:41
 */
export declare class EventManager extends EventDispatcher {
    private static _ins;
    static ins(): EventManager;
}

/**
 *@author jhui
 *@description 组件管理器，提过规则获取组件（可以是组合的方式）
 *@date 2022-11-19 11:44:59
 */
export declare class ComponentManager {
    private static _ins;
    static ins(): ComponentManager;
    private _componentFlagMap;
    private _componentMap;
    private _behaviourMap;
    private _allFlags;
    private constructor();
    get behaviourMap(): Map<typeof Behaviour, Array<Behaviour>>;
    private _initProperty;
    private _registerInnerComponent;
    registerComponent(componentType: typeof Component): void;
    addComponent<T extends Component>(constructor: new () => T): T;
    removeComponent(component: Component): void;
    getComponentFlags(...componentTypes: Array<typeof Component>): number;
    private _removeComponent;
}

/**
 *@author jhui
 *@description 用户输入管理
 *@date 2023-02-19 10:59:40
 */
export declare class InputManager {
    private static _ins;
    static ins(): InputManager;
    private _keyMap;
    private _keyID;
    private _keyStateA;
    private _keyStateB;
    private _keyStateC;
    private _mouseLeftKey;
    private _mouseCenterKey;
    private _mouseRightKey;
    private _mouseDowns;
    private _mouseInfos;
    private constructor();
    private _onEvent;
    registerKeyBoard(keyboard: string): number;
    getKey(keyboard: string): boolean;
    getKeyDown(keyboard: string): boolean;
    getKeyUp(keyboard: string): boolean;
    getMouseKey(button: number): boolean;
    getMouseKeyDown(button: number): boolean;
    getMouseKeyUp(button: number): boolean;
    getMouseDrag(button: number): MouseInfo;
    swapKeyState(): void;
    private _getMouseKey;
}
declare class MouseInfo {
    coordA: Vector2;
    coordB: Vector2;
    coordC: Vector2;
    constructor();
    get offsetX(): number;
    get offsetY(): number;
    follow(): void;
    clear(): void;
}
export {};

/**
 *@author jhui
 *@description 管理器集合
 *
 * ##### Pool        ->      PoolManager
 * ##### Scene       ->      SceneManager
 * ##### Component   ->      ComponentManager
 *
 *@date 2022-10-24 22:00:17
 */
export declare namespace Managers {
    const Asset: AssetManager;
    const Component: ComponentManager;
    const Event: EventManager;
    const Input: InputManager;
    const Pool: PoolManager;
    const Scene: SceneManager;
    const Shader: ShaderManager;
    const Timer: TimerManager;
    /**初始化管理器 */
    function init(): void;
}

/**
 *@author jhui
 *@description 对象池管理器
 *@date 2022-10-24 21:49:32
 */
export declare class PoolManager {
    private static _ins;
    static ins(): PoolManager;
    private _poolMap;
    private _eulerPool;
    private _mtx3Pool;
    private _mtx4Pool;
    private _quatPool;
    private _vec2Pool;
    private _vec3Pool;
    private _vec4Pool;
    private constructor();
    get eulerPool(): Pool<Euler>;
    get mtx3Pool(): Pool<Matrix3>;
    get mtx4Pool(): Pool<Matrix4>;
    get quatPool(): Pool<Quaternion>;
    get vec2Pool(): Pool<Vector2>;
    get vec3Pool(): Pool<Vector3>;
    get vec4Pool(): Pool<Vector4>;
    private _initInnerPools;
    addPool<T>(poolName: string, creator: () => T, options?: {
        initCount?: number;
        capacity?: number;
        init?: (item: T, ...params: any) => void;
        reset?: (item: T) => void;
    }): Pool<T>;
    removePool(poolName: string): void;
    getPool<T>(poolName: string): Pool<T>;
    get<T>(poolName: string, ...param: any): T;
    put<T>(poolName: string, items: T | Array<T>): void;
    setCapacity(poolName: string, maxLength: number): void;
    /**
     *@description 清除所有对象池内容
     *@param
     *@return
     */
    clear(): void;
    /**
     *@description 销毁所有对象池
     *@param
     *@return
     */
    destroy(): void;
}

/**
 *
 * 可以支持多种空间划分算法
 * octree + bvh（层次空间算法）
 */
/**
 *@author jhui
 *@description 场景管理器
 *@date 2022-11-19 11:42:45
 */
export declare class SceneManager {
    private static _ins;
    static ins(): SceneManager;
    private _worldRoot;
    private _handleQueue;
    private _sceneDirty;
    private constructor();
    get worldRoot(): Scene;
    private _initProperty;
    registerHandleQueue(queue: number): void;
    unregisterHandleQueue(queue: number): void;
    getHandleQueue(queue: number): Array<GameObject>;
    hasNeedUpdate(queue: number): boolean;
    launchScene(scene: Scene): void;
    updateScene(): void;
    private _exitScene;
}

/**
 *@author jhui
 *@description 内置shader管理器
 *@date 2023-01-06 11:10:18
 */
export declare class ShaderManager {
    private static _ins;
    static ins(): ShaderManager;
    private _shaderMap;
    private _shaderAttributeMap;
    private _shaderUniformMap;
    private _shaderUniformBlockMap;
    private _shaderDefineMap;
    private _shaderAttributeID;
    private _shaderUniformID;
    private _shaderUniformBlockID;
    private _shaderDefineID;
    private constructor();
    get shaderDefineMap(): Map<any, Define>;
    private _initProperty;
    initShader(): void;
    initUniformBlock(gl: WebGL2RenderingContext): void;
    addShader(name: string, attributes: Set<string>, uniforms: Set<string>, uniformBlocks?: Array<string>, instancing?: boolean): Shader;
    findShader(name: string): Shader;
    findAttribute(idOrName: any): any;
    findUniform(idOrName: any): any;
    findUniformBlock(idOrName: any): UniformBlock;
    registerAttribute(name: string): number;
    /**
     *@description 注册Uniform，为Uniform分配唯一id
     *@param name   uniform name
     *@return uniformID
     */
    registerUniform(name: string): number;
    /**
     *@description 注册UniformBlock，为block分配唯一id
     *@param name   uniform block name
     *@return
     */
    registerUniformBlock(name: string): UniformBlock;
    /**
     *@description 注册宏定义，为宏定义分配唯一id
     *@param name   宏名
     *@return
     */
    registerDefine(name: string): Define;
}

/**
 *@author jhui
 *@description 全局时钟管理器
 *@date 2023-01-26 19:27:15
 */
export declare class TimerManager {
    private static _ins;
    static ins(): TimerManager;
    private _timers;
    private _lastTime;
    private _curFrame;
    private _tickFuc;
    private constructor();
    get curTime(): number;
    start(): void;
    stop(): void;
    continue(): void;
    registerTimer(delay: number, delta: number, context: Object, method: Function, params: Array<any>, baseFrame?: boolean, once?: boolean): void;
    hasTimer(delay: number, delta: number, baseFrame: boolean): number;
    private _tick;
}

export declare class Color {
    static Linear: number;
    static sRGB: number;
    private _value;
    constructor(r?: number, g?: number, b?: number, a?: number);
    get r(): number;
    set r(value: number);
    get g(): number;
    set g(value: number);
    get b(): number;
    set b(value: number);
    get a(): number;
    set a(value: number);
    get value(): Float32Array;
    set(r: number, g: number, b: number, a?: number): Color;
    copyFrom(src: Color): Color;
    clone(): Color;
}

/**
 *@author jhui
 *@description 欧拉角，按照"YXZ"顺序的内旋（等价于ZXY的外旋）来定向，采用弧度制
 *@description 使用欧拉角需要注意万向死锁的情况，当第二个旋转轴为90度时会出现万向死锁，即X轴旋转90度时会出现死锁
 *@date 2022-11-30 23:20:05
 */
export declare class Euler {
    /**
     *@description 内置对象池，get()
     *@description 必须在当前作用域内回收掉，不能在其它作用域里面回收
     *@param x  初始值
     *@param y  初始值
     *@param z  初始值
     *@return Euler
     */
    static get(x?: number, y?: number, z?: number): Euler;
    /**
     *@description 内置对象池，put()
     *@param euler  回收对象
     *@return Euler
     */
    static put(euler: Euler | Array<Euler>): void;
    private _value;
    constructor(x?: number, y?: number, z?: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    set(x: number, y: number, z: number): Euler;
    /**
     *@description 从旋转矩阵中提取欧拉角（注意必须是纯旋转矩阵，对于其它一些复合矩阵可能会出现不可预估的情况）
     *@description 转化过来的欧拉角是规范化的欧拉角（y/z∈【±180】，x∈【±90】）
     *@param mtx    旋转矩阵
     *@return Euler
     */
    setByMatrix(mtx: Matrix4): Euler;
    setByQuaternion(quat: Quaternion): Euler;
    setByVector3(vec3: Vector3): Euler;
    copyFrom(src: Euler): Euler;
    clone(): Euler;
    toString(): string;
}

/**
 *@author jhui
 *@description 三阶矩阵，采用列主序
 *@date 2022-11-08 21:35:06
 */
export declare class Matrix3 {
    static get(): Matrix3;
    static put(m: Matrix3 | Array<Matrix3>): void;
    /**
     *@description 矩阵相乘（左乘），m1 x m2
     *@param
     *@return
     */
    static multiply(m1: Matrix3, m2: Matrix3, out: Matrix3): void;
    static multiplyScalar(m: Matrix3, scalar: number, out: Matrix3): void;
    static transpose(m: Matrix3, out: Matrix3): void;
    static invert(m: Matrix3, out: Matrix3): void;
    static determiaant(m: Matrix3): number;
    private _value;
    constructor();
    get value(): Float32Array;
    get row(): number;
    get column(): number;
    set(n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number): Matrix3;
    setByMatrix4(mtx4: Matrix4): Matrix3;
    setByRS(rot?: Quaternion, scale?: Vector3): void;
    setIdentify(): Matrix3;
    setBasic(x: Vector2, y: Vector2): Matrix3;
    setScale(v: Vector2): Matrix3;
    setRotate(radian: number): Matrix3;
    setRotateByEuler(): Matrix3;
    setRotateByQuaternion(): Matrix3;
    setTranslation(v: Vector2): Matrix3;
    applyScale(v: Vector2): Matrix3;
    applyRotate(radian: number): Matrix3;
    applyTranslation(v: Vector2): Matrix3;
    /**
     *@description 矩阵相乘（左乘），mtx3 x this
     *@param mtx3 目标矩阵
     *@return Matrix3
     */
    multiply(mtx3: Matrix3): Matrix3;
    multiplyScalar(scalar: number): Matrix3;
    transformVector(v: Vector2, outV: Vector2): Vector2;
    transformPoint(p: Vector2, outP: Vector2): Vector2;
    determiaant(): number;
    invert(): Matrix3;
    transpose(): Matrix3;
    getRow(rowIx: number, out: Vector3): Vector3;
    setRow(rowIx: number, v: Vector3): Matrix3;
    getColumn(columnIx: number, out: Vector3): Vector3;
    setColumn(columnIx: number, v: Vector3): Matrix3;
    toRS(outRot?: Quaternion, outScale?: Vector3): void;
    isEqual(m: Matrix3): boolean;
    copyFrom(src: Matrix3): Matrix3;
    clone(): Matrix3;
}

/**
 *@author jhui
 *@description 四元数（采用Hamilton表示）
 *@date 2023-04-14 13:09:05
 */
export declare class Quaternion {
    /**
     *@description 内置对象池，get()
     *@description 必须在当前作用域内回收掉，不能在其它作用域里面回收
     *@param x  初始值
     *@param y  初始值
     *@param z  初始值
     *@param w  初始值
     *@return Quaternion
     */
    static get(x?: number, y?: number, z?: number, w?: number): Quaternion;
    /**
     *@description 内置对象池，put()
     *@param quat  回收对象
     *@return Quaternion
     */
    static put(quat: Quaternion | Array<Quaternion>): void;
    /**
     *@description 四元数相乘（左乘） q1 x q2
     *@param
     *@return
     */
    static multiply(q1: Quaternion, q2: Quaternion, out: Quaternion): void;
    /**共轭 */
    static conjugate(q: Quaternion, out: Quaternion): void;
    /**求逆，如果能够确定该四元数为单位四元数，可以用求共轭替代求逆 */
    static invert(q: Quaternion, out: Quaternion): void;
    static transformVector(q: Quaternion, v: Vector3, out: Vector3): void;
    /**
     *@description 将 from 四元数朝 to 进行球面插值
     *@param
     *@return
     */
    static slerp(from: Quaternion, to: Quaternion, t: number, out: Quaternion): void;
    /**
     *@description 将 from 四元数朝 to 进行线性插值，精确度没slerp高，但是性能要比slerp好
     *@description 当两个四元数的夹角比较小（小于pi/2）时，可以用nlerp代替slerp
     *@param
     *@return
     */
    static nlerp(from: Quaternion, to: Quaternion, t: number, out: Quaternion): void;
    /**
     *@description 将 from 四元数朝 to 旋转 step 的角度步长
     *@param
     *@return
     */
    static rotateTowards(from: Quaternion, to: Quaternion, step: number, out: Quaternion): void;
    static angle(q1: Quaternion, q2: Quaternion): number;
    private _value;
    constructor(x?: number, y?: number, z?: number, w?: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    get w(): number;
    set w(value: number);
    set(x: number, y: number, z: number, w: number): Quaternion;
    setIdentify(): Quaternion;
    /**
     *@description 绕指定轴角旋转
     *@param axis       旋转轴（单位向量）
     *@param radian     旋转弧度
     *@return Quaternion
     */
    setByAxisAngle(axis: Vector3, radian: number): Quaternion;
    /**
     *@description 从纯旋转矩阵中提取四元数（不能有缩放）
     *@param mtx    旋转矩阵
     *@return Quaternion
     */
    setByMatrix(mtx: Matrix4): Quaternion;
    setByEuler(euler: Euler): Quaternion;
    setByLookAt(forward: Vector3, up: Vector3): Quaternion;
    setByVectors(fromV: Vector3, toV: Vector3): Quaternion;
    multiply(q: Quaternion): Quaternion;
    slerp(to: Quaternion, t: number): Quaternion;
    rotateTowards(to: Quaternion, step: number): Quaternion;
    dot(q: Quaternion): number;
    length(): number;
    lengthSquare(): number;
    normalize(): Quaternion;
    negate(): Quaternion;
    conjugate(): Quaternion;
    invert(): Quaternion;
    angleTo(q: Quaternion): number;
    transformVector(v: Vector3, outV: Vector3): Vector3;
    copyFrom(src: Quaternion): Quaternion;
    clone(): Quaternion;
    toString(): string;
}

/**
 *@author jhui
 *@description 四阶矩阵，采用列主序
 *@date 2022-11-30 20:56:37
 */
export declare class Matrix4 {
    static get(): Matrix4;
    static put(m: Matrix4 | Array<Matrix4>): void;
    /**
     *@description 矩阵相乘（左乘），m1 x m2
     *@param
     *@return
     */
    static multiply(m1: Matrix4, m2: Matrix4, out: Matrix4): void;
    static multiplyScalar(m: Matrix4, scalar: number, out: Matrix4): void;
    static transpose(m: Matrix4, out: Matrix4): void;
    static invert(m: Matrix4, out: Matrix4): void;
    static determiaant(m: Matrix4): number;
    static transformVector(m: Matrix4, v: Vector3, outV: Vector3): void;
    static transformPoint(m: Matrix4, p: Vector3, outP: Vector3): void;
    static lookAt(eye: Vector3, target: Vector3, up: Vector3, out: Matrix4): void;
    /**
     *@description 通过视锥体边界创建透视投影
     *@param
     *@return
     */
    static perspective(top: number, bottom: number, left: number, right: number, near: number, far: number, out: Matrix4): void;
    /**
     *@description 通过FOV创建投影投影矩阵
     *@param fov        垂直方向视角（弧度制）
     *@param aspect     宽高比（横纵比）
     *@param near       近平面
     *@param far        远平面
     *@return
     */
    static perspectiveByFov(fov: number, aspect: number, near: number, far: number, out: Matrix4): void;
    /**
     *@description 通过正交盒边界创建正交投影
     *@param
     *@return
     */
    static orthographic(top: number, bottom: number, left: number, right: number, near: number, far: number, out: Matrix4): void;
    private _value;
    /**列主序 */
    constructor(values?: Array<number>);
    get value(): Float32Array;
    get row(): number;
    get column(): number;
    set(n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number): Matrix4;
    setByMatrix3(mtx3: Matrix3): Matrix4;
    /**
     *@description 根据平移、旋转、缩放设置复合矩阵
     *@param
     *@return
     */
    setByTRS(pos: Vector3, rot: Quaternion, scale: Vector3): Matrix4;
    setIdentify(): Matrix4;
    setBasic(x: Vector3, y: Vector3, z: Vector3): Matrix4;
    setScale(v: Vector3): Matrix4;
    setRotateX(radian: number): Matrix4;
    setRotateY(radian: number): Matrix4;
    setRotateZ(radian: number): Matrix4;
    setRotateByAxisAngle(axis: Vector3, radian: number): Matrix4;
    setRotateByEuler(euler: Euler): Matrix4;
    setRotateByQuaternion(q: Quaternion): Matrix4;
    setTranslation(v: Vector3): Matrix4;
    setPerspective(fov: number, aspect: number, near: number, far: number): Matrix4;
    setOrthographic(top: number, bottom: number, left: number, right: number, near: number, far: number): Matrix4;
    setByLookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix4;
    /**
     *@description 对自身坐标轴进行缩放
     *@param v      缩放矢量
     *@return Matrix4
     */
    applyScale(v: Vector3): Matrix4;
    applyRotateByAxisAngle(axis: Vector3, radian: number): Matrix4;
    applyTranslation(v: Vector3): Matrix4;
    /**
     *@description 矩阵相乘（左乘），mtx4 x this
     *@param mtx4 目标矩阵
     *@return Matrix4
     */
    multiply(mtx4: Matrix4): Matrix4;
    multiplyScalar(scalar: number): Matrix4;
    /**
     *@description 变换向量
     *@param v      目标向量
     *@param outV   结果向量
     *@return Vector3
     */
    transformVector(v: Vector3, outV: Vector3): Vector3;
    /**
     *@description 变换坐标点
     *@param p      目标点
     *@param outV   结果点
     *@return Vector3
     */
    transformPoint(p: Vector3, outP: Vector3): Vector3;
    determiaant(): number;
    invert(): Matrix4;
    transpose(): Matrix4;
    getRow(rowIx: number, out: Vector3): Vector3;
    setRow(rowIx: number, v: Vector3): Matrix4;
    getColumn(columnIx: number, out: Vector3): Vector3;
    setColumn(columnIx: number, v: Vector3): Matrix4;
    /**
     *@description 从矩阵中提取 T、R、S
     *@param outPos     提取平移
     *@param outRot     提取旋转
     *@param outScale   提取缩放
     *@return
     */
    toTRS(outPos?: Vector3, outRot?: Quaternion, outScale?: Vector3): void;
    isEqual(m: Matrix4): boolean;
    copyFrom(src: Matrix4): Matrix4;
    clone(): Matrix4;
    toString(): string;
}

/**
 *@author jhui
 *@description 矩形，以左下角为原点
 *@date 2022-12-03 14:40:05
 */
export declare class Rect {
    private _value;
    constructor(x?: number, y?: number, width?: number, height?: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    get top(): number;
    get bottom(): number;
    get left(): number;
    get right(): number;
    set(x: number, y: number, width: number, height: number): Rect;
    copyFrom(src: Rect): Rect;
    clone(): Rect;
}


/**
 *@author jhui
 *@description 二维向量
 *@date 2022-10-23 21:29:45
 */
export declare class Vector2 {
    static readonly BASE_X: Vector2;
    static readonly BASE_Y: Vector2;
    static readonly ZERO: Vector2;
    /**
     *@description 内置对象池，get()
     *@description 必须在当前作用域内回收掉，不能在其它作用域里面回收
     *@param x  初始值
     *@param y  初始值
     *@return Vector2
     */
    static get(x?: number, y?: number): Vector2;
    /**
     *@description 内置对象池，put()
     *@param v  回收对象
     *@return Vector2
     */
    static put(v: Vector2 | Array<Vector2>): void;
    static add(a: Vector2, b: Vector2, out: Vector2): Vector2;
    static sub(a: Vector2, b: Vector2, out: Vector2): Vector2;
    static lerp(a: Vector2, b: Vector2, t: number, out: Vector2): Vector2;
    private _value;
    constructor(x?: number, y?: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get value(): Float32Array;
    set(x: number, y: number): Vector2;
    setLength(length: number): Vector2;
    add(v: Vector2): Vector2;
    sub(v: Vector2): Vector2;
    addScalar(scalar: number): Vector2;
    mulScalar(scalar: number): Vector2;
    lerp(v: Vector2, t: number): Vector2;
    dot(v: Vector2): number;
    cross(v: Vector2): number;
    length(): number;
    lengthSquare(): number;
    distanceTo(v: Vector2): number;
    distanceSquareTo(v: Vector2): number;
    normalize(): Vector2;
    negate(): Vector2;
    isEqual(v: Vector2, error?: number): boolean;
    rotate(radian: number): Vector2;
    angleTo(v: Vector2): number;
    copyFrom(src: Vector2): Vector2;
    clone(): Vector2;
}

/**
 *@author jhui
 *@description 三维向量
 *@description w是齐次坐标，为0表示是向量，为1则表示坐标点，不过一般不考虑其值也是可以的
 *@date 2022-11-05 16:12:34
 */
export declare class Vector3 {
    static readonly BASE_X: Vector3;
    static readonly BASE_Y: Vector3;
    static readonly BASE_Z: Vector3;
    static readonly ZERO: Vector3;
    static readonly ONE: Vector3;
    /**
     *@description 内置对象池，get()
     *@description 必须在当前作用域内回收掉，不能在其它作用域里面回收
     *@param x  初始值
     *@param y  初始值
     *@param z  初始值
     *@return Vector3
     */
    static get(x?: number, y?: number, z?: number, w?: number): Vector3;
    /**
     *@description 内置对象池，put()
     *@param v  回收对象
     *@return Vector3
     */
    static put(v: Vector3 | Array<Vector3>): void;
    static add(a: Vector3, b: Vector3, out: Vector3): Vector3;
    static sub(a: Vector3, b: Vector3, out: Vector3): Vector3;
    static lerp(a: Vector3, b: Vector3, t: number, out: Vector3): Vector3;
    static cross(a: Vector3, b: Vector3, out: Vector3): Vector3;
    private _value;
    constructor(x?: number, y?: number, z?: number, w?: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    get w(): number;
    set w(value: number);
    get value(): Float32Array;
    set(x: number, y: number, z: number, w?: number): Vector3;
    setLength(length: number): Vector3;
    add(v: Vector3): Vector3;
    sub(v: Vector3): Vector3;
    addScalar(scalar: number): Vector3;
    mulScalar(scalar: number): Vector3;
    lerp(v: Vector3, t: number): Vector3;
    dot(v: Vector3): number;
    cross(v: Vector3): Vector3;
    length(): number;
    lengthSquare(): number;
    distanceTo(v: Vector3): number;
    distanceSquareTo(v: Vector3): number;
    normalize(): Vector3;
    negate(): Vector3;
    isEqual(v: Vector3, error?: number): boolean;
    angleTo(v: Vector3): number;
    copyFrom(src: Vector3): Vector3;
    clone(): Vector3;
}

/**
 *@author jhui
 *@description 该类完全继承于Vector3，主要用于区别Vector3、Vector4两种类型
 *@date 2023-01-07 16:51:52
 */
export declare class Vector4 {
    static get(): Vector4;
    static put(v: Vector4 | Array<Vector4>): void;
    private _value;
    constructor(x?: number, y?: number, z?: number, w?: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    get w(): number;
    set w(value: number);
    get value(): Float32Array;
    set(x: number, y: number, z: number, w?: number): Vector4;
    isEqual(v: Vector4, error?: number): boolean;
    copyFrom(src: Vector4): Vector4;
    clone(): Vector4;
}

export declare class InputSystem extends System {
    start(): void;
    update(dt: number): void;
}

export declare class PerformanceSystem extends System {
    private _stats;
    start(): void;
    private _initProperty;
    update(dt: number): void;
}

export declare class PhysicsSystem extends System {
}

export declare class RendererSystem extends System {
    private _renderer;
    private _renderQueue;
    private _cameraList;
    private _lightList;
    private _renderInfo;
    private _hdrRT;
    private _lightCounts;
    get canvas(): HTMLCanvasElement;
    start(): void;
    private _initProperty;
    private _initShader;
    renderUpdate(dt: number): void;
    private _globalIllumination;
    private _rendering;
    private _renderCubeRT;
    private _renderCustomCubeRT;
    private _renderRT;
    private _renderCustomRT;
    private _fallbackDefaultFBO;
    private _renderCamera;
    private _updateRenderQueue;
    private _updateCameraList;
    private _updateLightList;
    private _updateUniformBlock;
    /**获取灯光的UBO数据 */
    private _getLightUBOData;
    private _renderOpaque;
    private _renderTransparent;
    private _renderSkyBox;
    private _postprocessing;
    private _renderItems;
    private _shaderImport;
}

/**
 *@author jhui
 *@description 脚本系统，继承于Behaviour的组件称为脚本，该系统作为脚本生命周期的调度系统
 *@date 2022-11-30 15:27:06
 */
export declare class ScriptSystem extends System {
    scriptEnable(): void;
    scriptStart(): void;
    fixedUpdate(dt: number): void;
    update(dt: number): void;
    lateUpdate(dt: number): void;
    renderBefore(dt: number): void;
    renderAfter(dt: number): void;
}

export declare class System {
    protected _enabled: boolean;
    get enabled(): boolean;
    set enabled(value: boolean);
    start(): void;
    stop(): void;
    continue(): void;
    destroy(): void;
    fixedUpdate(dt: number): void;
    update(dt: number): void;
    lateUpdate(dt: number): void;
    renderBefore(dt: number): void;
    renderUpdate(dt: number): void;
    renderAfter(dt: number): void;
}

/// <reference types="node" />
/**
 *@author jhui
 *@description 数组工具类
 *@date 2022-10-23 21:13:30
 */
export declare class ArrayUtil {
    /**
     *@description 数组求和
     *@param array    数组
     *@param offset   开始索引
     *@param count    求和个数，-1表示求和后面所有项
     *@return number
     */
    sum(array: Array<number>, offset?: number, count?: number): number;
    max(array: Array<number>): number;
    /**
     *@description 从一个数组复制到另一个数组
     *@param src           复制源
     *@param dest          目标数组
     *@param srcIx         源数组索引
     *@param destIx        目标数组索引
     *@param count         复制数量
     *@return
     */
    copy(src: RelativeIndexable<number>, dest: RelativeIndexable<number>, srcIx: number, destIx: number, count: number): void;
}

export declare class DataUtil {
    private _floatView;
    private _uInt32View;
    private _baseTable;
    private _shiftTable;
    private _mantissaTable;
    private _exponentTable;
    private _offsetTable;
    constructor();
    private _init;
    toHalfFloat(value: number): number;
    fromHalfFloat(value: number): number;
}

/**
 *@author jhui
 *@description dom操作工具
 *@date 2022-11-11 16:32:35
 */
export declare class DocumentUtil {
    createElementNS<T>(name: string): T;
}

/**
 *@author jhui
 *@description 数学工具类
 *@date 2022-12-12 14:28:04
 */
export declare class MathUtil {
    /**角度转弧度 */
    DEG2RAD: number;
    /**弧度转角度 */
    RAD2DEG: number;
    /**
     *@description 限制数值在指定区间内
     *@param value    指定值
     *@param min      最小值
     *@param max      最大值
     *@return number
     */
    clamp(value: number, min: number, max: number): number;
    /**
     *@description 两个数值是否相等
     *@param value1 值1
     *@param value2 值2
     *@param error  误差值
     *@return boolean
     */
    isEqual(value1: number, value2: number, error?: number): boolean;
    /**
     *@description 判断数值是否在指定区间
     *@param value    指定值
     *@param min      最小值
     *@param max      最大值
     *@return boolean
     */
    isSection(value: number, min: number, max: number): boolean;
    /**
     *@description 是否为2的n次幂
     *@param value      目标值
     *@return boolean
     */
    isPowerOfTwo(value: number): boolean;
}

export declare class MeshUtil {
    /**
     *@description 创建立方体
     *@param length     长
     *@param width      宽
     *@param height     高
     *@param lSegment   长分段数
     *@param wSegment   宽分段数
     *@param hSegment   高分段数
     *@return Mesh
     */
    createCube(length?: number, width?: number, height?: number, lSegment?: number, wSegment?: number, hSegment?: number): Mesh;
    createUVSphere(radius?: number, wSegment?: number, hSegment?: number): Mesh;
    createPlane(length?: number, width?: number, lSegment?: number, wSegment?: number): Mesh;
    createCone(radius?: number, height?: number, rSegment?: number, hSegment?: number): Mesh;
    createCylinder(radius?: number, height?: number, rSegment?: number, hSegment?: number): Mesh;
    createCapsule(radius?: number, height?: number, rSegment?: number, hSegment?: number): Mesh;
    createTorus(radius?: number, tube?: number, tSegment?: number, rSegment?: number): Mesh;
    createTorusKnot(radius?: number, tube?: number, tSegment?: number, rSegment?: number, p?: number, q?: number): Mesh;
    /**
     *@description 创建面片
     *@param axis       面片朝向的轴
     *@param dir        指定朝向轴的正/负方向
     *@param offset     在轴的偏移量
     *@param width      宽度
     *@param height     高度
     *@param wSegment   分段数
     *@param hSegment   分段数
     *@return Mesh
     */
    createQuad<K extends keyof {
        "X": "X";
        "Y": "Y";
        "Z": "Z";
    }>(axis: K, dir?: -1 | 1, offset?: number, width?: number, height?: number, wSegment?: number, hSegment?: number): Mesh;
    private _createMesh;
    private _createQuad;
    private _createUVSphere;
    private _createLcoSphere;
    private _createQuadSphere;
    private _createGoldbergPolyhedra;
    private _createCylinder;
    private _createCapsule;
    private _createTorus;
    private _createTorusKnot;
    private _merge;
}

export declare class ShaderUtil {
    buildDefineGroupCode(defineGroup: DefineGroup, defineMap: Map<any, Define>): string;
    buildUniformBlockGroupCode(uniformBlockGroup: UniformBlockGroup): string;
    encodeUniformBlock(uniformBlock: UniformBlock): string;
    encodeStruct(struct: BlockStruct): string;
    private _encodeBlockItem;
}

/**
 *@author jhui
 *@description 字符串工具
 *@date 2022-11-18 17:01:14
 */
export declare class StringUtil {
    private _lut;
    constructor();
    private _init;
    generateUUID(): string;
}

/**
 *@author jhui
 *@description 纹理工具
 *@date 2023-03-13 17:18:08
 */
export declare class TextureUtil {
}

/**
 *@author jhui
 *@description 工具集
 *
 * ##### Math           -> MathUtil
 * ##### Array          -> ArrayUtil
 * ##### String         -> StringUtil
 * ##### Document       -> DocumentUtil
 * ##### Mesh           -> MeshUtil
 * ##### Data           -> DataUtil
 *
 *@date 2022-10-23 21:21:44
 */
export declare namespace Utils {
    /**数学工具 */
    const Math: MathUtil;
    /**数组工具 */
    const Array: ArrayUtil;
    /**字符串工具 */
    const String: StringUtil;
    /**浏览器Dom工具 */
    const Document: DocumentUtil;
    /**Shader工具 */
    const Shader: ShaderUtil;
    /**Mesh工具 */
    const Mesh: MeshUtil;
    /**数值处理工具 */
    const Data: DataUtil;
}




/**
 *@author jhui
 *@description 封装TypedArray，实现Array数组的部分功能
 *@date 2022-11-20 09:17:19
 */
export declare class TBuffer<T extends Const.TypeArray> {
    protected _type: Const.TYPE_ARRAY;
    protected _source: T;
    protected _capacity: number;
    protected _length: number;
    protected _autoExpand: boolean;
    protected _creator: new (length: number) => T;
    constructor(data: T, capacity: number, autoExpand: boolean);
    constructor(creator: new (length: number) => T, capacity: number, autoExpand: boolean);
    get type(): Const.TYPE_ARRAY;
    get source(): T;
    get length(): number;
    get capacity(): number;
    get creator(): new (length: number) => T;
    get fSize(): number;
    getIndex(index: number): number;
    setIndex(index: number, value: number): void;
    push(item: number): void;
    pushArray(items: ArrayLike<number>): void;
    pop(): number;
    unshift(item: number): void;
    unshiftArray(items: ArrayLike<number>): void;
    shift(): void;
    slice(startIx?: number, endIx?: number): TBuffer<T>;
    /**
     *@description 拼接数据，对应Array相应方法
     *@param startIx            拼接起点
     *@param deleteCount        在拼接处需要移除的元素个数
     *@param insertItems        在拼接处需要插入的元素
     *@param collectDeleteItem  是否需要收集返回被移除的元素
     *@return 被移除的元素（如果需要收集）
     */
    splice(startIx: number, deleteCount?: number, insertItems?: ArrayLike<number>, collectDeleteItem?: boolean): T;
    clear(): void;
    /**
     *@description 检测buffer是否填满
     *@param
     *@return
     */
    protected _checkFill(): boolean;
    /**
     *@description 扩容，目前按照自身大小的二倍进行扩展
     *@param
     *@return
     */
    protected _expand(): void;
    protected _setCapacity(capacity: number): void;
}

/// <reference types="node" />
/**
 *@author jhui
 *@description 顶点buffer，使用交错的方式进行存储
 *@date 2022-11-18 09:01:08
 */
export declare class VertexBuffer extends TBuffer<Float32Array> {
    private _attribNames;
    private _attribSizes;
    private _vertexSpan;
    private _vertexCount;
    constructor(attribNames: Array<string>, attribSizes: Array<number>, vertexCount: number);
    get attribNames(): Array<string>;
    get vertexSpan(): number;
    hasAttribute(name: string): boolean;
    getAttribute(name: string): Float32Array;
    getAttribute2At(name: string, index: number, outVec2: Vector2): Vector2;
    getAttribute3At(name: string, index: number, outVec3: Vector3): Vector3;
    setAttribute(name: string, data: RelativeIndexable<number>): void;
    setAttribute2At(name: string, index: number, vec2: Vector2): void;
    setAttribute3At(name: string, index: number, vec3: Vector3): void;
    getAttributeOffset(name: string): number;
    getAttributeSize(name: string): number;
    /**
     *@description 获取指定顶点的属性值
     *@param name   属性名
     *@param index  顶点索引
     *@param out    接收结果容器
     *@param count  数据个数
     *@return
     */
    private _getAttributeAt;
    /**
     *@description 赋于指定顶点的属性值
     *@param name   属性名
     *@param index  顶点索引
     *@param value  属性值
     *@param count  数据个数
     *@return
     */
    private _setAttributeAt;
}

/**
 *@author jhui
 *@description 使用冯氏光照模型的材质
 *@date 2023-02-22 16:07:36
 */
export declare class BlinnPhongMaterial extends Material {
    private static _useDiffuseTextureDefine;
    private static _useSpecularTextureDefine;
    private static _mainColor;
    private static _diffuse;
    private static _specular;
    private static _shininess;
    private static _tilingOffset;
    get mainColor(): Color;
    set mainColor(value: Color);
    get diffuse(): BaseTexture;
    set diffuse(value: BaseTexture);
    get specular(): BaseTexture;
    set specular(value: BaseTexture);
    get shininess(): number;
    set shininess(value: number);
    get tilingOffset(): Vector4;
    set tilingOffset(value: Vector4);
    protected _initShader(): void;
    protected _initDefine(): void;
    protected _initUniform(): void;
}

export declare class BRDFLUTMaterial extends Material {
    protected _initShader(): void;
}

export declare class IrradianceMaterial extends Material {
    private static _useMainTextureDefine;
    private static _mainTexture;
    get mainTexture(): BaseTexture;
    set mainTexture(value: BaseTexture);
    protected _initShader(): void;
    protected _initDefine(): void;
    protected _initUniform(): void;
}

/**
 *@author jhui
 *@description 材质基类
 *@date 2023-01-07 21:50:26
 */
export declare abstract class Material {
    protected _shader: Shader;
    protected _shaderData: ShaderData;
    protected _cullFace: number;
    protected _blendMode: number;
    protected _blendSrc: number;
    protected _blendDst: number;
    protected _blendEquation: number;
    protected _blendSrcAlpha: number;
    protected _blendDstAlpha: number;
    protected _blendEquationAlpha: number;
    protected _alphaTest: boolean;
    protected _depthTest: number;
    protected _depthWrite: boolean;
    protected _stencilTest: number;
    protected _stencilPass: number;
    protected _stencilFail: number;
    protected _stencilZFail: number;
    protected _stencilWrite: boolean;
    protected _polygonOffset: boolean;
    protected _polygonOffsetFactor: number;
    protected _polygonOffsetUnits: number;
    protected _renderQueue: number;
    constructor();
    get shader(): Shader;
    get shaderData(): ShaderData;
    get cullFace(): number;
    set cullFace(value: number);
    get blendMode(): number;
    set blendMode(value: number);
    get blendSrc(): number;
    set blendSrc(value: number);
    get blendDst(): number;
    set blendDst(value: number);
    get blendEquation(): number;
    set blendEquation(value: number);
    get blendSrcAlpha(): number;
    set blendSrcAlpha(value: number);
    get blendDstAlpha(): number;
    set blendDstAlpha(value: number);
    get blendEquationAlpha(): number;
    set blendEquationAlpha(value: number);
    get alphaTest(): boolean;
    set alphaTest(value: boolean);
    get depthTest(): number;
    set depthTest(value: number);
    get depthWrite(): boolean;
    set depthWrite(value: boolean);
    get stencilTest(): number;
    set stencilTest(value: number);
    get stencilPass(): number;
    set stencilPass(value: number);
    get stencilFail(): number;
    set stencilFail(value: number);
    get stencilZFail(): number;
    set stencilZFail(value: number);
    get stencilWrite(): boolean;
    set stencilWrite(value: boolean);
    get polygonOffset(): boolean;
    set polygonOffset(value: boolean);
    get polygonOffsetFactor(): number;
    set polygonOffsetFactor(value: number);
    get polygonOffsetUnits(): number;
    set polygonOffsetUnits(value: number);
    get renderQueue(): number;
    set renderQueue(value: number);
    set renderMode(value: number);
    protected _initShader(): void;
    protected _initProperty(): void;
    protected _initDefine(): void;
    protected _initUniform(): void;
    protected _initRenderMode(): void;
    protected _setRenderMode(renderMode: number): void;
    protected _setBlendMode(blendMode: number): void;
}

/**
 *@author jhui
 *@description 将贴图映射到立方体上
 *@date 2023-03-14 11:06:49
 */
export declare class MapToCubeMaterial extends Material {
    private static _useEqRectMap;
    private static _useCubeMap;
    private static _eqRectMap;
    private static _cubeMap;
    private _mainTexture;
    get mainTexture(): BaseTexture;
    set mainTexture(value: BaseTexture);
    constructor(options?: {
        mainTexture?: BaseTexture;
    });
    protected _initShader(): void;
    protected _initUniform(): void;
}

export declare class PBRMaterial extends Material {
    private static _albedoTextureDefine;
    private static _normalTextureDefine;
    private static _metallicTextureDefine;
    private static _roughnessTextureDefine;
    private static _aoTextureDefine;
    private static _emissiveTextureDefine;
    private static _albedoTexture;
    private static _normalTexture;
    private static _metallicTexture;
    private static _roughnessTexture;
    private static _aoTexture;
    private static _emissiveTexture;
    private static _albedo;
    private static _metallic;
    private static _roughness;
    private static _ao;
    private static _emissive;
    private static _emissiveIntensity;
    get albedoTexture(): BaseTexture;
    set albedoTexture(value: BaseTexture);
    get normalTexture(): BaseTexture;
    set normalTexture(value: BaseTexture);
    get metallicTexture(): BaseTexture;
    set metallicTexture(value: BaseTexture);
    get roughnessTexture(): BaseTexture;
    set roughnessTexture(value: BaseTexture);
    get aoTexture(): BaseTexture;
    set aoTexture(value: BaseTexture);
    get emissiveTexture(): BaseTexture;
    set emissiveTexture(value: BaseTexture);
    get albedo(): Color;
    set albedo(value: Color);
    get metallic(): number;
    set metallic(value: number);
    get roughness(): number;
    set roughness(value: number);
    get ao(): number;
    set ao(value: number);
    get emissive(): Color;
    set emissive(value: Color);
    get emissiveIntensity(): number;
    set emissiveIntensity(value: number);
    constructor(options?: {
        albedoTexture?: BaseTexture;
        normalTexture?: BaseTexture;
        metallicTexture?: BaseTexture;
        roughnessTexture?: BaseTexture;
        aoTexture?: BaseTexture;
        emissiveTexture?: BaseTexture;
        albedo?: Color;
        metallic?: number;
        roughness?: number;
        ao?: number;
        emissive?: Color;
        emissiveIntensity?: number;
    });
    protected _initShader(): void;
    protected _initDefine(): void;
    protected _initUniform(): void;
}

export declare class PrefilteringMaterial extends Material {
    private static _useMainTextureDefine;
    private static _mainTexture;
    private static _roughness;
    get mainTexture(): BaseTexture;
    set mainTexture(value: BaseTexture);
    get roughness(): number;
    set roughness(value: number);
    protected _initShader(): void;
    protected _initDefine(): void;
    protected _initUniform(): void;
}

/**
 *@author jhui
 *@description 天空盒材质
 *@date 2023-02-19 10:46:55
 */
export declare class SkyBoxMaterial extends Material {
    private static _useEqRectMap;
    private static _useCubeMap;
    private static _eqRectMap;
    private static _cubeMap;
    private static _exposureID;
    private _mainTexture;
    constructor(options?: {
        mainTexture?: BaseTexture;
    });
    get mainTexture(): BaseTexture;
    set mainTexture(value: BaseTexture);
    get exposure(): number;
    set exposure(value: number);
    protected _initShader(): void;
    protected _initUniform(): void;
    protected _initRenderMode(): void;
}

/**
 *@author jhui
 *@description 程序化天空球材质
 *@date 2023-02-19 10:47:05
 */
export declare class SkySphereMaterial extends Material {
    private static _sumYPR;
    private static _sumColor;
    private static _sumHaloAndThickness;
    private static _skyColor;
    private static _groundColor;
    private static _skylineColorAndThickness;
    private static _exposureID;
    get sumYaw(): number;
    set sumYaw(value: number);
    get sumPitch(): number;
    set sumPitch(value: number);
    get sumRadius(): number;
    set sumRadius(value: number);
    get sumYPR(): Vector4;
    get sumColor(): Color;
    get sumHalo(): Color;
    get sumHaloThickness(): number;
    set sumHaloThickness(value: number);
    get skyColor(): Color;
    get groundColor(): Color;
    get skylineColor(): Color;
    get skylineThickness(): number;
    set skylineThickness(value: number);
    get exposure(): number;
    set exposure(value: number);
    protected _initShader(): void;
    protected _initUniform(): void;
    protected _initRenderMode(): void;
}

/**
 *@author jhui
 *@description 不受光照影响的材质
 *@date 2023-01-07 21:50:40
 */
export declare class UnlitMaterial extends Material {
    private static _useMainTextureDefine;
    private static _useVertexColorDefine;
    private static _mainColor;
    private static _mainTexture;
    private static _tilingOffset;
    get mainColor(): Color;
    set mainColor(value: Color);
    get mainTexture(): BaseTexture;
    set mainTexture(value: BaseTexture);
    get tilingOffset(): Vector4;
    set tilingOffset(value: Vector4);
    get enableVertexColor(): boolean;
    set enableVertexColor(value: boolean);
    constructor(options?: {
        mainColor?: Color;
        mainTexture?: BaseTexture;
        tilingOffset?: Vector4;
    });
    protected _initShader(): void;
    protected _initDefine(): void;
    protected _initUniform(): void;
}

export declare class Mesh {
    private _gl;
    private _vertexBuffer;
    private _indexBuffer;
    private _VAO;
    private _VBO;
    private _EBO;
    private _subMeshs;
    private _boundingBox;
    private _boundingSphere;
    constructor(vertexBuffer: VertexBuffer, indexBuffer: TBuffer<Uint8Array | Uint16Array | Uint32Array>);
    get vertexBuffer(): VertexBuffer;
    get indexBuffer(): TBuffer<Uint8Array | Uint16Array | Uint32Array>;
    get subMeshs(): Array<SubMesh>;
    get boundingBox(): any;
    get boundingSphere(): any;
    /**
     *@description 分割出SubMesh
     *@param sIndex     开始索引
     *@param iCount     索引个数
     *@return
     */
    split(sIndex?: number, iCount?: number): void;
    setup(gl: WebGL2RenderingContext): void;
    unSetup(): void;
    destroy(): void;
}

export declare class SubMesh {
    private _mesh;
    private _startIndex;
    private _indexCount;
    private _indexInMesh;
    constructor(mesh: Mesh, sIndex: number, iCount: number, indexInMesh: number);
    get indexInMesh(): number;
    draw(gl: WebGL2RenderingContext, mode: number): void;
}

export declare class BlockUniform {
    private _name;
    private _data;
    constructor(name: string, data: BlockItem<any> | BlockGroup<any>);
    get name(): string;
    get type(): Const.GL_TYPE;
    get data(): BlockItem<any> | BlockGroup<any>;
    getNextBaseOffset(): number;
    setBaseOffset(offset: number): void;
}

export declare class Define {
    private _flag;
    private _id;
    private _name;
    constructor(id: number, name: string, flag: BitOp);
    get id(): number;
    get name(): string;
    get flag(): BitOp;
}

export declare class DefineGroup {
    /**记录该组的宏定义集合 */
    private _flags;
    private _defines;
    constructor();
    get flags(): BitOp;
    addDefine(define: Define): void;
    removeDefine(defineID: number): Define;
    getDefine(defineID: number): Define;
    hasDefine(defineID: number): boolean;
}

export declare class Shader {
    static ID: number;
    private _id;
    private _name;
    private _attributes;
    private _uniforms;
    private _uniformBlockGroup;
    private _pass;
    private _instancing;
    constructor(name: string, attributes: Set<string>, uniforms: Set<string>, blockGroup: UniformBlockGroup, instancing: boolean);
    get id(): number;
    get name(): string;
    get attributes(): Set<string>;
    get uniforms(): Set<string>;
    get uniformBlockGroup(): UniformBlockGroup;
    get pass(): Array<ShaderPass>;
    /**
     *@description 添加渲染通道
     *@param vs
     *@param fs
     *@return ShaderPass
     */
    addPass(vs: string, fs: string): ShaderPass;
}

/**
 *@author jhui
 *@description 每个shader实例的数据
 *@date 2023-01-09 13:43:02
 */
export declare class ShaderData {
    private _defineGroup;
    private _uniformGroup;
    constructor();
    get defineGroup(): DefineGroup;
    get uniformGroup(): UniformGroup;
    addDefine(define: Define): void;
    removeDefine(defineID: number): Define;
    getDefine(defineID: number): Define;
    hasDefine(defineID: number): boolean;
    addUniform<T>(uniform: Uniform<T>): void;
    removeUniform<T>(uniformID: number): Uniform<T>;
    getBoolean(uniformID: number): Uniform<boolean>;
    getInt(uniformID: number): Uniform<number>;
    getFloat(uniformID: number): Uniform<number>;
    getFloat2(uniformID: number): Uniform<Vector2>;
    setFloat2(uniformID: number, value: Vector2): void;
    getFloat3(uniformID: number): Uniform<Vector3>;
    getFloat4(uniformID: number): Uniform<Vector4>;
    getMatrix3(uniformID: number): Uniform<Matrix3>;
    getMatrix4(uniformID: number): Uniform<Matrix4>;
    getColor(uniformID: number): Uniform<Color>;
    getTexture(uniformID: number): Uniform<BaseTexture>;
    setTexture(uniformID: number, data: BaseTexture): void;
    getCubeTexture(uniformID: number): Uniform<BaseTexture>;
}

/**
 *@author jhui
 *@description Shader副本，由Shader编译出来的
 *@date 2023-01-09 14:05:12
 */
export declare class ShaderEctype {
    private _owner;
    private _program;
    private _uniformMap;
    private _uniformBlockMap;
    constructor(pass: ShaderPass);
    get program(): GLProgram;
    get invalid(): boolean;
    get uniformMap(): Map<string, WebGLUniformLocation>;
    get uniformBlockMap(): Map<number, number>;
    get uniformBlockIDs(): Array<number>;
    use(): void;
    compile(gl: WebGL2RenderingContext, vs: string, fs: string): void;
}

export declare class ShaderPass {
    private _owner;
    private _vsCode;
    private _fsCode;
    private _shaderEctypes;
    constructor(shader: Shader, vs: string, fs: string);
    get attributes(): Set<string>;
    get uniforms(): Set<string>;
    get uniformBlockGroup(): UniformBlockGroup;
    /**
     *@description 根据defineGroup编译出对应版本的Shader
     *@param gl                     webgl上下文
     *@param defineGroup            宏定义
     *@return
     */
    compile(gl: WebGL2RenderingContext, defineGroup: DefineGroup): ShaderEctype;
}

export declare class UniformBlock {
    private _flag;
    private _frame;
    private _id;
    private _name;
    private _uniformMap;
    private _lastUniform;
    private _buffer;
    private _gl;
    private _UBO;
    constructor(id: number, name: string);
    get flag(): number;
    get frame(): number;
    set frame(value: number);
    /**同时作为绑定点位置 */
    get id(): number;
    get name(): string;
    get uniforms(): Array<BlockUniform>;
    setUp(gl: WebGL2RenderingContext): void;
    unSetup(): void;
    addUniform(blockUniform: BlockUniform): void;
    updateData(gl: WebGL2RenderingContext, data: Map<string, any>): void;
    upload(gl: WebGL2RenderingContext): void;
    destroy(): void;
    private _calculateSize;
}

export declare class Uniform<T> {
    static uploadInt(gl: WebGL2RenderingContext, location: WebGLUniformLocation): void;
    static uploadFloat(gl: WebGL2RenderingContext, location: WebGLUniformLocation): void;
    static uploadFloat2(gl: WebGL2RenderingContext, location: WebGLUniformLocation): void;
    static uploadFloat3(gl: WebGL2RenderingContext, location: WebGLUniformLocation): void;
    static uploadFloat4(gl: WebGL2RenderingContext, location: WebGLUniformLocation): void;
    static uploadMatrix3(gl: WebGL2RenderingContext, location: WebGLUniformLocation): void;
    static uploadMatrix4(gl: WebGL2RenderingContext, location: WebGLUniformLocation): void;
    static uploadTexture(gl: WebGL2RenderingContext, location: WebGLUniformLocation, unit: number): void;
    static uploadCubeTexture(gl: WebGL2RenderingContext, location: WebGLUniformLocation, unit: number): void;
    private _id;
    private _type;
    private _data;
    upload: (gl: WebGL2RenderingContext, ...params: any) => void;
    constructor(type: Const.GL_TYPE, id: number, data?: T);
    get id(): number;
    get type(): Const.GL_TYPE;
    get data(): T;
    set data(value: T);
}

export declare class UniformBlockGroup {
    private _flags;
    private _uniformBlockMap;
    private _uniformBlockIDs;
    private _uniformBlocks;
    constructor();
    get flags(): number;
    get uniformBlockIDs(): Array<number>;
    get uniformBlocks(): Array<UniformBlock>;
    addUniformBlock(uniformBlock: UniformBlock): void;
    removeUniformBlock(uniformBlockID: number): UniformBlock;
    getUniformBlock(uniformBlockID: number): UniformBlock;
    hasUniformBlock(uniformBlockID: number): boolean;
}

export declare class UniformGroup {
    private _uniformMap;
    constructor();
    get uniformMap(): Map<number, Uniform<any>>;
    addUniform<T>(uniform: Uniform<T>): void;
    removeUniform<T>(uniformID: number): Uniform<T>;
    getBoolean(uniformID: number): Uniform<boolean>;
    getInt(uniformID: number): Uniform<number>;
    getFloat(uniformID: number): Uniform<number>;
    getFloat2(uniformID: number): Uniform<Vector2>;
    getFloat3(uniformID: number): Uniform<Vector3>;
    getFloat4(uniformID: number): Uniform<Vector4>;
    getMatrix3(uniformID: number): Uniform<Matrix3>;
    getMatrix4(uniformID: number): Uniform<Matrix4>;
    getColor(uniformID: number): Uniform<Color>;
    getTexture(uniformID: number): Uniform<BaseTexture>;
    getCubeTexture(uniformID: number): Uniform<BaseTexture>;
}

/**
 *@author jhui
 *@description 渲染目标基类
 *@description 实现帧缓冲对象（有颜色、深度、模板缓冲）
 *@description 默认颜色缓冲使用纹理附件，深度和模板缓冲使用RBO附件
 *@date 2023-03-15 19:07:36
 */
export declare class BaseRenderTarget extends BaseTexture {
    protected _FBO: WebGLFramebuffer;
    protected _RBO: WebGLRenderbuffer;
    protected _colorTexture: WebGLTexture;
    protected _depthTexture: WebGLTexture;
    protected _colorFormat: number;
    protected _depthStencilFormat: number;
    protected _generateDepthTexture: boolean;
    protected _autoUpdate: boolean;
    protected _inPool: boolean;
    constructor(options?: {
        width: number;
        height: number;
        colorFormat?: number;
        depthFormat?: number;
        generateDepthTexture?: boolean;
        wrapS?: number;
        wrapT?: number;
        magFilter?: number;
        minFilter?: number;
        internalFormat?: number;
        format?: number;
        dataType?: number;
        encoding?: Const.TEX_ENCODING;
        useMipmap?: boolean;
        mipmaps?: Array<any>;
        preMultiplyAlpha?: boolean;
        flipY?: boolean;
        unpackAlignment?: number;
        autoUpdate?: boolean;
    });
    get isFloatPointTexture(): boolean;
    get autoUpdate(): boolean;
    set autoUpdate(value: boolean);
    get needUpdate(): boolean;
    set needUpdate(value: boolean);
    setUp(gl: WebGL2RenderingContext): void;
    /**
     *@description 激活当前帧缓冲对象FBO
     *@param
     *@return
     */
    setUpRT(gl: WebGL2RenderingContext): void;
    /**创建纹理附件 */
    protected _createTextureAttachment(gl: WebGL2RenderingContext, rtFormat: number): WebGLTexture;
    /**创建渲染缓冲对象附件 */
    protected _createRBOAttachment(gl: WebGL2RenderingContext, rtFormat: number): WebGLRenderbuffer;
    protected _getAttachment(gl: WebGL2RenderingContext, rtFormat: number): number;
    /**获取附加纹理的格式信息 */
    protected _getTextureAttachmentInfo(gl: WebGL2RenderingContext, rtFormat: number): {
        internalFormat: number;
        format: number;
        type: number;
    };
}

export declare class BaseTexture extends Asset {
    protected _glTexture: WebGLTexture;
    protected _source: any;
    protected _wrapS: number;
    protected _wrapT: number;
    protected _magFilter: number;
    protected _minFilter: number;
    protected _internalFormat: number;
    protected _format: number;
    protected _dataType: number;
    protected _encoding: Const.TEX_ENCODING;
    protected _useMipmap: boolean;
    protected _mipmaps: Array<any>;
    protected _preMultiplyAlpha: boolean;
    protected _flipY: boolean;
    protected _unpackAlignment?: number;
    protected _size: Vector2;
    protected _needUpdate: boolean;
    constructor(source?: any, options?: {
        wrapS?: number;
        wrapT?: number;
        magFilter?: number;
        minFilter?: number;
        internalFormat?: number;
        format?: number;
        dataType?: number;
        encoding?: Const.TEX_ENCODING;
        useMipmap?: boolean;
        mipmaps?: Array<any>;
        preMultiplyAlpha?: boolean;
        flipY?: boolean;
        unpackAlignment?: number;
    });
    get glTexture(): WebGLTexture;
    get isDataTexture(): boolean;
    get isFloatPointTexture(): boolean;
    get source(): any;
    set source(value: any);
    get wrapS(): number;
    set wrapS(value: number);
    get wrapT(): number;
    set wrapT(value: number);
    get magFilter(): number;
    set magFilter(value: number);
    get minFilter(): number;
    set minFilter(value: number);
    get internalFormat(): number;
    set internalFormat(value: number);
    get format(): number;
    set format(value: number);
    get dataType(): number;
    set dataType(value: number);
    get encoding(): number;
    get useMipmap(): boolean;
    set useMipmap(value: boolean);
    get mipmaps(): Array<any>;
    get preMultiplyAlpha(): boolean;
    set preMultiplyAlpha(value: boolean);
    get flipY(): boolean;
    set flipY(value: boolean);
    get unpackAlignment(): number;
    set unpackAlignment(value: number);
    get size(): Vector2;
    /**
     *@description 激活当前纹理
     *@param
     *@return
     */
    setUp(gl: WebGL2RenderingContext): void;
    setSize(width: number, height: number): void;
}

/**
 *@author jhui
 *@description 位图
 *@date 2023-02-11 21:51:27
 */
export declare class BitMap extends Asset {
    private _source;
    private _width;
    private _height;
    private _isDataBuffer;
    constructor(source: TBuffer<Const.TypeArray> | HTMLImageElement, width?: number, height?: number);
    get isDataBuffer(): boolean;
    get dataType(): Const.TYPE_ARRAY;
    get source(): TBuffer<Const.TypeArray> | HTMLImageElement;
    get width(): number;
    get height(): number;
}

export declare class CubeRenderTarget extends BaseRenderTarget {
    protected _wrapR: number;
    constructor(options?: {
        width: number;
        height: number;
        colorFormat?: number;
        depthFormat?: number;
        generateDepthTexture?: boolean;
        wrapS?: number;
        wrapT?: number;
        wrapR?: number;
        magFilter?: number;
        minFilter?: number;
        internalFormat?: number;
        format?: number;
        dataType?: number;
        encoding?: Const.TEX_ENCODING;
        useMipmap?: boolean;
        mipmaps?: Array<any>;
        preMultiplyAlpha?: boolean;
        flipY?: boolean;
        unpackAlignment?: number;
        autoUpdate?: boolean;
    });
    get wrapR(): number;
    set wrapR(value: number);
    setUp(gl: WebGL2RenderingContext): void;
    /**
     *@description 激活当前帧缓冲对象FBO
     *@param faceIx         面索引，指定渲染到CubeMap哪一面（【0-5】）
     *@param mipMapLevel    指定渲染到mipmapLevel
     *@return
     */
    setUpRT(gl: WebGL2RenderingContext, faceIx?: number, mipMapLevel?: number): void;
    protected _createTextureAttachment(gl: WebGL2RenderingContext, rtFormat: number): WebGLTexture;
}

/**
 *@author jhui
 *@description 立方纹理
 *@date 2023-02-20 14:09:03
 */
export declare class CubeTexture extends BaseTexture {
    protected _wrapR: number;
    constructor(source?: Array<BitMap>, options?: {
        wrapS?: number;
        wrapT?: number;
        wrapR?: number;
        magFilter?: number;
        minFilter?: number;
        internalFormat?: number;
        format?: number;
        dataType?: number;
        encoding?: Const.TEX_ENCODING;
        useMipmap?: boolean;
        mipmaps?: Array<any>;
        preMultiplyAlpha?: boolean;
        flipY?: boolean;
        unpackAlignment?: number;
    });
    get isDataTexture(): boolean;
    get isFloatPointTexture(): boolean;
    get source(): Array<BitMap>;
    set source(value: Array<BitMap>);
    get wrapR(): number;
    set wrapR(value: number);
    get size(): Vector2;
    setUp(gl: WebGL2RenderingContext): void;
}

/**
 *@author jhui
 *@description 渲染目标
 *@description 实现帧缓冲对象（有颜色、深度、模板缓冲）
 *@description 默认颜色缓冲使用纹理附件，深度和模板缓冲使用RBO附件
 *@date 2023-03-14 16:04:05
 */
export declare class RenderTarget extends BaseRenderTarget {
    private static _pool;
    static get(options: {
        width: number;
        height: number;
        colorFormat?: number;
        depthFormat?: number;
        generateDepthTexture?: boolean;
        wrapS?: number;
        wrapT?: number;
        magFilter?: number;
        minFilter?: number;
        internalFormat?: number;
        format?: number;
        dataType?: number;
        encoding?: Const.TEX_ENCODING;
        useMipmap?: boolean;
        mipmaps?: Array<any>;
        preMultiplyAlpha?: boolean;
        flipY?: boolean;
        unpackAlignment?: number;
        autoUpdate?: boolean;
    }): RenderTarget;
    static put(item: RenderTarget): void;
    setUpRT(gl: WebGL2RenderingContext): void;
}

export declare class RenderTexture extends Texture {
}

/**
 *@author jhui
 *@description 二维纹理
 *@date 2023-02-20 14:10:38
 */
export declare class Texture extends BaseTexture {
    protected _position: Vector2;
    protected _rotation: number;
    protected _transform: Matrix3;
    constructor(source?: BitMap, options?: {
        wrapS?: number;
        wrapT?: number;
        magFilter?: number;
        minFilter?: number;
        internalFormat?: number;
        format?: number;
        dataType?: number;
        encoding?: Const.TEX_ENCODING;
        useMipmap?: boolean;
        mipmaps?: Array<any>;
        preMultiplyAlpha?: boolean;
        flipY?: boolean;
        unpackAlignment?: number;
    });
    get isDataTexture(): boolean;
    get isFloatPointTexture(): boolean;
    get source(): BitMap;
    set source(value: BitMap);
    get postion(): Vector2;
    get rotation(): number;
    get transform(): Matrix3;
    setUp(gl: WebGL2RenderingContext): void;
    setOffsetAndSize(x: number, y: number, width: number, height: number): void;
}

/**
 *@author jhui
 *@description 三维纹理
 *@date 2023-02-20 14:10:29
 */
export declare class Texture3D extends Asset {
}

/**
 *@author jhui
 *@description 环境光
 *@date 2023-02-22 22:03:11
 */
export declare class EnvLight {
    private _type;
    private _envLightMap;
    private _colorAndIntensity;
    constructor();
    get type(): Const.ENV_LIGHT_TYPE;
    set type(value: Const.ENV_LIGHT_TYPE);
    get colorAndIntensity(): Vector4;
    get envLightMap(): BaseTexture;
    set envLightMap(value: BaseTexture);
}

/**
 *@author jhui
 *@description 环境反射
 *@date 2023-02-22 22:03:34
 */
export declare class EnvReflection {
    private _type;
    private _envRefMap;
    private _brdfLUTMap;
    constructor();
    get type(): Const.ENV_REF_TYPE;
    set type(value: Const.ENV_REF_TYPE);
    get envRefMap(): BaseTexture;
    set envRefMap(value: BaseTexture);
    get brdfLUTMap(): BaseTexture;
    set brdfLUTMap(value: BaseTexture);
}

/**
 *@author jhui
 *@description 场景雾
 *@date 2023-02-14 14:54:05
 */
export declare class Fog {
    private _enabled;
    fogStart: number;
    fogRange: number;
    fogColor: Color;
    constructor();
    get enabled(): boolean;
}

/**
 *@author jhui
 *@description 全局照明相关（目前只使用了IBL技术）
 *@date 2023-03-18 14:23:25
 */
export declare class GI {
    private _scene;
    private _cubeMesh;
    private _quadMesh;
    private _envCaptureCamera;
    private _envLightCamera;
    private _envRefCamera;
    private _brdfLUTCamera;
    private _genIrradianceMapMtl;
    private _genPrefilteringMapMtl;
    private _genLUTMapMtl;
    constructor(scene: Scene);
    get envCaptureCamera(): CubeCamera;
    get envLightCamera(): CubeCamera;
    get envRefCamera(): CubeCamera;
    get brdfLUTCamera(): Camera;
    get envCaptureMap(): BaseTexture;
    get envLightMap(): BaseTexture;
    get envRefMap(): BaseTexture;
    get brdfLUTMap(): BaseTexture;
    getEnvLightRenderable(out: RenderItem): void;
    getEnvRefRenderable(out: RenderItem): void;
    getLUTRenderable(out: RenderItem): void;
    private _initGIGameObject;
    private _initEnvCamera;
}

/**
 *@author jhui
 *@description 天空盒
 *@date 2023-02-14 14:54:18
 */
export declare class SkyBox {
    private static _boxMesh;
    private static _sphereMesh;
    private _layer;
    private _type;
    private _mesh;
    private _material;
    get layer(): number;
    set layer(value: number);
    get type(): Const.SKYBOX_TYPE;
    get mesh(): Mesh;
    get material(): SkyBoxMaterial | SkySphereMaterial;
    set material(value: SkyBoxMaterial | SkySphereMaterial);
    get enabled(): boolean;
    private _setBoxMesh;
    private _setSphereMesh;
}

export declare class BitMapLoader extends Loader {
    private _rgbeParser;
    constructor(manager: AssetManager);
    load(url: string, options: {
        onLoad: (res: BitMap, ...args: any) => void;
        onProgress?: (event: ProgressEvent) => void;
        onError?: (event: any, ...args: any) => void;
        args?: any[];
    }): void;
    parseHDR(arrayBuffer: ArrayBuffer): BitMap;
}

export declare class CubeTextureLoader extends Loader {
    load(url: string, options: {
        onLoad: (res: CubeTexture, ...args: any) => void;
        onProgress?: (event: ProgressEvent) => void;
        onError?: (event: any, ...args: any) => void;
        args?: any[];
    }): void;
    private _initTexture;
}

export declare class FileLoader extends Loader {
    load<T, K extends keyof {
        arraybuffer: "arraybuffer";
        blob: "blob";
        document: "document";
        json: "json";
        text: "text";
    }>(url: string, responseType: K, options: {
        onLoad: (res: T, ...args: any) => void;
        onProgress?: (event: ProgressEvent) => void;
        onError?: (event: any, ...args: any) => void;
        args?: any[];
    }): void;
}

export declare class GLTFLoader extends Loader {
    private _glbParser;
    constructor(manager: AssetManager);
    load(url: string, options: {
        onLoad: (res: Array<Scene>, ...args: any) => void;
        onProgress?: (event: ProgressEvent) => void;
        onError?: (event: any, ...args: any) => void;
        args?: any[];
    }): void;
    private _parserGLTF;
    private _loadBufferFromUri;
    private _loadTextureFromBufferView;
    private _loadTextureFromUri;
    private _parserScenes;
    private _parserScene;
    private _parserNode;
    private _parserMesh;
    private _parserAccessor;
    private _getComponentSize;
    private _getComponentCount;
    private _parserMaterials;
    private _parserMaterial;
}

export declare class Loader {
    protected _manager: AssetManager;
    constructor(manager: AssetManager);
}

export declare class TextureLoader extends Loader {
    load(url: string, options: {
        onLoad: (res: Texture, ...args: any) => void;
        onProgress?: (event: ProgressEvent) => void;
        onError?: (event: any, ...args: any) => void;
        args?: any[];
    }): void;
    private _initTexture;
}

/**
 *@author jhui
 *@description 对象池
 *@date 2022-10-24 21:30:15
 */
export declare class Pool<T> {
    private _name;
    private _capacity;
    private _list;
    private _creator;
    private _init;
    private _reset;
    constructor(name: string, creator: () => T, options?: {
        /**初始化数量 */
        initCount?: number;
        /**容量 */
        capacity?: number;
        /**取出对象时执行的初始化方法 */
        init?: (item: T, ...params: any) => void;
        /**回收对象时执行的重置方法 */
        reset?: (item: T) => void;
    });
    get name(): string;
    private _initPool;
    put(items: T | Array<T>): void;
    get(...param: any): T;
    setCapacity(capacity: number): void;
    /**
     *@description 清除池内容
     *@param
     *@return
     */
    clear(): void;
    /**
     *@description 销毁对象池
     *@param
     *@return
     */
    destroy(): void;
}

export declare namespace GLEnum {
    enum ShaderType {
        V_SHADER = 0,
        F_SHADER = 1
    }
}

/**
 *@author jhui
 *@description 封装WebGLProgram
 *@date 2022-11-13 14:37:43
 */
export declare class GLProgram {
    private _gl;
    private _source;
    private _vShader;
    private _fShader;
    private _invalid;
    constructor(gl: WebGL2RenderingContext);
    get source(): WebGLProgram;
    get invalid(): boolean;
    private _init;
    attachShaders(vShader: GLShader, fShader: GLShader): void;
    linkProgram(): boolean;
    use(): void;
    getAttribLocation(name: string): number;
    bindAttribLocation(name: string, location: number): void;
    getUniformLocation(name: string): WebGLUniformLocation;
    getUniformBlockIndex(name: string): number;
    uniformBlockBinding(uniformBlockMap: Map<number, number>): void;
    setBool(location: WebGLUniformLocation, value: boolean): void;
    setInt(location: WebGLUniformLocation, value: number): void;
    setFloat(location: WebGLUniformLocation, value: number): void;
    setVec2(location: WebGLUniformLocation, vec2: Vector2): void;
    setVec3(location: WebGLUniformLocation, vec3: Vector3): void;
    setVec4(location: WebGLUniformLocation, vec4: Vector3): void;
    setMtx2(location: WebGLUniformLocation, mtx2: any): void;
    setMtx3(location: WebGLUniformLocation, mtx3: Matrix3): void;
    setMtx4(location: WebGLUniformLocation, mtx4: Matrix4): void;
    destroy(): void;
    private _deleteProgram;
}

export declare class GLRenderer {
    private _gl;
    private _canvas;
    private _glAttributes;
    private _width;
    private _height;
    constructor(width?: number, height?: number, glAttributes?: WebGLContextAttributes);
    get gl(): WebGL2RenderingContext;
    get canvas(): HTMLCanvasElement;
    get width(): number;
    get height(): number;
    render(): void;
    clear(clearColor: Color): void;
    private _onEvent;
    private _offEvent;
    private _onWebGLContextLost;
    private _onWebGLContextRestore;
    private _onWebGLContextCreationError;
    destroy(): void;
}

/**
 *@author jhui
 *@description 封装WebGLShader
 *@date 2022-11-13 11:45:19
 */
export declare class GLShader {
    private _gl;
    private _type;
    private _source;
    private _code;
    private _invalid;
    constructor(gl: WebGL2RenderingContext, code: string, type: GLEnum.ShaderType);
    get type(): GLEnum.ShaderType;
    get source(): WebGLShader;
    get invalid(): boolean;
    private _init;
    destroy(): void;
}

export declare function createCanvas(width?: number, height?: number): HTMLCanvasElement;
export declare function create3DContext(canvas: HTMLCanvasElement, options?: WebGLContextAttributes): WebGL2RenderingContext;
export declare function createProgram(gl: WebGL2RenderingContext): WebGLProgram;
export declare function attachShader(gl: WebGL2RenderingContext, program: WebGLProgram, vShader: WebGLShader, fShader: WebGLShader): void;
export declare function linkProgram(gl: WebGL2RenderingContext, program: WebGLProgram, vShader: WebGLShader, fShader: WebGLShader): boolean;
export declare function createShader(gl: WebGL2RenderingContext, type: GLEnum.ShaderType): WebGLShader;
export declare function compileShader(gl: WebGL2RenderingContext, code: string, shader: WebGLShader): boolean;

/**
 *@author jhui
 *@description 当前渲染信息
 *@date 2023-02-22 15:03:55
 */
export declare class RenderInfo {
    scene: Scene;
    camera: Camera;
    renderFrame: number;
    vao: WebGLVertexArrayObject;
    private _renderState;
    private _textureState;
    constructor();
    get renderState(): RenderState;
    get textureState(): TextureState;
    init(gl: WebGL2RenderingContext): void;
}

/**
 *@author jhui
 *@description 渲染项，收集渲染数据
 *@date 2022-11-24 20:04:27
 */
export declare class RenderItem {
    /**当前渲染对象所在Layer */
    layer: number;
    mesh: Mesh;
    subMeshIndex: number;
    material: Material;
    transform: Transform;
    worldMatrix: Matrix4;
    depth: number;
    renderBatch: number;
    renderQueue: number;
    set(layer: number, mesh: Mesh, subMeshIndex: number, mtl: Material, tr: Transform, depth: number, rb: number, rq: number): void;
    destroy(): void;
}

export declare class RenderQueue {
    opaques: Array<RenderItem>;
    transparents: Array<RenderItem>;
    private _riPool;
    constructor();
    getItem(): RenderItem;
    putItem(value: RenderItem): void;
    addItemToOpaque(item: RenderItem): void;
    addItemToTransparent(item: RenderItem): void;
    sort(): void;
    private _opaqueCompareFn;
    private _transparentCompareFn;
    clear(): void;
}







export declare class BloomPass extends EffectPass {
    private static _sourceMapID;
    private static _thresholdID;
    private static _texelOffsetID;
    private static _overlayMapID;
    private _downSample;
    private _radius;
    private _iteration;
    private _tempVec2;
    private _extBrightShader;
    private _blurShader;
    private _extBrightData;
    private _blurData;
    constructor(downSample: number, radius: number, iteration: number, threshold: number);
    get downSample(): number;
    set downSample(value: number);
    get radius(): number;
    set radius(value: number);
    get iteration(): number;
    set iteration(value: number);
    get threshold(): number;
    set threshold(value: number);
    protected _initProperty(): void;
    protected _initShader(): void;
    protected _initUniform(): void;
    onRender(gl: WebGL2RenderingContext, context: Postprocessor): void;
}

export declare class BlurPass extends EffectPass {
    private static _sourceMapID;
    private static _texelOffsetID;
    private _downSample;
    private _radius;
    private _iteration;
    private _tempVec2;
    constructor(downSample: number, radius: number, iteration: number);
    get downSample(): number;
    set downSample(value: number);
    get radius(): number;
    set radius(value: number);
    get iteration(): number;
    set iteration(value: number);
    protected _initShader(): void;
    protected _initUniform(): void;
    /**
     *@description 实现时该方法需要重写，默认不做任何效果处理
     *@param
     *@return
     */
    onRender(gl: WebGL2RenderingContext, context: Postprocessor): void;
}

export declare class EffectPass {
    protected _shader: Shader;
    protected _shaderData: ShaderData;
    constructor();
    get shader(): Shader;
    get shaderData(): ShaderData;
    protected _initShader(): void;
    protected _initProperty(): void;
    protected _initDefine(): void;
    protected _initUniform(): void;
    /**
     *@description 实现时该方法需要重写，默认不做任何效果处理
     *@param
     *@return
     */
    onRender(gl: WebGL2RenderingContext, context: Postprocessor): void;
}

/**
 *@author jhui
 *@description 该Pass不做任何操作，只复制 Source 到 Destination
 *@date 2023-03-25 20:17:37
 */
export declare class NormalPass extends EffectPass {
    private static _sourceMapID;
    protected _initShader(): void;
    protected _initUniform(): void;
}

export declare class Postprocessor {
    private static _normalPass;
    private static _toneMappingPass;
    private static _textureState;
    private static get textureState();
    private static get normalPass();
    private static get toneMappingPass();
    private _camera;
    private _initial;
    private _source;
    private _dest;
    private _pass;
    private _screenWidth;
    private _screenHeight;
    constructor(camera: Camera, pass?: Array<EffectPass>);
    get initial(): RenderTarget;
    get source(): RenderTarget;
    get dest(): RenderTarget;
    get screenWidth(): number;
    get screenHeight(): number;
    addPass(pass: EffectPass, ix?: number): void;
    delPass(pass: EffectPass): void;
    render(gl: WebGL2RenderingContext): void;
    blitToScreenQuad(gl: WebGL2RenderingContext, source: RenderTarget, dest: RenderTarget, shaderEctype?: ShaderEctype, shaderData?: ShaderData): void;
    static blitToScreenQuad(gl: WebGL2RenderingContext, source: RenderTarget, dest: RenderTarget, shaderEctype?: ShaderEctype, shaderData?: ShaderData): void;
    static toneMapping(gl: WebGL2RenderingContext, source: RenderTarget, dest: RenderTarget, toneMapping: Const.TONE_MAPPING, gamma: number): void;
    private static _setRenderState;
}

export declare class SMAAPass extends EffectPass {
}

/**
 *@author jhui
 *@description ToneMapping + GammaCorrect
 *@date 2023-04-10 14:27:24
 */
export declare class ToneMappingPass extends EffectPass {
    private static _linearToneMappingDefine;
    private static _reinhardDefine;
    private static _optimizedCineonToneMappingDefine;
    private static _acesFilmicToneMappingDefine;
    private static _sourceMapID;
    private static _exposureID;
    private static _gammaID;
    private _toneMapping;
    private _define;
    constructor(toneMapping?: Const.TONE_MAPPING, gamma?: number);
    get toneMapping(): Const.TONE_MAPPING;
    set toneMapping(value: Const.TONE_MAPPING);
    get gamma(): number;
    set gamma(value: number);
    protected _initShader(): void;
    protected _initUniform(): void;
}

export declare class BlockGroup<T extends BlockStruct | Array<BlockStruct>> {
    static getNextBaseOffset(): number;
    static getNextBaseOffsetArray(): number;
    static setBaseOffset(offset: number): void;
    static setBaseOffsetArray(offset: number): void;
    static updateData(buffer: TBuffer<Float32Array>, data: Map<string, any>): boolean;
    static updateDatas(buffer: TBuffer<Float32Array>, data: Array<Map<string, any>>): boolean;
    private _data;
    private _length;
    getNextBaseOffset: () => number;
    setBaseOffset: (offset: number) => void;
    updateData: (buffer: TBuffer<Float32Array>, data: any) => boolean;
    constructor(data: T);
    get type(): Const.GL_TYPE;
    get data(): T;
    get length(): number;
    get isArray(): boolean;
}

export declare class BlockItem<T> {
    static NumberData: Float32Array;
    static Matrix3Data: Float32Array;
    static updateFloat(buffer: TBuffer<Float32Array>, value: number): boolean;
    static updateFloats(buffer: TBuffer<Float32Array>, values: Array<number>): boolean;
    static updateFloatN(buffer: TBuffer<Float32Array>, value: Vector3): boolean;
    static updateFloatNs(buffer: TBuffer<Float32Array>, values: Array<Vector3>): boolean;
    static updateMatrixN(buffer: TBuffer<Float32Array>, value: Matrix4): boolean;
    static updateMatrixNs(buffer: TBuffer<Float32Array>, values: Array<Matrix4>): boolean;
    private _name;
    private _type;
    private _data;
    private _length;
    private _baseAlignment;
    private _alignedOffset;
    private _size;
    updateData: (buffer: TBuffer<Float32Array>, data: any) => boolean;
    constructor(name: string, type: Const.GL_TYPE, data: T);
    get isStruct(): boolean;
    get name(): string;
    get type(): Const.GL_TYPE;
    get length(): number;
    get isArray(): boolean;
    get alignedOffset(): number;
    get baseAlignment(): number;
    getNextBaseOffset(): number;
    setBaseOffset(offset: number): void;
}

export declare class BlockStruct {
    protected _name: string;
    protected _type: Const.GL_TYPE;
    protected _items: Array<BlockItem<any>>;
    constructor(name: string, items: Array<BlockItem<any>>);
    get isStruct(): boolean;
    get name(): string;
    get items(): Array<BlockItem<any>>;
    getNextBaseOffset(): number;
    setBaseOffset(offset: number): void;
    updateData(buffer: TBuffer<Float32Array>, data: Map<string, any>): boolean;
}

export declare class ParallelLightStruct extends BlockStruct {
    constructor();
}

export declare class SpotLightStruct extends BlockStruct {
    constructor();
}

export declare class PointLightStruct extends BlockStruct {
    constructor();
}

/**
 *@author jhui
 *@description glb解析器
 *@date 2023-03-27 11:52:37
 */
export declare class GLBParser {
    private _glbHeaderInts;
    private _glbChunkHeaderInts;
    private _glbMagic;
    private _glbVersion;
    private _jsonChunkType;
    private _binaryChunkType;
    parse(buffer: ArrayBuffer): {
        jsonObject: any;
        buffers: Array<ArrayBuffer>;
    };
    private _getCheckedGlbInfo;
    private _getAllChunkInfos;
    private _getChunkInfo;
    private _getJsonFromChunk;
    private _getBufferFromChunk;
    private _checkEquality;
}

/**
 *@author jhui
 *@description rgbe解析器
 *@date 2023-03-12 15:38:18
 */
export declare class RGBEParser {
    parse(buffer: ArrayBuffer, floatType?: Const.FLOAT_TYPE, maxRange?: number): {
        width: number;
        height: number;
        data: any;
        header: string;
        gamma: number;
        exposure: number;
        type: number;
    };
}
















/**
 *@author jhui
 *@description 曲线基类
 *@date 2022-11-05 15:52:39
 */
export declare class Curve<T extends Vector2 | Vector3> {
    get start(): T;
    get end(): T;
    get length(): number;
    set(...params: any): Curve<T>;
    /**
     *@description 不等距采样
     *@param t  参数【0~1】
     *@return
     */
    getPoint(t: number, out?: T): T;
    /**
     *@description 获取切线方向向量
     *@param t  参数【0~1】
     *@return
     */
    getTangent(t: number, out?: T): T;
    /**
     *@description 等距采样
     *@param u  参数【0~1】
     *@return
     */
    getPointAt(u: number, out?: T): T;
    /**
     *@description 获取切线方向向量
     *@param u  参数【0~1】
     *@return
     */
    getTangentAt(u: number, out?: T): T;
    /**
     *@description 对曲线进行空间采样，使用getPoint()
     *@param left    采样起点，【0~1】
     *@param right   采样终点，【0~1】
     *@return 采样数组
     */
    getPoints(left?: number, right?: number, segments?: number): Array<T>;
    /**
     *@description 对曲线进行空间采样，使用getPointAt()
     *@param left    采样起点，【0~1】
     *@param right   采样终点，【0~1】
     *@return 采样数组
     */
    getPointAts(left?: number, right?: number, segments?: number): Array<T>;
    copyForm(src: Curve<T>): Curve<T>;
    clone(): Curve<T>;
}

/**
 *@author jhui
 *@description 二维线段
 *@date 2022-11-07 10:21:13
 */
export declare class Line2 extends Curve<Vector2> {
    private _start;
    private _end;
    private _length;
    private _isBounded;
    constructor(start?: Vector2, end?: Vector2, isBounded?: boolean);
    get start(): Vector2;
    get end(): Vector2;
    get length(): number;
    get isBounded(): boolean;
    set(start: Vector2, end: Vector2, isBounded?: boolean): Line2;
    getPoint(t: number, out?: Vector2): Vector2;
    getTangent(t: number, out?: Vector2): Vector2;
    getPointAt(u: number, out?: Vector2): Vector2;
    getTangentAt(u: number, out?: Vector2): Vector2;
    copyForm(src: Line2): Line2;
    clone(): Line2;
}




/**
 *@author jhui
 *@description 记录当前批次的渲染状态
 *@date 2023-02-16 16:05:40
 */
export declare class RenderState {
    init(gl: WebGL2RenderingContext): void;
    /**
     *@description 设置渲染状态
     *@param
     *@return
     */
    setRenderState(gl: WebGL2RenderingContext, material: Material): void;
}

/**
 *@author jhui
 *@description 纹理使用状态
 *@date 2023-02-16 16:06:22
 */
export declare class TextureState {
    private _maxSamples;
    private _curUseUnit;
    private _texture0;
    constructor();
    init(gl: WebGL2RenderingContext): void;
    releaseAllUnits(gl: WebGL2RenderingContext): void;
    allocateUnit(): number;
    uploadTexture(gl: WebGL2RenderingContext, uniform: Uniform<any>, location: WebGLUniformLocation): void;
}

}