<script>
	import ProductCard from '../components/ProductCard.svelte';
	import NewProductForm from '../components/NewProductForm.svelte';
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
			<ProductCard name="Camisa" description="A blue t-shirt" price="14,90" id="01"/>
			<ProductCard name="Camisa" description="A blue t-shirt" price="14,90" id="02"/>
			<ProductCard name="Camisa" description="A blue t-shirt" price="14,90" id="03"/>
			<ProductCard name="Camisa" description="A blue t-shirt" price="14,90" id="04"/>
			<ProductCard name="Camisa" description="A blue t-shirt" price="14,90" id="05"/>
			<ProductCard name="Camisa" description="A blue t-shirt" price="14,90" id="06"/>
			<ProductCard name="Camisa" description="A blue t-shirt" price="14,90" id="07"/>
			<ProductCard name="Camisa" description="A blue t-shirt" price="14,90" id="08"/>
			<ProductCard name="Camisa" description="A blue t-shirt" price="14,90" id="09"/>
			<ProductCard name="Camisa" description="A blue t-shirt" price="14,90" id="10"/>
			<ProductCard name="Camisa" description="A blue t-shirt" price="14,90" id="100"/>
		</ul>
	</section>
</div>