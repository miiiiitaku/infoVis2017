function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    var mesh;
   
   // document.write(volume.max_value);

    
    screen.init( volume, {
	width: window.innerWidth * 0.8,
        hight: window.innerHeight,
	targetDom: document.getElementById('display'),
        enableAutoResize: false
	
    });
    changeIso();
    screen.loop();

    function changeIso(){
	
    var bounds = Bounds( volume );
	screen.scene.add( bounds );

	var smin = volume.min_value;
	var smax = volume.max_value;
	var isovalue = KVS.Mix(smin,smax,0.5);

	var isosurface = new KVS.Isosurface();
	isosurface.setIsovalue(isovalue);

	document.getElementById('label').innerHTML = "Isovalue" + Math.round(isovalue);

	/*
	var line = KVS.ToTHREELine(box.exex(volume));
	meth = KVS.ToTHREEMesh(isosurface.exec(volume));
	screen.scene.add(line);
	screen.scene.add(mesh);
	*/

	document.getElementById('isovalue')
	    .addEventListener('mousemove',function(){
		var value = +document.getElementById('isovalue').value;
		var isovalue = KVS.Mix(smin,smax,value);
		document.getElementById('label').innerHTML = "Isovalue: " +Math.round(isovalue);
	    });

document.getElementById('change-isovalue-button')
            .addEventListener('click', function() {
                screen.scene.remove(mesh);
                var value = +document.getElementById('isovalue').value;
                var isovalue = KVS.Mix(smin, smax, value);
                var isosurface = new KVS.Isosurface();
                isosurface.setIsovalue(isovalue);
                mesh = KVS.ToTHREEMesh(isosurface.exec(volume));
                screen.scene.add(mesh);
	
            });
				       
	    

    var isovalue = 126;
    var surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );

    document.addEventListener('mousemove', function() {
            screen.light.position.copy(screen.camera.position);
        });

        window.addEventListener('resize', function() {
            screen.resize([
                window.innerWidth * 0.8,
                window.innerHeight
            ]);
        });

        screen.draw();

    

    }
}
