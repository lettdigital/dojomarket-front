<script>
	import Menu from './Menu.svelte';
	import Icon from 'svelte-awesome/components/Icon.svelte'
	import { shoppingCart } from 'svelte-awesome/icons'
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		display: flex;
		justify-content: space-between;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		color: #000;
		display: flex;
		align-items: center;
	}

	h1 {
		font-size: 1.3em;
		margin: 0px;
		margin-left: 0.75em;
	}
</style>

<nav>
	<a href=".">
		<Icon scale="1.5" data={shoppingCart} style="color: var(--primary-color)" spin={false}/>
		<h1>Dojo Market</h1>
	</a>
	<Menu {segment}/>
</nav>
