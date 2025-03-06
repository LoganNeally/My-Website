<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		autoModeWatcher,
		type PopupSettings,
		popup,
		Drawer,
		initializeStores,
		getDrawerStore
	} from '@skeletonlabs/skeleton';
	initializeStores();
	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open();
	}

	import { Avatar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	let currentTile = 0;

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};

	// Checkout Installation Guide for more details regarding the following imports

	import RetroGrid from '$lib/components/RetroGrid.svelte';
</script>

<Drawer>
	<Navigation />
</Drawer>

<!-- App Shell -->
<AppShell slotSidebarLeft="w-0 md:w-52">
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>

	<svelte:fragment slot="header">
		<!-- App Bar -->

		<div>
			<AppBar
				gridColumns="grid-cols-3"
				slotDefault="place-self-center"
				slotTrail="place-content-end"
				class="shadow-lg"
			>
				<svelte:fragment slot="lead">
					<div class="flex flex-row">
						<button class="md:hidden btn btn-sm" on:click={drawerOpen}>
							<span>
								<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
									<rect width="100" height="20" />
									<rect y="30" width="100" height="20" />
									<rect y="60" width="100" height="20" />
								</svg>
							</span>
						</button>

						<strong class="hidden lg:block">loganneallyit.net</strong>
					</div>
				</svelte:fragment>

				<Avatar
					src="https://avatars.githubusercontent.com/u/168244652?v=4"
					width="w-20"
					rounded="rounded-full"
					border="border-4 border-surface-300-600-token hover:!border-primary-400"
					cursor="cursor-pointer"
				/>

				<svelte:fragment slot="trail">
					<div>
						<LightSwitch></LightSwitch>
					</div>
				</svelte:fragment>
			</AppBar>
		</div>
	</svelte:fragment>

	<!-- Page Route Content -->
	<div class="container p-10 mx-auto">
		<slot />
	</div>

	<svelte:fragment slot="pageFooter">
		<div class="flex flex-1">
			<div
				class="h-[20rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden"
			>
				<div>
					<RetroGrid />
				</div>

				<div class="max-w-7xl mx-auto relative z-10 w-full">
					<h6 class="text-4xl md:text-5xl text-center">
						“Sometimes it's not enough to know what things mean, sometimes you have to know what
						things don't mean.” <br /> -Bob Dylan
					</h6>
				</div>
			</div>
		</div>
	</svelte:fragment>
</AppShell>
