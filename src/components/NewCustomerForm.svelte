<script>
    import TextField from './TextField.svelte';
    import * as yup from 'yup';
    let name = "";
    let email = "";
    let submited = false;
    let error = "";

    let schema = yup.object().shape({
        name: yup.string("Name must be a string.").required("Name is required."),
        email: yup.string("E-mail must be a string.").email("E-mail must be a valid format").required("E-mail is required.")
    });

    const handleSubmit = async (event) => {
        await schema.validate({
            name,
            email
        }).then(() => {
            error = ""
        }).catch(err => {
            error = err.errors[0];
        });
        if(error === "") {
            console.log({
                name,
                email
            })
        }
    }
</script>
<style>
    #newCustomerForm {
        display: flex;
        flex-direction: column;
        margin: auto
    }
</style>
<form id="newCustomerForm" on:submit|preventDefault={handleSubmit}>
    <TextField label="Nome" bind:value={name} required name="nome" {submited}/>
    <TextField label="E-mail" bind:value={email} required name="email" {submited}/>
    <button type="submit" on:click|once={() => {submited = true}}> Enviar </button>
    {error}
</form>