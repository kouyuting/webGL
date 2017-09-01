import THREE from "three.js";

window.onload = () => {
    let container = addContainer('No_1');
    initThreeJs(container);	  
}
const addContainer = (id, height=600, width=800) => {
    let container = document.getElementById(id);
    if(!container) {
        container = document.createElement('div');
        container.id = id;
        document.body.appendChild(container);
    }
    container.style.height = height + "px";
    container.style.width = width + "px";
    return container;
}

const initThreeJs = (container) => {
    // 创建Three.js渲染器，并添加到<div>标签中
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);
    // 创建Three.js场景
    let scene = new THREE.Scene();
    // 创建相机，并添加到场景中
    let camera = new THREE.PerspectiveCamera(45,
        container.offsetWidth / container.offsetHeight, 1, 4000);
    camera.position.set(0, 0, 3.3333);
    scene.add(camera);
    // 创建一个矩形几何体，并添加到场景中
    let geometry = new THREE.PlaneGeometry(1, 1);
    let mesh = new THREE.Mesh(geometry, 
        new THREE.MeshBasicMaterial());
    scene.add(mesh);
    // 渲染绘制
    renderer.render(scene, camera);
}
const initThreeJs_2 = (container) => {
    // 创建Three.js渲染器，并添加到<div>标签中
    let renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);
    // 创建Three.js场景
    let scene = new THREE.Scene();
    // 创建相机，并添加到场景中
    let camera = new THREE.PerspectiveCamera(45,
        container.offsetWidth / container.offsetHeight, 1, 4000);
    camera.position.set(0, 0, 3);

    // 创建一个平行光光源照射到物体上
    let light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(0,0,1);
    scene.add(light);

    // 创建一个接受光照并带有纹理映射的立方体，并添加到场景中
    // 首先，创建一个带纹理映射的立方体
    let mapUrl = "../images/test.png";
    let map = THREE.imageUtils.loadTexture(mapUrl);

    // 然后创建一个Phong材质来处理着色，并传递给纹理映射
    let material = new THREE.MeshPhongMaterial({map:map});

    // 创建一个立方体的几何体
    // scene.add(camera);
    let geometry = new THREE.CubeGeometry(1, 1, 1);

    // 将几何体和材质放到一个网格中
    let cube = new THREE.Mesh(geometry, material);

    // 
    scene.add(mesh);
    // 渲染绘制
    renderer.render(scene, camera);
}