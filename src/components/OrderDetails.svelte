<script>
    export let id;
    export let customerName;
    export let total;

</script>
<style>
    #orderDetails {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    #orderProductsList {
        box-shadow: inset 0 0 6px rgba(0,0,0,.2);
        border-radius: 8px;
        padding: 1em;
        height: 400px;
        overflow-y: auto;
    }

    #productInfo {
        display: flex;
    }

    p {
        margin: 0;
        padding: 0;
    }


    li {
        display: flex;
        flex-direction: column;
        border-bottom: solid #eee 0.1px;
        padding-bottom: 1em;
        margin-bottom: 1em;
        width: 100%;
    }

    .price {
        text-align: end;
        padding: 1em;
    }

    .price > b {
        color: var(--primary-color);
        font-size: 18px
    }
</style>
<h1>Order Details</h1>
<div id="orderDetails">
    <p><b>Customer name</b>: {customerName}</p>
    <p><b>Order ID</b>: {id}</p>
    <ul id="orderProductsList">
        <li>
            <span>Product Name - ID 01</span>
            <div id="productInfo">
                <span style="flex: 1">Product description</span>
                <span>U$14.50</span>
            </div>
        </li>
        <li>
            <span>Product Name - ID 01</span>
            <div id="productInfo">
                <span style="flex: 1">Product description</span>
                <span>U$14.50</span>
            </div>
        </li>
        <li>
            <span>Product Name - ID 01</span>
            <div id="productInfo">
                <span style="flex: 1">Product description</span>
                <span>U$14.50</span>
            </div>
        </li>
        <li>
            <span>Product Name - ID 01</span>
            <div id="productInfo">
                <span style="flex: 1">Product description</span>
                <span>U$14.50</span>
            </div>
        </li>
        <li>
            <span>Product Name - ID 01</span>
            <div id="productInfo">
                <span style="flex: 1">Product description</span>
                <span>U$14.50</span>
            </div>
        </li>
        <li>
            <span>Product Name - ID 01</span>
            <div id="productInfo">
                <span style="flex: 1">Product description</span>
                <span>U$14.50</span>
            </div>
        </li>
        <li>
            <span>Product Name - ID 01</span>
            <div id="productInfo">
                <span style="flex: 1">Product description</span>
                <span>U$14.50</span>
            </div>
        </li>
        
        
    </ul>
    <span class="price">Total: <b>U${total}</b></span>
    
</div>
