<template>
    <input :value="value" @input="updateInput" type="text" class = "input">
</template>

<script>
export default{
    name: "MyInput",
    props:{
        value : [String, Number, Boolean]
    },
    methods:{
        updateInput(event){
            this.$emit("update:value", event.target.value)
        }
    }
}
</script>

<style>
.input{
  width: 100%;
  border: 2px solid gray;
  padding: 10px 15px;
  /* margin-top: 1px; */
  /* margin-bottom: 10px; */
  color: black;
  background-color: white;
  border-radius: 8px;
  outline:none;
}

</style>