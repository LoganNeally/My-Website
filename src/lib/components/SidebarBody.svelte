<script>
	import { cn } from '$lib/utils';
	import DesktopSidebar from '$lib/components/DesktopSidebar.svelte';
	import MobileSidebar from '$lib/components/MobileSidebar.svelte';
	let _class = '';
	export { _class as class };
</script>

<div class={cn(_class)}>
	<DesktopSidebar>
		<slot></slot>
	</DesktopSidebar>
	<MobileSidebar>
		<slot></slot>
	</MobileSidebar>
</div>
