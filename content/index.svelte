<script>
	export let data;
	import Frame from "../__layout/components/Frame.svelte";
	import { meta } from "$embodi/collections";

	const groupedMeta = Object.groupBy(meta, (item) => item.tag);
	const tags = Object.keys(groupedMeta);
</script>

<Frame {data}>
	<img
		class="teaser"
		src="https://images.unsplash.com/photo-1518737003272-dac7c4760d5e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		alt="Kabel mit Nudeln"
	/>
	{#each tags as tag}
		<main>
			<h1>{tag}</h1>
			{#each groupedMeta[tag] as item}
				<a href={item.page}>{item.title}</a>
			{/each}
		</main>
	{/each}
</Frame>

<style lang="scss">
	.teaser {
		width: 50%;
		// height: 100%;
	}
</style>
