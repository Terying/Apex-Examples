- [Apex](#apex)
- [文档](#文档)
- [API](#api)
- [案例](#案例)
  - [程序化天空盒](#程序化天空盒)
  - [立方纹理天空盒](#立方纹理天空盒)
  - [组件的创建](#组件的创建)
  - [创建各种几何体](#创建各种几何体)
  - [几何体的UV显示](#几何体的uv显示)
  - [自定义Mesh](#自定义mesh)
  - [数据纹理](#数据纹理)
  - [渲染目标](#渲染目标)
  - [立方渲染目标](#立方渲染目标)
  - [加载HDR图片](#加载hdr图片)
  - [PBR材质](#pbr材质)
  - [PBR材质的几何体](#pbr材质的几何体)
  - [PBR材质纹理](#pbr材质纹理)
  - [加载GLTF](#加载gltf)
  - [加载GLTF2](#加载gltf2)
  - [高斯模糊（后处理）](#高斯模糊后处理)
  - [辉光效果（后处理）](#辉光效果后处理)
  - [自定义材质](#自定义材质)
  - [自定义后处理（反相）](#自定义后处理反相)
  - [黄昏时刻](#黄昏时刻)

# Apex
基于WebGL2开发的Web3D小引擎，主要用于在浏览器端做三维可视化，目前只支持WebGL2，后期会慢慢实现对WebGPU的支持。<br>
引擎参考了Unity的组件开发模式：即以节点和组件为核心，组件需要附加到节点上才能实现自身功能，同样的节点需要组合各种组件以拓展自身。<br>

目前引擎还处于初级开发阶段，主要实现了：
- 资源加载（文本、json、xml、二进制文件、图片、GLTF...）
- 脚本系统（脚本组件、脚本生命周期...）
- 输入系统（键盘、鼠标）
- 3D几何体（面片、平面、立方体、球体、圆柱体、胶囊体...）
- 3D数学（向量、矩阵、欧拉角、四元数、Curve...）
- 场景管理（场景树、场景树更新、节点标脏机制）
- 场景元素（天空盒、环境光、环境反射...）
- 材质系统（自定义材质、Unlit、BlinnPhong、PBR、后处理...）
- 纹理（2D、Cube、RT、CubeRT）
- 光源（平行光、点光源、聚光灯）
- 网格
- ...

文档和API手册很多都没有写，后面再慢慢补全了...

# 文档
[引擎文档](./doc/manual/Manual.MD)

# API
[引擎API](./doc/api/Api.MD)

# 案例
## 程序化天空盒
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E7%A8%8B%E5%BA%8F%E5%A4%A9%E7%A9%BA%E7%9B%92.png#pic_center)
## 立方纹理天空盒
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E7%AB%8B%E6%96%B9%E7%BA%B9%E7%90%86%E5%A4%A9%E7%A9%BA%E7%9B%92.png#pic_center)
## 组件的创建
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8%E6%A1%88%E4%BE%8B.png#pic_center)
## 创建各种几何体
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E5%90%84%E7%A7%8D%E5%87%A0%E4%BD%95%E4%BD%93.png#pic_center)
## 几何体的UV显示
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E5%90%84%E7%A7%8D%E5%87%A0%E4%BD%95%E4%BD%93UV%E5%B1%95%E7%A4%BA.png#pic_center)
## 自定义Mesh
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E8%87%AA%E5%AE%9A%E4%B9%89Mesh.png#pic_center)
## 数据纹理
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E6%95%B0%E6%8D%AE%E7%BA%B9%E7%90%86.png#pic_center)
## 渲染目标

https://user-images.githubusercontent.com/40977038/232704256-b177c9e6-f3d5-4fa9-b70a-79e4a9490204.mp4

## 立方渲染目标

https://user-images.githubusercontent.com/40977038/232704348-a7be3b40-db79-437e-8f61-7b5aabc7ca56.mp4

## 加载HDR图片
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E5%8A%A0%E8%BD%BDHDR%E6%96%87%E4%BB%B6.png#pic_center)
## PBR材质
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/PBR%E6%9D%90%E8%B4%A8.png#pic_center)
## PBR材质的几何体
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/PBR%E5%87%A0%E4%BD%95%E4%BD%93.png#pic_center)
## PBR材质纹理
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/PBR%E7%BA%B9%E7%90%86.png#pic_center)
## 加载GLTF
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E5%8A%A0%E8%BD%BDGLTF%E6%A8%A1%E5%9E%8B.png#pic_center)
## 加载GLTF2
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E5%8A%A0%E8%BD%BDGLTF2%E6%A8%A1%E5%9E%8B.png#pic_center)
## 高斯模糊（后处理）
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E9%AB%98%E6%96%AF%E6%A8%A1%E7%B3%8A.png#pic_center)
## 辉光效果（后处理）
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E8%BE%89%E5%85%89%E6%95%88%E6%9E%9C.png#pic_center)
## 自定义材质
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9D%90%E8%B4%A8.png#pic_center)
## 自定义后处理（反相）
![](https://g901-1259621134.cos.ap-guangzhou.myqcloud.com/Web/Apex-Examples/doc/res/image/%E5%90%8E%E6%9C%9F%E6%95%88%E6%9E%9C%EF%BC%88%E5%8F%8D%E7%9B%B8%EF%BC%89.png#pic_center)
## 黄昏时刻

https://user-images.githubusercontent.com/40977038/232704795-ab7b3046-dee3-4399-b8ee-6c07f292bcaa.mp4
