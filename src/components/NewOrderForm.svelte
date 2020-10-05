<script>
    import NewOrderSteps from './NewOrderSteps.svelte';
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
    <NewOrderSteps />
    <form id="newOrderForm">

    </form>
</div>