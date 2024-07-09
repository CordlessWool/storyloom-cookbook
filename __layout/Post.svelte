<script>
	export let data;
	import Header from "./components/Header.svelte";
	import Article from "./components/Article.svelte";
	import Frame from "./components/Frame.svelte";
</script>

<Frame {data}>
	<Article title={data.title} teaser={data.teaser} poster={data.poster}>
		<slot />
	</Article>
</Frame>
