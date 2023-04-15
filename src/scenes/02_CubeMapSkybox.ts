//立方纹理天空盒
export async function CubeMapSkybox(): Promise<Apex.Scene> {

    //资源加载
    let cubeMap = await Apex.Managers.Asset.loadAsync<Apex.CubeTexture>("./asset/texture/cube/skyboxsun25deg.jpg", Apex.Const.ASSET_TYPE.CUBE_TEXTURE);

    let scene = new Apex.Scene("CubeMapSkybox");
    scene.env.skybox.material = new Apex.SkyBoxMaterial({ mainTexture: cubeMap });

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    scene.addChild(cameraGo);

    return scene;

}