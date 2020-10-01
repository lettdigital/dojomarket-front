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
		border-left: 1px solid rgba(255,62,0,0.1);
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
	}

	#newCustomerFormContainer {
		width: 100%;
	}
</style>

<div id="customersSectionsWrapper">
	<section id="newCustomerSection">
		<h1>Register new Customer</h1>
		<div id="newCustomerFormContainer">
			<NewCustomerForm />
		</div>
	</section>
	<section id="customersListSection">
		<h1>All customers</h1>
		<ul id="customersList">
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com"/>
			<CustomerCard name="Pedro" email="pedro.slages@gmail.com"/>
		</ul>
	</section>
</div>