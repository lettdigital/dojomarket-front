<script>
    import { getContext } from "svelte";
    import OrderDetails from "./OrderDetails.svelte";

    const { open } = getContext('simple-modal');
    export let customerName;
    export let numberOfProducts;
    export let total;
    export let id;
    const showModal = () => {
        open(OrderDetails, {customerName, total, id});
    }
</script>
<style>
    li {
        margin-bottom: 1em;
        display: flex;
        height: 6em;
        padding: 1em;
		box-shadow: 2px 3px 2px 2px rgba(0, 0, 0, 0.1);
    }
    
    li:hover {
        transform: translate(-5px, -5px);
        box-shadow: 7px 8px 10px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }

    #customerCardContent {
        flex: 1;
        display: flex;
        align-items: center;
    }

    img {
        width: 6em;
        height: 6em;
    }

    #customerCardDetails {
        display: flex;
        flex-direction: column;
        padding-left: 1em;
        justify-content: space-around;
        height: 100%;
    }
    
    h1 {
        font-size: 6em;
        width: 1.5em;
        margin: 0;
        color: var(--primary-color);
        border-right: 0.2px solid #000;
        font-family: 'Zilla Slab', serif;
        padding-right: 0.2em;
        text-align: center;
    }
    
    b {
        color: var(--primary-color);
    }

    p {
        margin: 0;
        padding: 0;
    }

</style>
<li on:click={showModal}>
        <div id="customerCardContent">
            <h1>{id}</h1>
            <div id="customerCardDetails">
                <p><b>Customer name</b>: {customerName}</p>
                <p><b>Number of products</b>: {numberOfProducts}</p>
                <p><b>Total</b>: U${total}</p>
            </div>
        </div>
        <img src="/order.png" alt="Customer representative logo"/>
</li>