// ---------------------------------------------------------------------------------------------------
//                          _ o___________________________________________________q        _ o________
// ___.___.__.___.__p   ,__' /               THREE.JS scene                      /|    ,__' /    
// __/___/__/___/_q/|   \_  º---------------------------------------------------P/#    \_  º----------
// -˚---°---˚--˚--|/˚     ˚\|----- TU-Wien-logo-augmentation -------------------|/       ˚\|----------
// _/----\_/----\_/         o--------------------‚------------------------------'          o----------
// ---------------------------------------------------------------------------------------------------
// 
//  
// 
// 
// 
// 
// 
// 
// 
// 
// ---------------------------------------------------------------------------------------------------

//                                         _ o___________________________________________________q  
//                                     ,__' /                                                   /|  
//                                     \_  º---------------------------------------------------P/#  
//                                       ˚\|----- Initialization ------------------------------|/   
//                                         o--------------------‚------------------------------'    

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const renderer_seet = document.getElementById("augmentation_canvas")
// 
const scene = new THREE.Scene();
// camera
const camera = new THREE.Camera();
scene.add(camera)
camera.position.z = 0;

// renderer
const renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true
 });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer_seet.appendChild( renderer.domElement );

// controls


//       _ o___________________________________________________q  
//   ,__' /                                                   /|  
//   \_  º---------------------------------------------------P/#  
//     ˚\|----- Marker tracking -----------------------------|/   
//       o--------------------‚------------------------------'    
// AR-Toolkit:: Source
var ArToolkitSource = new THREEx.ArToolkitSource({
    sourceType: "webcam",
});
ArToolkitSource.init(function() {
    setTimeout(function(){
        onResize();

    }, 2000)
})
// AR-Toolkit:: Context
var ArToolkitContext = new THREEx.ArToolkitContext({
    detectionMode: 'color_and_matrix',
    cameraParametersUrl:  './static/camera_para.dat',

})
ArToolkitContext.init(function() {
    camera.projectionMatrix.copy(ArToolkitContext.getProjectionMatrix());
})
// AR-Toolkit:: MarkerControls
var ArMarkerControls = new THREEx.ArMarkerControls(ArToolkitContext, camera, {
    type: 'pattern',
    patternUrl: './assets/marker/pattern-basic.patt',
    changeMatrixMode: 'cameraTransformMatrix'
})
scene.visible = false

// handle resize
window.addEventListener('resize', function(){
    onResize();
    console.log("resized")
})

function onResize(){
    ArToolkitSource.onResizeElement()
    ArToolkitSource.copyElementSizeTo(renderer.domElement)
    if( ArToolkitContext.arController !== null ){
        arToolkitSource.copyElementSizeTo(ArToolkitContext.arController.canvas)
    }
}


//       _ o___________________________________________________q  
//   ,__' /                                                   /|  
//   \_  º---------------------------------------------------P/#  
//     ˚\|----- NFT Natural Feature Tracking ----------------|/   
//       o--------------------‚------------------------------'     





//       _ o___________________________________________________q  
//   ,__' /                                                   /|  
//   \_  º---------------------------------------------------P/#  
//     ˚\|----- basic Geometries ------------------------------|/   
//       o--------------------‚------------------------------'    
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshNormalMaterial( { 
    color: 0x00ff00,
    opacity: 0.5
} );
const cube = new THREE.Mesh( geometry, material );
cube.position.y = geometry.parameters.height/2;
scene.add( cube );


//       _ o___________________________________________________q  
//   ,__' /                                                   /|  
//   \_  º---------------------------------------------------P/#  
//     ˚\|----- Model Loading -------------------------------|/   
//       o--------------------‚------------------------------'    

// var loader = new GTLFLoader

//       _ o___________________________________________________q  
//   ,__' /                                                   /|  
//   \_  º---------------------------------------------------P/#  
//     ˚\|----- Model Animation -----------------------------|/   
//       o--------------------‚------------------------------'    




       
//  ___._______.___.___.___.__.___.__p  
//  __/__NFT_Collection___/__/___/_q/|  
//  -˚-------˚---˚---˚---°---˚--˚--|/˚  
//  \________/----\__/----\_/----\_/    

// create connect button
// get contract???
// connect to MetaMask (wallet)
// create collect button
// transfer from Server to wallet


//       _ o___________________________________________________q  
//   ,__' /                                                   /|  
//   \_  º---------------------------------------------------P/#  
//     ˚\|----- Animation -----------------------------------|/   
//       o--------------------‚------------------------------'    
function animate() {
    requestAnimationFrame( animate );
    ArToolkitContext.update(ArToolkitSource.domElement);
    scene.visible = camera.visible;

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render( scene, camera );
};

animate();