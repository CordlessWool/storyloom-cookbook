<script>
	export let siteData = {};
</script>

<svelte:head>
	<title>{siteData.name}</title>
</svelte:head>

<header>
	<a class="logo" href="/">{siteData.name}</a>
	<slot name="nav" />
</header>

<style>
	header {
		display: flex;
		margin: 0 auto;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		max-width: calc(var(--width-standard) * 1.2);
		background: var(--bg-dark);
		color: var(--text-light);
	}

	.logo {
		font-size: 1.5rem;
		color: var(--text-color);
		text-decoration: none;
	}
</style>
