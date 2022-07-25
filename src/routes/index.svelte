<script>
	import { fade } from 'svelte/transition';

	let picShow = true;

	setInterval(() => {
		picShow = !picShow;
	}, 2500);
</script>

<svelte:head>
	<title>Keerthi Vasan</title>
</svelte:head>

<main class="px-4 flex gap-2">
	<section class="w-max justify-start items-start m-20 flex-col flex">
		<div>
			<div
				class="brand-red-bg hover-card rounded-lg absolute rotate-12 expand-on-hover"
				style="left: -12px; top: -12px; width: 100px;height: 100px; z-index: 3;"
			/>
			<h1 class="text-9xl">Keerthi <br /> Vasan</h1>
			<div
				class="rounded-xl"
				style="height: 25px; background: linear-gradient(to right, var(--brand-red), var(--brand-blue));"
			/>
		</div>
		<a
			href="#contact"
			class="brand-blue-bg px-6 py-3 max-w-fit hover:scale-110 transition-all ease-linear rounded-lg my-10"
			>Contact Me</a
		>
	</section>
</main>

<style>
	.expand-on-hover {
		@apply transition-all ease-linear hover:scale-125;
	}

	.hover-card:hover ~ h1 {
		background: -webkit-linear-gradient(var(--brand-red), var(--brand-blue));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	h1 {
		font-family: 'League Spartan';
		font-weight: 600;
	}
</style>
