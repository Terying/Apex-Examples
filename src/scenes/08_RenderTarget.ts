import { SurroundMotion } from "../components/SurroundMotion";

//渲染目标对象
export function RenderTarget(): Apex.Scene {

    let scene = new Apex.Scene("RenderTarget");
    scene.env.skybox.material = new Apex.SkySphereMaterial();

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    let camera = cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    camera.enabledHDR = true;
    cameraGo.transform.position = new Apex.Vector3(0, 0, 5);
    scene.addChild(cameraGo);

    //点光源
    let lightGo = new Apex.GameObject("Point Light");
    let light = lightGo.addComponent<Apex.Light>(Apex.Light);
    light.type = Apex.Const.LIGHT_TYPE.Point;
    light.color.set(25, 25, 25);
    lightGo.transform.position = new Apex.Vector3(0, 2, 0);
    scene.addChild(lightGo);

    //faces
    let size = 5, halfSize = size * 0.5;
    let faceMesh = Apex.Utils.Mesh.createQuad("Z", 1, 0, size, size);
    let position = new Apex.Vector3();
    let color = new Apex.Color();

    //up
    position.set(0, halfSize, 0);
    color.set(1, 1, 1);
    let upFace = createFace(faceMesh, new Apex.PBRMaterial({ albedo: color }));
    upFace.transform.applyRotateX(Math.PI * 0.5, true);
    upFace.transform.position = position;
    scene.addChild(upFace);

    //down
    position.set(0, -halfSize, 0);
    color.set(1, 1, 1);
    let downFace = createFace(faceMesh, new Apex.PBRMaterial({ albedo: color }));
    downFace.transform.applyRotateX(-Math.PI * 0.5, true);
    downFace.transform.position = position;
    scene.addChild(downFace);

    //left
    position.set(-halfSize, 0, 0);
    color.set(0.5, 0, 0);
    let leftFace = createFace(faceMesh, new Apex.PBRMaterial({ albedo: color }));
    leftFace.transform.applyRotateY(Math.PI * 0.5, true);
    leftFace.transform.position = position;
    scene.addChild(leftFace);

    //right
    position.set(halfSize, 0, 0);
    color.set(0, 0.5, 0);
    let rightFace = createFace(faceMesh, new Apex.PBRMaterial({ albedo: color }));
    rightFace.transform.applyRotateY(-Math.PI * 0.5, true);
    rightFace.transform.position = position;
    scene.addChild(rightFace);

    //front
    position.set(0, 0, halfSize);
    color.set(0, 0, 0.5);
    let frontFace = createFace(faceMesh, new Apex.PBRMaterial({ albedo: color }));
    frontFace.transform.applyRotateY(Math.PI, true);
    frontFace.transform.position = position;
    scene.addChild(frontFace);

    //back
    position.set(0, 0, -halfSize);
    let backFacematerial = new Apex.UnlitMaterial();
    let backFace = createFace(faceMesh, backFacematerial);
    backFace.transform.applyRotateY(Math.PI, true);
    backFace.transform.position = position;
    backFace.layer = 2;
    backFacematerial.cullFace = Apex.Const.GL_CULL_FACE.FRONT;
    scene.addChild(backFace);

    //back camera
    let backCameraGo = new Apex.GameObject("backCameraGo");
    let backCamera = backCameraGo.addComponent<Apex.Camera>(Apex.Camera);
    backCamera.depth = -1;
    backCamera.fov = 90;
    backCamera.aspect = 1;
    backCamera.cullingLayers = 2;
    backCamera.renderTarget = new Apex.RenderTarget({ width: 512, height: 512, autoUpdate: true });
    backCameraGo.transform.localPosition = new Apex.Vector3(0, 0, -halfSize);
    backFacematerial.mainTexture = backCamera.renderTarget;
    backFace.addChild(backCameraGo, false);

    //torus knot
    let torusKnot = Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.TORUS_KNOT, "TorusKnot");
    let motion = torusKnot.addComponent<SurroundMotion>(SurroundMotion);
    torusKnot.transform.position = new Apex.Vector3(0, -1.5, 0);
    motion.rotateSpeed = new Apex.Vector3(0, 0, 1);
    scene.addChild(torusKnot);

    //surround target
    let target = new Apex.GameObject("Surround Target");
    scene.addChild(target);
    //cube1
    let cube1 = Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.CUBE, "Cube 1");
    motion = cube1.addComponent<SurroundMotion>(SurroundMotion);
    motion.targetTr = target.transform;
    motion.surroundAxis = new Apex.Vector3(1, 1, 0).normalize();
    motion.surroundRadius = 2;
    cube1.transform.scale = new Apex.Vector3(0.3, 0.3, 0.3);
    scene.addChild(cube1);

    //cube2
    let cube2 = Apex.GameObject.createPrimitive(Apex.Const.PRIMITIVE_TYPE.CUBE, "Cube 2");
    motion = cube2.addComponent<SurroundMotion>(SurroundMotion);
    motion.targetTr = target.transform;
    motion.surroundAxis = new Apex.Vector3(-1, 1, 0).normalize();
    motion.surroundRadius = 2;
    cube2.transform.scale = new Apex.Vector3(0.3, 0.3, 0.3);
    scene.addChild(cube2);

    return scene;

}

function createFace(faceMesh: Apex.Mesh, material: Apex.Material): Apex.GameObject {

    let face = new Apex.GameObject("Face");
    let meshFilter = face.addComponent<Apex.MeshFilter>(Apex.MeshFilter);
    let meshRenderer = face.addComponent<Apex.MeshRenderer>(Apex.MeshRenderer);
    meshFilter.mesh = faceMesh;
    meshRenderer.material = material;

    return face;

}