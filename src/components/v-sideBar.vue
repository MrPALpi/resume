<template>
  <transition-group name="v-sidebar">
    <div class="sidebar" @click.stop="hideSideBar" v-if="show">
      <div @click.stop class="menu">
        <div class="menuItem">
          <MyButton @click="hideSideBar" style="
              font-size: 55px;
              font-weight: 400;
              position: absolute;
              width: 5px;
              right: 10px;
              margin: 5px 20px 20px 50px;">X</MyButton>
          <MyButton style="margin-top: 55px" @click="pushAndClose('/faq')">FAQ</MyButton>
          <MyButton @click="pushAndClose('/chat')"> Чат</MyButton>
          <div style="width: 100%; display: flex; justify-content: center">
            <my-switch></my-switch>
          </div>
        </div>
      </div>
    </div>
  </transition-group>
  <transition name="back">
    <div @click.stop="hideSideBar" v-if="show" class="back">

    </div>
  </transition>
</template>

<script>
export default {
  name: "my-sidebar",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    darkTheme: false,
  },
  methods: {
    pushAndClose(push) {
      this.hideSideBar();
      this.$router.push(push);
    },
    hideSideBar() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style>
.back{
  position: fixed;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  top: 0;
  left: 0;
  z-index: 998;
  transition: 0.3s ease-in-out ;
}

.sidebar {
  position: fixed;
  height: 100vh;

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
  border: none;
  width: 100%;
  font-size: 1.05em;
  background-color: transparent;
  font-family: var(--font);
  font-weight: bold;
}

.menuItem .btn:hover {
  border: none;
  background: none;
  color: var(--color-text);
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
