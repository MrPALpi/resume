<template>
  <div v-scrolleffect class="form">
    <h2 style="word-break: break-word;">А ещё я формочки умею делать {{ text }}</h2>
    <input style="word-break: break-word;" v-model="text" />
    <my-button @click="dialogShow">Кнопка с интересными диалогами</my-button>
    <MyButton @click="sideBarShow">
      Похоже на кнопку боковой панели
    </MyButton>
    <my-switch></my-switch>
  </div>
</template>

<script>
import MyButton from './UI/MyButton.vue';
import MySwitch from './UI/MySwitch.vue';

export default {
  data() {
    return {
      text: ''
    }
  },
  components: {
    MyButton,
    MySwitch,
  },
  methods: {
    dialogShow() {
      this.$emit('dialogShow');
    },
    sideBarShow() {
      this.$emit('sideBarShow');
    }
  }
}
</script>

<style>
input {
  /* height: 100%; */
  margin: 10px 2px 2px 2px;
  outline: none;
  padding: 4px;
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text);
  background: none;
  border: 2px solid gray;
  border-radius: 15px;
  text-decoration: none;
  cursor: pointer;
}

.form {
  padding: 20px 10px 20px 10px;
  text-align: center;
  border-radius: 10px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  transform: rotate3d(1, 0, 0, 270deg);
}

.form.element-show {
  transform: rotate3d(0, 0, 0, 0deg);
  opacity: 1;
  transition: all 0.7s ease-in-out, background-color 0.4s ease-in-out, color 0.4s ease-in-out;
}
</style>