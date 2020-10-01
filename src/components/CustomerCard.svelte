<script>
    export let name;
    export let email;
    export let id;
</script>
<style>
    li {
        margin-bottom: 1em;
        display: flex;
        height: 6em;
        padding: 1em;
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

</style>
<li>
    <div id="customerCardContent">
        <h1>{id}</h1>
        <div id="customerCardDetails">
            <p><b>Name</b>: {name}</p>
            <p><b>Email</b>: {email}</p>
        </div>
    </div>
    <img src="/customer.png" alt="Customer representative logo"/>
</li>