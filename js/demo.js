var scene, camera, renderer, mesh; 
var crate;
var crate2, crateTexture2, crateNormalMap2, crateBumpMap2;
var crate3, crateTexture3;
var crate4, crateTexture4, crateNormalMap4, crateBumpMap4;
var keyboard = {};
var player = { height: 1.8, speed: 0.2, turnSpeed: Math.PI * 0.02 };
var meshFloor;
var USE_WIREFRAME = false;


function init(){
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, 
        window.innerWidth/window.innerHeight, 
        0.1, 
        1000
    );

    mesh = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1), 
        new THREE.MeshPhongMaterial({color: 0xff4444, wireframe: USE_WIREFRAME})
    );
    mesh.position.y += 3.5;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    scene.add(mesh);


    meshFloor = new THREE.Mesh(
        new THREE.PlaneGeometry(50,50,50,50), 
        new THREE.MeshPhongMaterial({color: 0xffffff, 
            wireframe: USE_WIREFRAME})
    );
    meshFloor.rotation.x -= Math.PI / 2; 
    meshFloor.receiveShadow = true;
    scene.add(meshFloor);

    camera.position.set(0, player.height, -5);
    camera.lookAt(new THREE.Vector3(0, player.height, 0));
    

    //aggiungere una luce ambientale a bassa intensità
    ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    //aggiungo un punto luce
    light = new THREE.PointLight(0xffffff, 0.8, 18)
    light.position.set(-3, 6, -3);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 25;
    scene.add(light);



    //creo un nuovo elemento, "crate" e lo aggiungo alla "scene"
    var textureLoader = new THREE.TextureLoader();
    crateTexture = textureLoader.load('../textures/crate1.jpg');
 
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(3, 3, 3),
        new THREE.MeshPhongMaterial({
            color: 0xffffff, 
            map:crateTexture,
        })
    );  
    scene.add(crate)  
    crate.position.set(6, 3/2, -4); 
    
    crate.receiveShadow = true;
    crate.castShadow = true;     



    //creo un nuovo elemento, "crate2" e lo aggiungo alla "scene"
    var textureLoader2 = new THREE.TextureLoader();
    crateTexture2 = textureLoader2.load('../textures/crate0/crate0_diffuse.png');
    crateNormalMap2 = textureLoader2.load('../textures/crate0/crate0_normal.png');
    crateBumpMap2 = textureLoader2.load('../textures/crate0/crate0_bump.png');
    
    
    crate2 = new THREE.Mesh(
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.MeshPhongMaterial({
            color: 0xffffff, 
            map:crateTexture2,
            bumpMap: crateBumpMap2,
            normalMap: crateNormalMap2,
        })
    );  
    scene.add(crate2)  
    crate2.position.set(7, 2/2, -8); 
  
    crate2.receiveShadow = true;
    crate2.castShadow = true;   


    //creo un nuovo elemento, "crate3" e lo aggiungo alla "scene"
    var textureLoader3 = new THREE.TextureLoader();
    crateTexture3 = textureLoader3.load('../textures/crate1.jpg');
 
    crate3 = new THREE.Mesh(
        new THREE.BoxGeometry(3, 3, 3),
        new THREE.MeshPhongMaterial({
            color: 0xffffff, 
            map:crateTexture,
        })
    );  
    scene.add(crate3)  
    crate3.position.set(9, 3/2, -12); 
    
    crate3.receiveShadow = true;
    crate3.castShadow = true; 


    //creo un nuovo elemento, "crate4" e lo aggiungo alla "scene"
    var textureLoader4 = new THREE.TextureLoader();
    crateTexture4 = textureLoader4.load('../textures/crate0/crate0_diffuse.png');
    crateNormalMap4 = textureLoader4.load('../textures/crate0/crate0_normal.png');
    crateBumpMap4 = textureLoader4.load('../textures/crate0/crate0_bump.png');
    
    
    crate4 = new THREE.Mesh(
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.MeshPhongMaterial({
            color: 0xffffff, 
            map:crateTexture4,
            bumpMap: crateBumpMap4,
            normalMap: crateNormalMap4,
        })
    );  
    scene.add(crate4)  
    crate4.position.set(6, 2/2, -15); 
  
    crate4.receiveShadow = true;
    crate4.castShadow = true;  



    //creo più di una cassa in un solo colpo
    for(var i = 0; i < 5; i++){
        var textureLoader = new THREE.TextureLoader();
            crateTexture = textureLoader.load('../textures/crate1.jpg');
        var crate = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2, 2),
            new THREE.MeshPhongMaterial({
                color: 0xffffff,
                map: crateTexture,
            })
        );  
        scene.add(crate)
        crate.position.set(14, 2/2, -(i*2.2));
        crate.receiveShadow = true;
        crate.castShadow = true;
    }

    for(i = 0; i < 3; i++){
        var textureLoader = new THREE.TextureLoader();
        crateTexture = textureLoader.load('../textures/crate0/crate0_diffuse.png');
        crateNormalMap = textureLoader.load('../textures/crate0/crate0_normal.png');
        crateBumpMap = textureLoader.load('../textures/crate0/crate0_bump.png');

        var crate = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 2.5, 2.5),
            new THREE.MeshPhongMaterial({
                color: 0xffffff,
                map: crateTexture,
                bumpMap: crateBumpMap,
                normalMap: crateNormalMap,
            })
        );
        scene.add(crate)
        crate.position.set(9.3, 3/2, (i*3));
    }

    for(var i = 0; i < 2; i++){
        var textureLoader = new THREE.TextureLoader();
            crateTexture = textureLoader.load('../textures/crate1.jpg');
        var crate = new THREE.Mesh(
            new THREE.BoxGeometry(2, 5, 2),
            new THREE.MeshPhongMaterial({
                color: 0xffffff,
                map: crateTexture,
            })
        );  
        scene.add(crate)
        crate.position.set(-14, 5/2, -(i*2.2));
        crate.receiveShadow = true;
        crate.castShadow = true;
    }

    for(i = 0; i < 4; i++){
        var textureLoader = new THREE.TextureLoader();
        crateTexture = textureLoader.load('../textures/crate0/crate0_diffuse.png');
        crateNormalMap = textureLoader.load('../textures/crate0/crate0_normal.png');
        crateBumpMap = textureLoader.load('../textures/crate0/crate0_bump.png');

        var crate = new THREE.Mesh(
            new THREE.BoxGeometry(4, 4, 4),
            new THREE.MeshPhongMaterial({
                color: 0xffffff,
                map: crateTexture,
                bumpMap: crateBumpMap,
                normalMap: crateNormalMap,
            })
        );
        scene.add(crate)
        crate.position.set(-19, 4/2, -(i*5));
    }
    
    

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    //attiviamo le ombre
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;
    
    document.body.appendChild(renderer.domElement);
    //animate();
}


function animate(){
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    //crate2.rotation.y += 0.01;

    //Creo i tasti direzionali WASD
    if(keyboard[87]){ // W key
		camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
		camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
	}
	if(keyboard[83]){ // S key
		camera.position.x += Math.sin(camera.rotation.y) * player.speed;
		camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
	}
	if(keyboard[65]){ // A key
		// Redirect motion by 90 degrees
		camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
		camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
	}
	if(keyboard[68]){ // D key
		camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
		camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
	}

    /*Gira la "camera" sull'asse Y quando i tasti direzionali sinistra
    o destra vengono premuti*/

    if(keyboard[37]){ // left arrow key
		camera.rotation.y -= player.turnSpeed;
	}
	if(keyboard[39]){ // right arrow key
		camera.rotation.y += player.turnSpeed;
	}
    renderer.render(scene, camera);
}


//window.onload = init;

function keyDown(event){ keyboard[event.keyCode] = true; }

function keyUp(event){ keyboard[event.keyCode] = false; }

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);


//Per far sì che lo scenario si adatti al ridimensionamento della finestra...
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);
init();
animate();