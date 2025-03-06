<script lang="ts">
	import { cn } from '$lib/utils';

	let className: any = '';
	export { className as class };
</script>

<div
	class={cn(
		'pointer-events-none absolute h-full w-full overflow-hidden opacity-50 [perspective:250px]',
		className
	)}
>
	<!-- Grid  -->
	<div class="absolute inset-0 [transform:rotateX(30deg)]">
		<div
			class={cn(
				'animate-grid',

				'[background-repeat:repeat] [background-size:150px_150px] [height:1000vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:1000vw]',

				// Light Styles
				'[background-image:linear-gradient(to_right,rgba(82,7,11,1)_1px,transparent_0),linear-gradient(to_bottom,rgba(82,7,11,1)_1px,transparent_0)]',

				// Dark styles
				'dark:[background-image:linear-gradient(to_right,rgba(172,85,89,1)_3px,transparent_0),linear-gradient(to_bottom,rgba(172,85,89,1)_3px,transparent_0)]'
			)}
		/>
	</div>
</div>
