import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as lilGui from "lil-gui"
import gsap from "gsap"


const scene = new THREE.Scene();

// Position initiale de la camera

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(7.66, 0.24, -1.66)
camera.rotation.set(-2.75, 1.33, 2.76)

// camera.position.z=5


scene.add(camera);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);

// controls.enableDamping = true;

let position = 0;


const gltfLoader = new GLTFLoader();
gltfLoader.load("public/scene.gltf", (gltf) => {
  console.log(gltf);
  const model = gltf.scene;
  scene.add(model);

  // Recupérer la position et la rotation de la camera
  // window.addEventListener("mouseup", function(){
  //   console.log(camera.position);
  //   console.log(camera.rotation);
  // })

  window.addEventListener("mouseup", function () {
    switch (position) {
      case 0:
        cameraMove(-0.49, 1.85, -2.08);
        cameraRotation(1.26, 1.51, -1.25)
        position = 1
        break;

      case 1:
        cameraMove(-1.52, 0.32, 2.19);
        cameraRotation(-3.13, 1.31, 3.13)
        position = 2
        break;

      case 2:
        cameraMove(0.10, 1.26, 0.09);
        cameraRotation(0.12, 0.57, 0.06)
        position = 3
        break;

      case 3:
        cameraMove(-3.34, 9.56, -1.40);
        cameraRotation(-1.57, -0.68, -1.57)
        position = 4
        break;
    }
  })


  // GUI pour recupérer les valeurs sur l'écran

  // const Config = new lilGui.GUI();

  // Config
  //   .add(model.position, 'x').name("model x Axis position").min(-100).max(100).stop(0.001)


  // Config.add(model.position, 'y').name('model y Axis position')
  // .min(-100)
  // .max(100)
  // .stop(0.001)

  // Config.add(model.position, 'z').name('model z Axis position')
  // .min(-100)
  // .max(100)
  // .stop(0.001)
})

function cameraMove(x, y, z) {
  gsap.to(camera.position, {
    x,
    y,
    z, duration: 3
  })
}

function cameraRotation(x, y, z) {
  gsap.to(camera.rotation, {
    x,
    y,
    z,
    duration: 3,
  })
}

const animate = () => {
  renderer.render(scene, camera);
  // controls.update();
  window.requestAnimationFrame(animate);
}

animate()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

})




