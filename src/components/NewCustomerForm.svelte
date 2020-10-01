<script>
    import TextField from './TextField.svelte';
    let name = "";
    let email = "";
    let submited = false
    const handleSubmit = (event) => {
        console.log(name, email)
        teste = "teste"
    }
</script>
<style>
    #newCustomerForm {
        display: flex;
        flex-direction: column;
    }
</style>
<form id="newCustomerForm" on:submit|preventDefault={handleSubmit}>
    <TextField label="Nome" bind:value={name} required name="nome" {submited}/>
    <TextField label="E-mail" bind:value={email} required name="email" {submited}/>
    <button type="submit" on:click|once={() => {submited = true}}> Enviar </button>
</form>