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
    uniform sampler2D u_SourceMap;
    out vec4 fragColor;
    void main(){
        fragColor = vec4(1.0 - texture(u_SourceMap, v_Uv).rgb, 1.0);
    }
`;

//自定义后期效果
export async function CustomPostprocessing(): Promise<Apex.Scene> {

    //资源加载
    let cubeMap = await Apex.Managers.Asset.loadAsync<Apex.CubeTexture>("./asset/texture/cube/park2.jpg", Apex.Const.ASSET_TYPE.CUBE_TEXTURE);

    let scene = new Apex.Scene("CustomPostprocessing");
    scene.env.skybox.material = new Apex.SkyBoxMaterial({ mainTexture: cubeMap });

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    let camera = cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    scene.addChild(cameraGo);

    //创建InvertShader
    let shader = Apex.Managers.Shader.addShader(
        "InvertShader",
        new Set<string>([Apex.Const.ATTRIBUTE_MAP.a_Position, Apex.Const.ATTRIBUTE_MAP.a_Uv]),
        new Set<string>([Apex.Const.UNIFORM_MAP.u_SourceMap])
    );
    shader.addPass(vs, fs);

    camera.postprocessor = new Apex.Postprocessor(camera, [new InvertPass()]);

    return scene;

}

/**
 *@author jhui
 *@description 反相效果
 *@date 2023-04-11 19:13:18
 */
class InvertPass extends Apex.EffectPass {

    private _sourceMapId: number;

    protected _initProperty(): void {

        super._initProperty();

        this._sourceMapId = Apex.Managers.Shader.registerUniform(Apex.Const.UNIFORM_MAP.u_SourceMap);

    }

    protected _initShader(): void {

        this._shader = Apex.Managers.Shader.findShader("InvertShader");

    }

    protected _initUniform(): void {

        this._shaderData.addUniform(new Apex.Uniform<Apex.BaseTexture>(Apex.Const.GL_TYPE.TEXTURE, this._sourceMapId));

    }

}