<script>
    import { user, checkCircle, shoppingBag, shoppingCart } from 'svelte-awesome/icons'
    import Step from './Step.svelte';
    export let currentStep = 0;
</script>
<style>
    #stepsContainer {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
<div id="stepsContainer">
    <Step icon={user} hasProgressBar concluded={currentStep > 0} stepName="Customer"/>
    <Step icon={shoppingBag} hasProgressBar concluded={currentStep > 1} stepName="Products"/>
    <Step icon={shoppingCart} hasProgressBar concluded={currentStep > 2} stepName="Confirm"/>
    <Step icon={checkCircle} concluded={currentStep >= 3} stepName="Done"/>
</div>