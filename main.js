import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as lilGui from "lil-gui"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.position.y=2;

scene.add(camera);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;

const Config = new lilGui.GUI();

const gltfLoader= new GLTFLoader();
gltfLoader.load("public/scene.gltf",(gltf)=>{
  const model = gltf.scene;
  scene.add(model);
})

const animate = () => {
  renderer.render(scene, camera);
  controls.update();
  window.requestAnimationFrame(animate);
}

animate();




