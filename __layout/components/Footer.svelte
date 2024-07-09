<script>
	export let siteData;
</script>

<footer>
	<p class="copy">&copy; {siteData.name}</p>
</footer>

<style lang="scss">
	footer {
		padding: 20px;
		text-align: center;

		.copy {
			font-size: 0.8rem;
			color: var(--text-light);
		}
	}
</style>
