import React from 'react'


import sky from '../Images/sky1.jpg'
import sun from '../Images/sun.jpeg'
import mercury from '../Images/mercury.png'
import venus from '../Images/venus.jpeg'
import earth from '../Images/earth.jpeg'
import mars from '../Images/mars.jpeg'
import jupiter from '../Images/jupiter.jpeg'
import saturn from '../Images/saturn.jpeg'
import uranus from '../Images/uranus.jpeg'
import neptune from '../Images/neptune.jpeg'
// import pluto from '../Images/pluto.webp'





export default function SolarSystem() {
return (
<a-scene>

<a-mixin id="rotation" animation="property: rotation; loop: true; from:  0 0 0; to: 0 360 0; dur: 20000; easing: linear;"></a-mixin>
{/* 
<!-- here is a "mixin" that we can apply to a container to make the
planet inside it orbit --> */}

<a-mixin id="orbit" animation="property: rotation; loop: true; to: 0 360 0; dur: 40000; easing: linear;"></a-mixin>


    <a-sphere id="Sun" position="0 1.25 0" radius="6" src={sun}
        animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear;">
    </a-sphere>

    <a-entity mixin="orbit" animation="dur: 20000;" >
        <a-sphere id="Mercury" position="8 1.25 0" radius="0.5" src={mercury} mixin="rotation"></a-sphere>
    </a-entity>

    <a-entity mixin="orbit" animation="dur: 100000;" >
    <a-sphere id="Venus" position="11 1.25 0" radius="1" src={venus} mixin="rotation" ></a-sphere>
        </a-entity>

    <a-entity  mixin="orbit" animation="dur: 40000;" >    
    <a-sphere id="Earth" position="15 1.25 0" radius="1.5" src={earth} mixin="rotation" ></a-sphere>
    </a-entity>  

    <a-entity mixin="orbit" animation="dur: 60000;" >  
    <a-sphere id="Mars" position="19 1.25 0" radius="1.5" src={mars} mixin="rotation" ></a-sphere>
        </a-entity>

    <a-entity mixin="orbit" animation="dur: 80000;" >    
    <a-sphere id="Jupiter" position="-24 1.25 0" radius="2.2" src={jupiter} mixin="rotation" ></a-sphere>
        </a-entity>

    <a-entity mixin="orbit" animation="dur: 100000;" >
    <a-sphere id="Saturn" position="35 1.25 0" radius="3" src={saturn} mixin="rotation" >
        <a-circle color="#CCC" radius="5" rotation="-90 0 0"></a-circle>
    </a-sphere>
    </a-entity>

    <a-entity mixin="orbit" animation="dur: 120000;" >
    <a-sphere id="Uranus" position="-43 1.25 0" radius="1" src={uranus} mixin="rotation" ></a-sphere>
        </a-entity>

    <a-entity mixin="orbit" animation="dur: 140000;" >    
    <a-sphere id="Neptune" position="48 1.25 0" radius="1.25" src={neptune} mixin="rotation" ></a-sphere>
        </a-entity>
    
{/*     <a-entity mixin="orbit" animation="dur: 160000;" >  
    <a-sphere id="Pluto" position="-55 1.25 0" radius="0.5" src={pluto} mixin="rotation" ></a-sphere>
        </a-entity>   */}








    <a-sky src={sky}></a-sky>
    <a-camera position="0 7 30" look-controls-enabled="true"></a-camera>
    <a-light type="ambient" intensity="2.0" color="#BBB" distance="30"></a-light>

</a-scene>
)
}
