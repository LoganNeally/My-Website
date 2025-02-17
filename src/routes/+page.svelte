<script>
	import Spotlight from '$lib/components/Spotlight.svelte';
	import RetroGrid from '$lib/components/RetroGrid.svelte';
</script>

<div class="flex flex-1">
	<div
		class="h-[30rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
	>
		<!--Spotlight-->

		<div>
			<span></span>

			<RetroGrid />
		</div>

		<Spotlight class="-top-40 left-0 md:left-40 md:-top-8" fill="white" />
		<div class=" max-w-7xl mx-auto relative z-10 w-full p-4">
			<h6
				class="text-4xl md:text-5xl text-center bg-clip-text text-primary-100 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
			>
				“Sometimes it's not enough to know what things mean, sometimes you have to know what things
				don't mean.” <br /> -Bob Dylan
			</h6>
		</div>
	</div>
</div>
