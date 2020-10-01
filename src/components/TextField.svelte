<script>
    export let label = "";
    export let value;
    export let required = false;
    export let name = "";
    export let submited;
</script>

<label for={name}>
    {label}
    <span style={submited ? "color: red": ""}>{required ? "*" : ""}</span>
</label>
<input 
type="text" 
bind:value={value} 
required={required} 
name={name}
>