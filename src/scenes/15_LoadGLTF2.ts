//加载GLTF模型
export async function LoadGLTF2(): Promise<Apex.Scene> {

    let hdrTexture = await Apex.Managers.Asset.loadAsync<Apex.Texture>("./asset/texture/env/footprint_court/footprint_court.hdr", Apex.Const.ASSET_TYPE.TEXTURE);

    let scenes = await Apex.Managers.Asset.loadAsync<Array<Apex.Scene>>("./asset/model/gltf/WaterBottle/glTF/WaterBottle.gltf", Apex.Const.ASSET_TYPE.GLTF);

    let scene = scenes[0];
    scene.env.skybox.material = new Apex.SkyBoxMaterial({ mainTexture: hdrTexture });

    let waterBottle = scene.children[0];
    waterBottle.transform.localScale = new Apex.Vector3(5, 5, 5);

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    let camera = cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    let wander = cameraGo.addComponent<Apex.Wander>(Apex.Wander);
    wander.moveSpeed = 5;
    camera.enabledHDR = true;
    camera.toneMapping = Apex.Const.TONE_MAPPING.ACES_FILMIC;
    cameraGo.transform.position = new Apex.Vector3(3, 0.5, 0);
    cameraGo.transform.lookAt(new Apex.Vector3(), new Apex.Vector3(0, 1, 0));
    scene.addChild(cameraGo);

    //点光源
    let lightGo = new Apex.GameObject("Point Light");
    let light = lightGo.addComponent<Apex.Light>(Apex.Light);
    light.type = Apex.Const.LIGHT_TYPE.Point;
    light.color.set(200, 200, 200);
    lightGo.transform.position = new Apex.Vector3(5, 5, 5);
    scene.addChild(lightGo);

    return scene;

}