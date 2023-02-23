<template>
  <div class="wrap">
    <div  class="side" :style="{'justify-content':side}">
    <div :style="{'text-align':side}" class="head-about">
      <slot>
      </slot>
    </div>
</div>
  </div>
</template>

<script>
export default {
  props:{
      side:{
        default:'right'
      },
  }
}
</script>

<style>
.side{
    display: flex;
    width: 100%;
    
}

.flying_TextX, .flying_Text_leftX {
  opacity: 0;
}
.flying_Text_leftX{
  transform: translateX(-55%);
}
.flying_TextX{
  transform: translateX(55%);
}

.flying_TextX.element-show, .flying_Text_leftX.element-show {
  transform: translate(0, 0);
  opacity: 1;
  transition: all 1.2s ease-in-out 0.1s, background-color 0.4s ease-in-out, color 0.4s ease-in-out;
}
</style>