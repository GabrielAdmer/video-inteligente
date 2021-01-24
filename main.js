import { observerVideo } from './observer.js';

const $video = document.querySelector('video[data-video]');

const $play = document.getElementById('play');
const $muted = document.getElementById('muted');
const $increaseVolumen = document.getElementById('volumen');
const $decreaseVolumen = document.getElementById('volumen2');

observerVideo($video);

$play.addEventListener('click', () => {
	startPlayAndPause();
	console.log($video.volume);
});

$muted.addEventListener('click', () => {
	mutedAndOnMuted();
});

$increaseVolumen.addEventListener('click', () => {
	startIncreaseVolumen();
});

$decreaseVolumen.addEventListener('click', () => {
	startDecreaseVolumen();
});

function startPlayAndPause() {
	if ($video.paused) {
		$video.play();
	} else {
		$video.pause();
	}
}

function mutedAndOnMuted() {
	if (!$video.muted) {
		$video.muted = true;
	} else {
		$video.muted = false;
	}
}

function startIncreaseVolumen() {
	if ($video.volume >= 1) {
		return console.log('volumen maximo');
	}
	$video.volume = $video.volume + 0.1;
}

function startDecreaseVolumen() {
	console.log($video.volume);
	if ($video.volume <= 0) {
		return console.log('volumen minimo');
	}
	$video.volume = $video.volume - 0.1;
}

// $video.addEventListener('play', () => {
// 	alert('el video se reproducira');
// });
