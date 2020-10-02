<script>
	import CustomerCard from '../components/CustomerCard.svelte';
	import NewCustomerForm from '../components/NewCustomerForm.svelte';
</script>
<svelte:head>
	<title>Customers</title>
</svelte:head>
<style>
	#customersSectionsWrapper {
		display: flex;
		width: 100%;
		height: 100%;
	}
	#newCustomerSection {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 2em;
	}
	#customersListSection {
		flex: 1;
		flex-direction: column;
		border-left: 0.2px solid #000;
		display: flex;
		align-items: center;
		padding: 0 2em;
	}
	#customersList {
		list-style: none;
		margin: 0px;
		padding: 0px;
		padding-right: 0.5em;
		overflow: auto;
		width: 100%;
		padding-top: 0.5em;
	}
</style>

<div id="customersSectionsWrapper" class="fadeIn">
	<section id="newCustomerSection">
		<h1>Register a new Customer</h1>
		<NewCustomerForm />
	</section>
	<section id="customersListSection">
		<h1>All customers</h1>
		<ul id="customersList">
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com" id="01"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com" id="02"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com" id="03"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com" id="04"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com" id="05"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com" id="06"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com" id="07"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com" id="08"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com" id="09"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com" id="10"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com" id="100"/>
		</ul>
	</section>
</div>