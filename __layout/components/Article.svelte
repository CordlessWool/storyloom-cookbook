<script>
	export let title;
	export let poster = {};
</script>

<article>
	{#if poster}
		<img src={poster.src} alt={poster.alt} />
	{/if}
	<h1>{title}</h1>

	<div class="html"><slot /></div>
</article>

<style lang="scss">
	article {
		margin: 0 auto;
		max-width: var(--width-standard);
		padding: 0 20px;

		color: var(--text-color);

		img {
			width: 200%;
			margin: 0 -50%;
		}

		.html {
			:global(h1) {
				margin-top: 0;
				font-size: 2.5rem;
			}

			:global(p) {
				line-height: 1.5;
			}

			:global(img) {
				width: 150%;
				margin: 0 -25%;
				height: auto;
			}

			:global(p + ul) {
				margin-top: -1rem;
			}

			:global(ul),
			:global(ol) {
				padding-left: 1.75rem;
			}
			:global(li) {
				line-height: 1.5;
			}
			:global(a) {
				color: #001c3b;
				text-decoration: none;
				cursor: pointer;
				border-bottom: 1px solid #00244d;
			}

			:global(blockquote) {
				margin: 1.5rem 0;
				padding: 0 1.5rem;
				border-left: 4px solid #8e9aa8;
				color: var(--text-light);
			}
		}
	}
</style>
