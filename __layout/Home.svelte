<script>
	import Header from "./components/Header.svelte";

	export let data;
</script>

<Header siteData={data.site} />

<main>
	<h1>{data.title}</h1>
	<slot />
</main>
