<template>
  <transition-group name="v-sidebar">
    <div class="sidebar" @click.stop="hideSideBar" v-if="show">
      <div @click.stop class="menu">
        <div class="menuItem">
          <MyButton id="closeSideBar" @click="hideSideBar">X</MyButton>
          <MyButton style="margin-top: 55px">Здесь могла быть ваша копка навигации</MyButton>
          <MyButton>Бесполезная кнопка</MyButton>
          <div style="width: 100%; display: flex; justify-content: center">
          </div>
        </div>
      </div>
    </div>
  </transition-group>
  <transition name="back">
    <div @click="hideSideBar" v-if="show" class="back">

    </div>
  </transition>
</template>

<script>
import MyButton from './MyButton.vue';
export default {
  name: "my-sidebar",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    MyButton,
  },
  methods: {
    hideSideBar() {
      this.$emit('update:show', false)
    }
  },

};
</script>

<style>
.back {
  position: fixed;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  transition: 0.3s ease-in-out;
}
#closeSideBar{
  font-size: 55px;
                      font-weight: 400;
                      position: absolute;
                      width: 50px;
                      right: 5px;
                      margin: 5px 20px 20px 50px;
}
.sidebar {
  position: fixed;
  height: 100vh;
  background: none;
  width: 100%;
  top: 0;

  display: flex;
  z-index: 999;
  justify-content: right;
}

.menu {
  background-color: var(--color-bg);
  width: 65%;
}

.menuItem {
  display: inline;
  width: 100%;
}

.menuItem .btn {
  /* border: none; */
  width: 100%;
  /* font-size: 1.05em; */

}

.menuItem .btn:hover {
  /* border: none; */
  /* background: none; */
  color: var(--color-text-special);
}

.back-enter-active,
.back-leave-active {
  transition: opacity 0.8s;
}

.back-enter-from,
.back-leave-to {
  opacity: 0;
}


.v-sidebar-enter-active,
.v-sidebar-leave-active {
  transition: all 0.8s;
}

.v-sidebar-enter-from,
.v-sidebar-leave-to {
  transform: translate(100%, 0px);
}
</style>
