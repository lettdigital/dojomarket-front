<script>
	import Menu from './Menu.svelte';
	import Icon from 'svelte-awesome/components/Icon.svelte'
	import { shoppingCart } from 'svelte-awesome/icons'
	export let segment;
</script>

<style>
	nav {
		font-weight: 300;
		padding: 0 1em;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		box-shadow: 0px 2px 2px -2px rgba(0,0,0,.2);
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		color: #000;
		display: flex;
		align-items: center;
		position: absolute;
	}

	h1 {
		font-size: 2em;
		margin: 0px;
		margin-left: 0.5em;
	}
</style>

<nav>
	<a href=".">
		<Icon scale="2" data={shoppingCart} style="color: var(--primary-color)" spin={false}/>
		<h1>Dojo Market</h1>
	</a>
	<Menu {segment}/>
</nav>
