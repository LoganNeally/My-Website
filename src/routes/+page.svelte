<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { ShieldQuestion } from 'lucide-svelte';
	let tabSet: number = 0;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-4">
	<div class="block card card-hover p-4">
		<div class="p-4 space-y-12">
			<h3 class="h3" data-toc-ignore>loganneallyit.net</h3>
			<article>
				<p>
					<!-- cspell:disable -->
					loganneallyit.net serves as a means for me to demonstrate my work and projects all from one
					space. I built this website with the intention of sharing my projects and documenting my journey
					in the cyber-industry. Built with SvelteKit and Skeleton UI.
					<!-- cspell:enable -->
				</p>
			</article>
		</div>
		<hr class="!border-t-2 opacity-50" />
		<footer class="p-4 incline-flex justify-start items-center space-x-4">
			<div class="flex flex-auto flex-wrap justify-left items-center gap-4">
				<a class="btn btn-sm variant-soft-primary" href="https://svelte.dev">Svelte</a>
				<a class="btn btn-sm variant-soft-primary" href="https://tailwindcss.com">Tailwindcss</a>
				<a class="btn btn-sm variant-soft-primary" href="https://nodejs.org/en">Node.js</a>
				<a class="btn btn-sm variant-soft-primary" href="https://www.cloudflare.com">Cloudflare</a>
			</div>
		</footer>
	</div>

	<!-- Card 2 -->

	<div class="block card card-hover row-span-2 p-4">
		<header></header>
		<div class="space-y-4">
			<h3 class="h3 flex flex-auto gap-3 p-4" data-toc-ignore>
				About Me <ShieldQuestion />
			</h3>
			<article>
				<p class="p-4">
					I am a cybersecurity student with a strong background in development, automation, and
					networking. My expertise includes building secure systems, automating security workflows,
					and optimizing network infrastructure to enhance threat detection and response.
				</p>
				<p class="p-4">
					I have a keen interest in digital forensics, SOAR implementations, and threat
					intelligence, and I’m always exploring new technologies to improve security operations.
				</p>
				<p class="p-4">
					Feel free to explore my work, and let’s connect! My Linkedin and Github are attached to
					the sidebar of this website.
				</p>
			</article>
		</div>
		<hr class="!border-t-2 opacity-50" />
		<footer class="flex justify-center items-center p-4">
			<section class="card shadow-sm max-w-lg mx-auto justify-center gap-4 p-6">
				<TabGroup>
					<div class="flex flex-wrap justify-center gap-4">
						<Tab bind:group={tabSet} name="tab1" value={0}>
							<svelte:fragment slot="lead"></svelte:fragment>
							<span>Management</span>
						</Tab>
						<Tab bind:group={tabSet} name="tab2" value={1}>Development</Tab>
						<Tab bind:group={tabSet} name="tab3" value={2}>Technological</Tab>
						<!-- Tab Panels --->
					</div>
					<svelte:fragment slot="panel">
						{#if tabSet === 0}
							<li>Team leadership</li>
							<li>Adaptability</li>
							<li>Active listening</li>
							<li>Problem-solving</li>
							<li>Risk assessment</li>
							<li>Data analysis</li>
						{:else if tabSet === 1}
							<li>Python</li>
							<li>CSS</li>
							<li>HTML</li>
							<li>Java Script</li>
							<li>Svelte</li>
							<li>Docker</li>
						{:else if tabSet === 2}
							<li>Networking</li>
							<li>Malware Analysis</li>
							<li>SOAR Experience</li>
							<li>SIEM Experience</li>
							<li>Forensics</li>
							<li>Incident Response</li>
						{/if}
					</svelte:fragment>
				</TabGroup>
			</section>
		</footer>
	</div>
	<!-- Card 3-->
	<div class="block card card-hover p-4">
		<header></header>
		<div class="p-4 space-y-4">
			<h6 class="h6" data-toc-ignore>Featured Project</h6>
			<h3 class="h3" data-toc-ignore>SOAR Automation Homelab</h3>
			<article>
				<p>
					<!-- cspell:disable -->
					This project focused on building a Security Orchestration, Automation, and Response (SOAR)
					system using TheHive, Wazuh, and Shuffle.io, deployed on an Ubuntu 22.04 server running on
					a 2012 Mac Mini.
					<!-- cspell:enable -->
				</p>
			</article>
		</div>
		<hr class="!border-t-2 opacity-50" />
		<footer class="p-4 flex justify-start items-center space-x-4">
			<div class="flex-auto flex justify-between items-center">
				<a class="btn btn-sm variant-soft-primary" href="/Projects/Soar">SOAR Project</a>
				<small>2/18/2025</small>
			</div>
		</footer>
	</div>
</div>
