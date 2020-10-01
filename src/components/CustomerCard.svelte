<script>
    export let name;
    export let email;
</script>
<style>
    li {
		border: 1px solid rgba(255,62,0,0.1);
        margin-bottom: 1em;
        display: flex;
        height: 6em;
        padding: 1em;
    }

    #customerCardContent {
        flex: 1;
    }

    img {
        width: 6em;
        height: 6em;
    }

</style>
<li>
    <div id="customerCardContent">
        <p><b>Name</b>: {name}</p>
        <p><b>Email</b>: {email}</p>
    </div>
    <img src="/customer.png" alt="Customer representative logo"/>
</li>