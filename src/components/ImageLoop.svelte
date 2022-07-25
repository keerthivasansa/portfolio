<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		window.onresize = () => {
			var imgWidth = Math.min(window.innerWidth, window.innerHeight);
			const photoDiv = document.getElementById('photo');
			if (!photoDiv) return;
			photoDiv.innerHTML = '';
			for (var i = 0; true; i++) {
				if (document.querySelectorAll('img').length * imgWidth < window.innerWidth * 2) {
					var img = new Image();
					img.src = 'https://picsum.photos/200';
					photoDiv.append(img);
					photoDiv.append(img);
					photoDiv.style.animation = `move ${
						document.querySelectorAll('img').length / 6
					}s linear infinite`;
				} else {
					return -1;
				}
			}
		};
	});
</script>

<main>
	<div id="prodotti">
		<div id="photo" class="photo">
			<img src="https://picsum.photos/200" alt="" />
			<img src="https://picsum.photos/200" alt="" />
			<img src="https://picsum.photos/200" alt="" />
			<img src="https://picsum.photos/200" alt="" />
			<img src="https://picsum.photos/200" alt="" />
			<img src="https://picsum.photos/200" alt="" />
		</div>
	</div>
</main>

<style>
	body {
		overflow: hidden;
		margin: 0px;
	}

	#prodotti {
		height: 350px;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.photo {
		display: flex;
		position: absolute;
		top: 0px;
		left: 0px;
		overflow: hidden;
		white-space: nowrap;
		animation: move 10s linear infinite;
		padding: 0.5vh;
		margin: 8px 0px 0px 0px;
	}

	.photo img {
		margin: 0 0.5em;
		height: calc(100vh - 16px);
	}

	@keyframes move {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-50%, 0);
		}
	}

	@media only screen and (orientation: portrait) {
		.photo img {
			margin-top: calc(50vh - 50vw);
			height: calc(100vw - 16px);
		}
	}
</style>
