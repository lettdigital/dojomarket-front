<script>
	import Nav from '../components/Nav.svelte';
	import { stores } from '@sapper/app';
	const { page } = stores();
	export let segment;
</script>

<style>
	main {
		position: relative;
		background-color: white;
		padding: 2em;
		box-sizing: border-box;
		flex: 1;
		overflow: hidden;
	}

	.backgroundImage {
		background-image: url("/px.png");
		background-position: 0% 80%;
		background-repeat: no-repeat;
		background-size: 1200px;
	}

	.pageContainer {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		max-height: 100vh;
		min-width: 625;
	}
</style>
<div class="pageContainer">
	<Nav {segment}/>
	<main class:backgroundImage="{$page.path === "/"}">
		<slot></slot>
	</main>
</div>