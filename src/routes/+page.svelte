<script>
	import BorderBeam from '$lib/components/BorderBeam.svelte';
	import { cn } from '$lib/utils';
	import Spotlight from '$lib/components/Spotlight.svelte';
	import RetroGrid from '$lib/components/RetroGrid.svelte';
</script>

<div
	class="h-[30rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
>
	<!--Spotlight-->

	<div>
		<span> </span>

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

<!--BorderBeam Card-->

<article
	class="flex max-w-xl flex-col items-start justify-between relative rounded-3xl p-7 border border-gray-700/70 bg-background"
>
	<BorderBeam size={150} duration={12} />
	<div class="flex items-center gap-x-4 text-xs">
		<time datetime="2/14/2025" class="text-gray-300">Feburary 14, 2025</time>
		<a
			href="https://svelte.dev/"
			class="relative z-10 rounded-full bg-transparent px-3 py-1.5 font-medium text-orange-400 border border-orange-300"
			>Svelte</a
		>
	</div>
	<div class="group relative">
		<h3 class="mt-3 text-lg font-semibold leading-6 text-orange-400">What is loganneallyit.net?</h3>

		<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-200">
			Placeholder <span class="text-orange-400 underline underline-offset-2">Placeholder</span>
			and <span class="text-orange-400 underline underline-offset-2">placeholder</span>
			Componenets.
		</p>
	</div>
	<div class="relative mt-8 flex items-center gap-x-4">
		<img
			src="https://avatars.githubusercontent.com/u/93428946?v=4"
			alt="bhide"
			class="h-10 w-10 rounded-full bg-gray-50"
		/>
		<div class="text-sm leading-5">
			<p class="font-semibold text-white">
				<a href="https://github.com/SikandarJODD">
					<span class="absolute inset-0"></span>
					Placeholder
				</a>
			</p>
			<p class="text-gray-500">Placeholder</p>
		</div>
	</div>
</article>
