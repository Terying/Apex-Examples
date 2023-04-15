//PBR渲染
export async function PBRTexture(): Promise<Apex.Scene> {

    let hdrTexture = await Apex.Managers.Asset.loadAsync<Apex.Texture>("./asset/texture/env/footprint_court/footprint_court.hdr", Apex.Const.ASSET_TYPE.TEXTURE);

    let albedoPaths = [
        "./asset/texture/pbr/granitesmooth1/granitesmooth1-albedo.png",
        "./asset/texture/pbr/scuffed-plastic-1-Unreal-Engine/scuffed-plastic-alb.png",
        "./asset/texture/pbr/gold-scuffed-Unreal-Engine/gold-scuffed_basecolor-boosted.png"
    ];
    let normalPaths = [
        "./asset/texture/pbr/granitesmooth1/granitesmooth1-normal2.png",
        "./asset/texture/pbr/scuffed-plastic-1-Unreal-Engine/scuffed-plastic-normal.png",
        "./asset/texture/pbr/gold-scuffed-Unreal-Engine/gold-scuffed_normal.png"
    ];
    let metalPaths = [
        "./asset/texture/pbr/granitesmooth1/granitesmooth1-metalness.png",
        "./asset/texture/pbr/scuffed-plastic-1-Unreal-Engine/scuffed-plastic-metal.png",
        "./asset/texture/pbr/gold-scuffed-Unreal-Engine/gold-scuffed_metallic.png"
    ];
    let roughnesPaths = [
        "./asset/texture/pbr/granitesmooth1/granitesmooth1-roughness3.png",
        "./asset/texture/pbr/scuffed-plastic-1-Unreal-Engine/scuffed-plastic-rough.png",
        "./asset/texture/pbr/gold-scuffed-Unreal-Engine/gold-scuffed_roughness.png"
    ];
    let aoPaths = [
        "",
        "./asset/texture/pbr/scuffed-plastic-1-Unreal-Engine/scuffed-plastic-ao.png",
        ""
    ];

    let albedoPromises = new Array<Promise<Apex.Texture>>();
    let normalPromises = new Array<Promise<Apex.Texture>>();
    let metalPromises = new Array<Promise<Apex.Texture>>();
    let roughnesPromises = new Array<Promise<Apex.Texture>>();
    let aoPromises = new Array<Promise<Apex.Texture>>();

    for (let i = 0, il = albedoPaths.length; i < il; i++) {

        albedoPromises.push(Apex.Managers.Asset.loadAsync<Apex.Texture>(albedoPaths[i], Apex.Const.ASSET_TYPE.TEXTURE));
        normalPromises.push(Apex.Managers.Asset.loadAsync<Apex.Texture>(normalPaths[i], Apex.Const.ASSET_TYPE.TEXTURE));
        metalPromises.push(Apex.Managers.Asset.loadAsync<Apex.Texture>(metalPaths[i], Apex.Const.ASSET_TYPE.TEXTURE));
        roughnesPromises.push(Apex.Managers.Asset.loadAsync<Apex.Texture>(roughnesPaths[i], Apex.Const.ASSET_TYPE.TEXTURE));
        aoPromises.push(Apex.Managers.Asset.loadAsync<Apex.Texture>(aoPaths[i], Apex.Const.ASSET_TYPE.TEXTURE));

    }

    let albedos = await Promise.all(albedoPromises);
    let normals = await Promise.all(normalPromises);
    let metals = await Promise.all(metalPromises);
    let roughnesss = await Promise.all(roughnesPromises);
    let aos = await Promise.all(aoPromises);

    let scene = new Apex.Scene("PBRTexture");
    scene.env.skybox.material = new Apex.SkyBoxMaterial({ mainTexture: hdrTexture });

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    let camera = cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    let wander = cameraGo.addComponent<Apex.Wander>(Apex.Wander);
    wander.moveSpeed = 5;
    camera.enabledHDR = true;
    camera.toneMapping = Apex.Const.TONE_MAPPING.ACES_FILMIC;
    cameraGo.transform.position = new Apex.Vector3(0, 0, 3);
    scene.addChild(cameraGo);

    //点光源
    let lightGo = new Apex.GameObject("Point Light");
    let light = lightGo.addComponent<Apex.Light>(Apex.Light);
    light.type = Apex.Const.LIGHT_TYPE.Point;
    light.color.set(50, 50, 50);
    lightGo.transform.position = new Apex.Vector3(5, 5, 5);
    scene.addChild(lightGo);

    let space = 1.5;
    let x = -(albedos.length - 1) * space * 0.5;
    let go: Apex.GameObject;
    let material: Apex.PBRMaterial;
    for (let i = 0, il = albedos.length; i < il; i++, x += space) {

        material = new Apex.PBRMaterial({
            albedoTexture: albedos[i],
            normalTexture: normals[i],
            metallicTexture: metals[i],
            roughnessTexture: roughnesss[i],
            aoTexture: aos[i]
        });

        go = Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.SPHERE, `Sphere-${i}`);
        go.getComponent<Apex.MeshRenderer>(Apex.MeshRenderer).material = material;

        go.transform.position = new Apex.Vector3(x, 0, 0);
        scene.addChild(go);

    }

    return scene;

}