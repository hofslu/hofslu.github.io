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

const scene = new THREE.Scene();
// camera
const camera = new THREE.Camera();
scene.add(camera)

// renderer
const renderer = new THREE.WebGLRenderer({ 
    alpha: true
 });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



// AR-Toolkit:: Source
var ArToolkitSource = new THREEx.ArToolkitSource({
    sourceType: "webcam",
});
ArToolkitSource.init(function() {
    setTimeout(function(){
        ArToolkitSource.onResizeElement();
        ArToolkitSource.copyElementSizeTo();
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
    patternUrl: './assets/marker/TU-marker.patt',
    changeMatrixMode: 'cameraTransformMatrix'
})
scene.visible = false

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshNormalMaterial( { 
    color: 0x00ff00 
} );
const cube = new THREE.Mesh( geometry, material );
cube.position.y = geometry.parameters.height/2;
scene.add( cube );



camera.position.z = 0;

function animate() {
    requestAnimationFrame( animate );
    ArToolkitContext.update(ArToolkitSource.domElement);
    scene.visible = camera.visible;
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render( scene, camera );
};

animate();