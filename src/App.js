import './App.css';
import store from './models/Store_with_frame3.glb'
import floor from './models/ground.glb'
import table from './models/table_group_updated.glb'
import sky from './models/sky.jpg'
import glass from './models/glass-wall.glb'
import lights from './models/lights.glb'
import s23u from './models/s23_ultra.gltf'
import door from './models/glass-door.glb'
import reception from './models/receptionCounter-3.glb'
import airpods from './models/AirpodsMax_inc5_withStand.glb'
import comparison from './models/ComparisonModal2.png'
import watch from './models/Apple_watch_mod3_alpine_withstand.glb'
import { useEffect, useState } from 'react';
import circle from './models/crcle.glb'
import watchoverlay from './models/apple_watch8_overlay.png'
import airpods_overlay from './models/airpodsMax_overlay_desc.png'

function App() {
  const[S22Comparison, setS22Comparison] = useState(false);
  const[watchModal, setWatchModal] = useState(false);
  const[doorOpen,setDoorOpen] = useState(false)
  const[airpodsOverlay,setAirpodsOverlay] = useState(false)
  const[currentPos,setCurrentPos] = useState("-19.181 2.003 -0.532");

  useEffect(()=>{
    window.addEventListener('showS22Modal',()=>{
      setS22Comparison(!S22Comparison)
      console.log("event received")
    })
    window.addEventListener('showWatchModal',()=>{
      setWatchModal(!watchModal)
    })
    window.addEventListener('showAirpodsModal',()=>{
      setAirpodsOverlay(!airpodsOverlay)
    })
    window.addEventListener('onStep1',(e)=>{
      setDoorOpen(true);
      setCurrentPos(e.detail.position)
    })
    window.addEventListener('onStep2',(e)=>{
      setDoorOpen(false);
      setCurrentPos(e.detail.position)
    })
    window.addEventListener('onStep3',(e)=>{
      setCurrentPos(e.detail.position)
    })
    window.addEventListener('onStep4',(e)=>{
      setCurrentPos(e.detail.position)
    })
  })
  return (
    <div className="App" style={{position: 'absolute', height: 100, width: 100}}>
       <a-scene id="ascene" loading-screen="dotsColor: red; backgroundColor: black" vr-mode-ui="cardboardModeEnabled:true" scene-loaded>
       <a-sky src={sky}></a-sky>
       {/* <a-entity camera="fov: 50" position="-19.181 2.003 -0.532" rotation="0 -90.746 0" look-controls="" wasd-controls="" aframe-injected="" data-aframe-inspector-original-camera=""><a-entity raycaster="" cursor="fuse: true; fuseTimeout: 500" position="0 0 -1" geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.02" material="color: black; shader: flat"></a-entity></a-entity> */}
       <a-entity camera="fov: 50" animation={`property: position; to: ${currentPos}; dur: 1200; easing: linear; loop: false`} position="-19.181 2.003 -0.532" look-controls="pointerLockEnabled: false" wasd-controls="" rotation="0 -90.746 0" aframe-injected="" data-aframe-inspector-original-camera="">
          <a-entity cursor="fuse: true; fuseTimeout: 500"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.02"
            material="color: black; shader: flat">
          </a-entity>
        </a-entity>
        <a-entity gltf-model={store}></a-entity>
        <a-entity gltf-model={floor} clickhandler={"txt:floor"} shadow="cast: false"></a-entity>
        <a-entity gltf-model={table} scale="1 1.1 1" shadow="receive: false"></a-entity>
        <a-entity gltf-model={glass}></a-entity>
        <a-entity gltf-model={lights}></a-entity>
        <a-entity gltf-model={s23u} clickhandler={"txt:s22modal"} scale="1.6 1.6 1.6" rotation="-179.9998479605043 180 -179.9998479605043" shadow="receive: false" position="0.853 1.161 -5.175"></a-entity>
        <a-entity gltf-model={door} position={""} animation={doorOpen ?"property: position; to: 0 0 -1.590; dur: 2000; easing: linear; loop: false" :"property: position; to: 0 0 0; dur: 2000; easing: linear; loop: false"}></a-entity>
        <a-entity gltf-model={door} position={"0 0 1.655"} animation={doorOpen ?"property: position; to: 0 0 3.301; dur: 2000; easing: linear; loop: false":"property: position; to: 0 0 1.655; dur: 2000; easing: linear; loop: false"}></a-entity>
        <a-entity gltf-model={reception} position="0 0 -3.487"></a-entity>
        <a-entity gltf-model={airpods} clickhandler={"txt:airpodsmodal"} position="1.289 1.443 3.997" rotation="0 180.000 0" scale="0.100 0.100 0.100"></a-entity>
        <a-entity gltf-model={watch} clickhandler={"txt:watchmodal"} position="0.589 1.219 3.997" rotation="0 90.000 0" scale="0.15 0.15 0.15"></a-entity>
        <a-entity gltf-model={circle} clickhandler={"txt:step1"} position="-15.201 0.083 -0.590" scale="0.5 0.5 0.5"></a-entity>
        <a-entity gltf-model={circle} clickhandler={"txt:step2"} position="-9.999 0.083 -0.590" scale="0.5 0.5 0.5"></a-entity>
        <a-entity gltf-model={circle} clickhandler={"txt:step3"} position="0.733 0.083 1.415" scale="0.5 0.5 0.5"></a-entity>
        <a-entity gltf-model={circle} clickhandler={"txt:step4"} position="0.733 0.083 -2.921" scale="0.5 0.5 0.5"></a-entity>
        <a-image delay={'300'} visible={S22Comparison} src={comparison} position="0 1.693 -4.940" rotation="0 0 0"></a-image>
        <a-image delay={'300'} visible={watchModal} src={watchoverlay} scale="1 1.280 1" position="-0.476 2.216 3.751" rotation="0 180.000 0"></a-image>
        <a-image delay={'300'} visible={airpodsOverlay} src={airpods_overlay} scale="1 1 1" position="1.997 2.216 3.751" rotation="0 180.000 0"></a-image>

        <a-entity light="intensity: 0.6; castShadow: true; penumbra: 0.36; type: spot" position="0.174 2.892 -5.398" data-aframe-default-light="" aframe-injected="" rotation="-90 0 0"></a-entity>
        <a-entity light="intensity: 0.6; castShadow: true; type: spot; penumbra: 0.22" position="1.95731 2.57581 -5.09765" data-aframe-default-light="" aframe-injected="" rotation="-90 0 0"></a-entity>
        <a-entity light="intensity: 0.6; castShadow: true; type: spot; penumbra: 0.22" position="0.50658 3.19049 3.15163" data-aframe-default-light="" aframe-injected="" rotation="-90 0 0"></a-entity>
        <a-entity light="intensity: 0.71; castShadow: true; type: point; penumbra: 0.22; groundColor: #ada8a8" position="4.80405 3.19049 -1.27415" data-aframe-default-light="" aframe-injected="" rotation="-25.203267492214653 -90.00021045914971 90.00078341694484"></a-entity>
       </a-scene>
    </div>
  );
}

export default App;
