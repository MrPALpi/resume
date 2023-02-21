<template>
  <div class="form">
    <my-input></my-input>
    <my-button></my-button>
    <my-switch></my-switch>
    <my-select></my-select>
  </div>
</template>

<script>
import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';
import MySelect from './UI/MySelect.vue';
import MySwitch from './UI/MySwitch.vue';

export default {
components:{
    MyButton,
    MyInput,
    MySelect,
    MySwitch,

}
}
</script>

<style>
.form{
    padding: 5px;
    border-radius: 20px;

}
</style>