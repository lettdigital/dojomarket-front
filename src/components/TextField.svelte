<script>
    export let label = "";
    export let value;
    export let required = false;
    export let name = "";
    export let submited;
</script>

<style>
    label {
        margin-right: 0.5em;
    }

    input {
        margin-bottom: 1em;
    }

    div {
        display: flex
    }
</style>

<div>
    <label for={name}>
        {label}
        <span style={submited ? "color: red": ""}>{required ? "*" : ""}:</span>
    </label>
    <input 
    type="text" 
    bind:value={value} 
    required={required} 
    name={name}
    >
</div>