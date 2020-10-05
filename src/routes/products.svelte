<script>
	import ProductCard from '../components/ProductCard.svelte';
	import NewProductForm from '../components/NewProductForm.svelte';
	import { products } from '../stores/products.js'
	products.fetch();
</script>
<svelte:head>
	<title>Products</title>
</svelte:head>
<style>
	
	#productsSectionsWrapper {
		display: flex;
		width: 100%;
		height: 100%;
	}
	
	#newproductsection {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 2em;
	}
	#productsListSection {
		flex: 1;
		flex-direction: column;
		border-left: 0.2px solid #000;
		display: flex;
		align-items: center;
		padding: 0 2em;
	}
	#productsList {
		list-style: none;
		margin: 0px;
		padding: 0px;
		padding-right: 0.5em;
		overflow: auto;
		width: 100%;
		padding-top: 0.5em;
	}
</style>

<div id="productsSectionsWrapper" class="fadeIn">
	<section id="newproductsection">
		<h1>Register a new Product</h1>
		<NewProductForm />
	</section>
	<section id="productsListSection">
		<h1>All products</h1>
		<ul id="productsList">
			{#each $products as product}
				<ProductCard 
					name={product.name} 
					description={product.description}
					price={product.price} 
					id={product.id}
				/>
			{/each}
		</ul>
	</section>
</div>