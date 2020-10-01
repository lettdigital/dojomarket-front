<script>
	export let segment;
</script>

<style>
	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: var(--primary-color);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<ul>
    <li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
    <li><a aria-current="{segment === 'orders' ? 'page' : undefined}" href="orders">orders</a></li>
    <li><a aria-current="{segment === 'products' ? 'page' : undefined}" href="products">products</a></li>
    <li><a aria-current="{segment === 'customers' ? 'page' : undefined}" href="customers">customers</a></li>
</ul>
