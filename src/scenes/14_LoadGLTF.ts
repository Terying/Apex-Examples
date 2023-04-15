//加载GLTF模型
export async function LoadGLTF(): Promise<Apex.Scene> {

    let hdrTexture = await Apex.Managers.Asset.loadAsync<Apex.Texture>("./asset/texture/env/royal_esplanade_1k/royal_esplanade_1k.hdr", Apex.Const.ASSET_TYPE.TEXTURE);
    let scenes = await Apex.Managers.Asset.loadAsync<Array<Apex.Scene>>("./asset/model/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf", Apex.Const.ASSET_TYPE.GLTF);

    let scene = scenes[0];
    scene.env.skybox.material = new Apex.SkyBoxMaterial({ mainTexture: hdrTexture });

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    let camera = cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    let wander = cameraGo.addComponent<Apex.Wander>(Apex.Wander);
    wander.moveSpeed = 5;
    camera.enabledHDR = true;
    camera.toneMapping = Apex.Const.TONE_MAPPING.ACES_FILMIC;
    cameraGo.transform.position = new Apex.Vector3(0, 1, 3);
    cameraGo.transform.lookAt(new Apex.Vector3(), new Apex.Vector3(0, 1, 0));
    scene.addChild(cameraGo);

    return scene;

}