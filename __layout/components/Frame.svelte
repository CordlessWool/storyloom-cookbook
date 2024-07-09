<script lang="ts">
	import Footer from "./Footer.svelte";
	import Header from "./Header.svelte";

	export let data;
</script>

<Header siteData={data.site} />
<main>
	<slot />
</main>
<Footer siteData={data.site} />

<style lang="scss">
	main {
		margin: 0 auto;
		max-width: 100vw;
		padding: 0 20px;
		overflow: hidden;
	}
</style>
