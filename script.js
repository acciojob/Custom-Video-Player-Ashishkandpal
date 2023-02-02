/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


//create the functions
function togglePlay(params) {
	if(video.paused) {
		video.play();
	}
	else{
		vidoe.pause();
	}
}

//add event listeners
video.addEventListeners("click", togglePlay);