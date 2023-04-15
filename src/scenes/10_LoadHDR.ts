//加载HDR文件
export async function LoadHDR(): Promise<Apex.Scene> {

    let hdrTexture = await Apex.Managers.Asset.loadAsync<Apex.Texture>("./asset/texture/env/footprint_court/footprint_court.hdr", Apex.Const.ASSET_TYPE.TEXTURE);

    let scene = new Apex.Scene("LoadHDR");
    scene.env.skybox.material = new Apex.SkyBoxMaterial({ mainTexture: hdrTexture });

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    let camera = cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    camera.enabledHDR = true;
    cameraGo.addComponent<Apex.Wander>(Apex.Wander);
    cameraGo.transform.applyRotateY(Math.PI * 0.5, true);
    scene.addChild(cameraGo);

    return scene;

}