import logo from './logo.svg';
import './App.css';
import store from './models/store_c.glb'
import floor from './models/ground.glb'
import table from './models/table_group.glb'
import sky from './models/sky.jpg'
import glass from './models/glass.glb'
import lights from './models/lights.glb'

function App() {
  return (
    <div className="App">
       
       <a-scene>
       <a-sky src={sky}></a-sky>
       <a-entity camera="fov: 50" position="-1.87 2.00268 0.753" wasd-controls="" rotation="-15.584 -275.936 0" look-controls="" aframe-injected="" data-aframe-inspector-original-camera=""></a-entity>
        <a-entity gltf-model={store}></a-entity>
        <a-entity gltf-model={floor} shadow="cast: false"></a-entity>
        <a-entity gltf-model={table} shadow="receive: false"></a-entity>
        <a-entity gltf-model={glass}></a-entity>
        <a-entity gltf-model={lights}></a-entity>

        <a-entity light="intensity: 0.6; castShadow: true; penumbra: 0.36; type: spot" position="0.174 2.892 -5.398" data-aframe-default-light="" aframe-injected="" rotation="-90 0 0"></a-entity>
        <a-entity light="intensity: 0.6; castShadow: true; type: spot; penumbra: 0.22" position="1.95731 2.57581 -5.09765" data-aframe-default-light="" aframe-injected="" rotation="-90 0 0"></a-entity>
        <a-entity light="intensity: 0.6; castShadow: true; type: spot; penumbra: 0.22" position="0.50658 3.19049 3.15163" data-aframe-default-light="" aframe-injected="" rotation="-90 0 0"></a-entity>
        <a-entity light="intensity: 0.71; castShadow: true; type: point; penumbra: 0.22; groundColor: #ada8a8" position="4.80405 3.19049 -1.27415" data-aframe-default-light="" aframe-injected="" rotation="-25.203267492214653 -90.00021045914971 90.00078341694484"></a-entity>
        {/* <a-entity light="color: #BBB; type: ambient" data-aframe-default-light="" aframe-injected=""></a-entity> */}
        {/* <a-entity light="intensity: 0.6; castShadow: true" position="-0.5 1 1" data-aframe-default-light="" aframe-injected=""></a-entity> */}

        {/* <a-entity light="intensity: 0.6; castShadow: true; penumbra: 0.36; type: spot" position="0.17421 2.89155 -5.398" data-aframe-default-light="" aframe-injected="" rotation="-90 0 0"></a-entity>
        <a-entity light="intensity: 0.6; castShadow: true; type: spot; penumbra: 0.22" position="1.95731 2.57581 -5.09765" data-aframe-default-light="" aframe-injected="" rotation="-90 0 0"></a-entity>
        <a-entity light="intensity: 0.6; castShadow: true; type: spot; penumbra: 0.22" position="0.50658 3.19049 3.15163" data-aframe-default-light="" aframe-injected="" rotation="-90 0 0"></a-entity>
        <a-entity light="intensity: 0.71; castShadow: true; type: point; penumbra: 0.22; groundColor: #ada8a8" position="4.80405 3.19049 -1.27415" data-aframe-default-light="" aframe-injected="" rotation="-25.203267492214653 -90.00021045914971 90.00078341694484"></a-entity> */}
       </a-scene>
    </div>
  );
}

export default App;
