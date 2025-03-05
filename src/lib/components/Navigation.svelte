<script lang="ts">
	import { getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	import {
		GraduationCap,
		Binary,
		ShieldCheck,
		ShieldQuestion,
		FolderGit2,
		Linkedin,
		Github,
		Briefcase
	} from 'lucide-svelte';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<div class="card border-surface-900 grid h-full w-full grid-cols-[auto_1fr] border-[1px]">
	<nav class="list-nav flex flex-col justify-between h-full p-6">
		<ul class="flex flex-col items-start">
			<li>
				<a class="gap-2 flex items-center" href="/" on:click={drawerClose}>
					Home <Binary />
				</a>
				<a class="gap-2 flex items-center" href="/About" on:click={drawerClose}>
					About <ShieldQuestion />
				</a>
			</li>
			<li>
				<a class="gap-2 flex items-center" href="/Certifications" on:click={drawerClose}>
					Certifications <ShieldCheck />
				</a>
			</li>
			<li>
				<a class="gap-2 flex items-center" href="/Education" on:click={drawerClose}>
					Education <GraduationCap />
				</a>
			</li>
			<li>
				<a class="gap-2 flex items-center" href="/Projects" on:click={drawerClose}>
					Projects <FolderGit2 />
				</a>
			</li>
			<li>
				<a class="gap-2 flex items-center" href="/Work" on:click={drawerClose}>
					Work <Briefcase />
				</a>
			</li>
		</ul>

		<div class="flex flex-col items-start space-y-2">
			<a
				class="gap-2 flex-auto"
				href="https://github.com/LoganNeally"
				target="Github"
				rel="noopener noreferrer"
			>
				<Github />
			</a>
			<a
				class="gap-2 flex-auto"
				href="https://www.linkedin.com/in/logan-neally-44a7342a6"
				target="Linkedin"
				rel="noopener noreferrer"
			>
				<Linkedin />
			</a>
		</div>
	</nav>
</div>
