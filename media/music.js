var playing = false;

function start(element) {
	var elem = document.getElementById(element);
	elem.play();
	
	if (playing) {
		elem.pause();
		playing = false;
		return 0;
	}
	
	playing = true;
}