<script>
    import NewOrderSteps from './NewOrderSteps.svelte';
    let currentStep = 0;
</script>
<style>
    #newOrderFormContainer {
        width: 100%;
        display: flex;
        height: 100%;
    }

    #newOrderForm {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
</style>
<div id="newOrderFormContainer">
    <NewOrderSteps {currentStep}/>
    <form id="newOrderForm">

    </form>
</div>