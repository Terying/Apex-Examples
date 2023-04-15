import { SurroundMotion } from "../components/SurroundMotion";

//自定义Mesh
export function CustomMesh(): Apex.Scene {

    let scene = new Apex.Scene("CustomMesh");
    scene.env.skybox.material = new Apex.SkySphereMaterial();

    //摄像机
    let cameraGo = new Apex.GameObject("Main Camera");
    cameraGo.addComponent<Apex.Camera>(Apex.Camera);
    cameraGo.transform.position = new Apex.Vector3(0, 0, 2);
    scene.addChild(cameraGo);

    //平行光
    let lightGo = new Apex.GameObject("Parallel Light");
    let light = lightGo.addComponent<Apex.Light>(Apex.Light);
    light.type = Apex.Const.LIGHT_TYPE.Parallel;
    light.intensity = 0.8;
    lightGo.transform.lookAt(new Apex.Vector3(-1, -1, -1), new Apex.Vector3(0, 1, 0));
    scene.addChild(lightGo);

    //Torus
    let torus = new Apex.GameObject("Torus");
    let mesh = createTorus();
    let meshFilter = torus.addComponent<Apex.MeshFilter>(Apex.MeshFilter);
    let meshRenderer = torus.addComponent<Apex.MeshRenderer>(Apex.MeshRenderer);
    let motion = torus.addComponent<SurroundMotion>(SurroundMotion);
    meshFilter.mesh = mesh;
    meshRenderer.material = new Apex.BlinnPhongMaterial();
    scene.addChild(torus);

    return scene;

}

/**
 *@description 创建圆环Mesh
 *@param radius     圆环半径
 *@param tube       管道半径
 *@param tSegment   圆环分段数
 *@param rSegment   管道分段数
 *@return 
 */
function createTorus(radius = 0.5, tube = 0.2, tSegment = 32, rSegment = 32): Apex.Mesh {

    tube = Math.min(tube, radius);
    tSegment = Math.max(3, Math.floor(tSegment));
    rSegment = Math.max(3, Math.floor(rSegment));

    let positions = new Array<number>();
    let normals = new Array<number>();
    let uvs = new Array<number>();
    let indexes = new Array<number>();
    let index = 0;

    let u = 0, v = 0,
        yaw = 0, pitch = 0,
        ySin: number, yCos: number, pSin: number, pCos: number;
    for (let t = 0; t <= tSegment; t++) {

        u = t / tSegment;
        yaw = -u * Math.PI * 2;
        ySin = Math.sin(yaw);
        yCos = Math.cos(yaw);
        for (let r = 0; r <= rSegment; r++) {

            v = r / rSegment;
            pitch = v * Math.PI * 2;
            pSin = Math.sin(pitch);
            pCos = Math.cos(pitch);

            //position
            positions.push(
                (radius + tube * pCos) * yCos,
                tube * pSin,
                (radius + tube * pCos) * ySin
            );

            //normal
            normals.push(pCos * yCos, pSin, pCos * ySin);

            //uv
            uvs.push(u, v);

            //indexes
            if (t !== tSegment && r !== rSegment) {

                indexes.push(index, index + rSegment + 2, index + 1);
                indexes.push(index, index + rSegment + 1, index + rSegment + 2);

            }

            index++;

        }

    }

    let vertexCount = uvs.length * 0.5;
    let attributes = [Apex.Const.ATTRIBUTE_MAP.a_Position, Apex.Const.ATTRIBUTE_MAP.a_Normal, Apex.Const.ATTRIBUTE_MAP.a_Uv];
    let vbuffer = new Apex.VertexBuffer(attributes, [3, 3, 2], vertexCount);
    vbuffer.setAttribute(attributes[0], positions);
    vbuffer.setAttribute(attributes[1], normals);
    vbuffer.setAttribute(attributes[2], uvs);

    let ibuffer: Apex.TBuffer<Uint8Array | Uint16Array>;
    if (index > 255) {

        ibuffer = new Apex.TBuffer(new Uint16Array(indexes), indexes.length, false);

    } else {

        ibuffer = new Apex.TBuffer(new Uint8Array(indexes), indexes.length, false);

    }

    let mesh = new Apex.Mesh(vbuffer, ibuffer);
    mesh.split();

    return mesh;

}