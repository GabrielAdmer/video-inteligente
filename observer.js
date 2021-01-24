export function observerVideo($video) {
	console.log($video);
	function cb(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.play();
			} else {
				entry.target.pause();
			}

			//evento cuando cambias de pagina para que el video se pause o hague play
			window.addEventListener('visibilitychange', () =>
				document.visibilityState === 'visible' ? entry.target.play() : entry.target.pause(),
			);
		});
	}

	const observer = new IntersectionObserver(cb, { threshold: 0.5 });

	observer.observe($video);
}
