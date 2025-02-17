<script lang="ts">
	import {
		GraduationCap,
		Binary,
		ShieldCheck,
		ShieldQuestion,
		FolderGit2,
		Linkedin,
		Github,
		BinaryIcon,
		Briefcase
	} from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	// Checkout Installation Guide for more details regarding the following imports
	import SidebarBody from '$lib/components/SidebarBody.svelte';
	import { vopen } from '../svelteContent';
	import SidebarLink from '$lib/components/SidebarLink.svelte';
	import BorderBeam from '$lib/components/BorderBeam.svelte';
	import { cn } from '$lib/utils';

	interface LinkItem {
		label: string;
		href: string;
		icon: any;
	}

	const links: LinkItem[] = [
		{ label: 'About', href: '/About', icon: ShieldQuestion },
		{ label: 'Certifications', href: '/Certifications', icon: ShieldCheck },
		{ label: 'Education', href: '/Education', icon: GraduationCap },
		{ label: 'Projects', href: '/Projects', icon: FolderGit2 },
		{ label: 'Work Experience', href: '/Work', icon: Briefcase }
	];
</script>

<div class="flex justify-center items-center h-70 w-full">
	<div
		class="rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 h-70 w-full flex-1 overflow-hidden"
	>
		<SidebarBody class="justify-between gap-10">
			<div class="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
				{#if $vopen}
					<a href="/">
						<span
							in:slide={{ axis: 'x' }}
							class="font-medium text-black dark:text-white whitespace-pre"
						>
							Home
						</span>
					</a>
				{:else}
					<a href="/">
						<BinaryIcon></BinaryIcon>
					</a>
				{/if}
				<div class="mt-8 flex flex-col gap-2">
					{#each links as link}
						<SidebarLink {link} />
					{/each}
				</div>
			</div>
			<div>
				<SidebarLink
					link={{
						label: 'Github',
						href: 'https://github.com/LoganNeally',
						icon: Github
					}}
				/>
				<SidebarLink
					link={{
						label: 'Linkedin',
						href: 'https://www.linkedin.com/in/logan-neally-44a7342a6/',
						icon: Linkedin
					}}
				/>
			</div>
		</SidebarBody>

		<!-- Dashboard -->

		<div
			class="h-[30rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.30] antialiased bg-grid-white/[0.02] relative overflow-hidden"
		>
			<!--BorderBeam Card-->
			<div class="grid grid-cols-3 gap-20 justify-center place-items-center">
				<article
					class="flex max-w-2xl flex-col items-start justify-between relative rounded-3xl p-7 border border-gray-700/70 bg-background"
				>
					<BorderBeam size={150} duration={12} />
					<div class="flex items-center gap-x-4 text-xs">
						<time datetime="2/14/2025" class="text-gray-300">Feburary 14, 2025</time>
						<a
							href="https://svelte.dev/"
							class="relative z-10 rounded-full bg-transparent px-3 py-1.5 font-medium text-orange-400 border border-orange-300"
						>
							Svelte
						</a>
					</div>
					<div class="group relative">
						<h3 class="mt-3 text-lg font-semibold leading-6 text-orange-400">
							What is loganneallyit.net?
						</h3>
						<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-200">
							Placeholder <span class="text-orange-400 underline underline-offset-2"
								>Placeholder</span
							>
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

				<article
					class="flex max-w-2xl flex-col items-start justify-between relative rounded-3xl p-7 border border-gray-700/70 bg-background"
				>
					<BorderBeam size={150} duration={12} />
					<div class="flex items-center gap-x-4 text-xs">
						<time datetime="2/14/2025" class="text-gray-300">Feburary 14, 2025</time>
						<a
							href="https://svelte.dev/"
							class="relative z-10 rounded-full bg-transparent px-3 py-1.5 font-medium text-orange-400 border border-orange-300"
						>
							Svelte
						</a>
					</div>
					<div class="group relative">
						<h3 class="mt-3 text-lg font-semibold leading-6 text-orange-400">
							What is loganneallyit.net?
						</h3>
						<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-200">
							Placeholder <span class="text-orange-400 underline underline-offset-2"
								>Placeholder</span
							>
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

				<article
					class="flex max-w-2xl flex-col items-start justify-between relative rounded-3xl p-7 border border-gray-700/70 bg-background"
				>
					<BorderBeam size={150} duration={12} />
					<div class="flex items-center gap-x-4 text-xs">
						<time datetime="2/14/2025" class="text-gray-300">Feburary 14, 2025</time>
						<a
							href="https://svelte.dev/"
							class="relative z-10 rounded-full bg-transparent px-3 py-1.5 font-medium text-orange-400 border border-orange-300"
						>
							Svelte
						</a>
					</div>
					<div class="group relative">
						<h3 class="mt-3 text-lg font-semibold leading-6 text-orange-400">
							What is loganneallyit.net?
						</h3>
						<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-200">
							Placeholder <span class="text-orange-400 underline underline-offset-2"
								>Placeholder</span
							>
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
			</div>
		</div>
	</div>
</div>
