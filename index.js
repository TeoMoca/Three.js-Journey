console.log("welcome to my Three.js journey");

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);
const camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  1,
  5000
);

const light = new THREE.SpotLight(0xffffff);
light.position.set(5, 5, 5);
scene.add(light);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight, true);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
console.log(loader);
loader.load("scene.gltf", function (gltf) {
  const textureLoader = new THREE.TextureLoader();

  const texture1 = textureLoader.load("textures/Scene_-_Root_baseColor.png");
  const texture3 = textureLoader.load(
    "textures/Scene_-_Root_metallicRoughness.png"
  );
  const texture2 = textureLoader.load("textures/Scene_-_Root_normal.png");
  const texture4 = textureLoader.load("textures/Tyres_baseColor.png");
  console.log(texture1, texture2, texture3, texture4);
  gltf.scene.material = new THREE.MeshPhongMaterial({ map: texture4 });
  scene.add(gltf.scene);
  renderer.render(scene, camera);
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    gltf.scene.rotation.y += 0.01;
  }

  animate();
});

//const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 10);
//const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//scene.add(cube);
//
//const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
//const points = [];
//points.push(new THREE.Vector3(0, 1, 1));
//points.push(new THREE.Vector3(0, 2, 0));
//points.push(new THREE.Vector3(1, 2, 0));
//
//const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
//const line = new THREE.Line(lineGeometry, lineMaterial);
//scene.add(line);

camera.position.z = 8;
camera.position.y = 10;
camera.lookAt(0, 0, 0);
