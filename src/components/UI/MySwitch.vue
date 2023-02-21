<template>
   
  <label  class="switch">
    <input @click="changeMode"  type="checkbox"/>
    <span class="slider"></span>
  </label>

</template>

<script>
export default {
    name: "my-switch",
    props:{
        darkTheme:'',
    },
    methods:{
        changeMode(){
            if(!this.getDarkTheme){
              this.ChangeStyle("light", "dark");
              this.setDarkTheme(true);
            }
            else{
              this.ChangeStyle("dark", "light");
              this.setDarkTheme(false);
            }
        },
        ChangeStyle(themeRemove,themeAdd){
          document.documentElement.classList.remove(themeRemove);
          document.documentElement.classList.add(themeAdd);
        }
    },

  }
</script>

<style>
.switch input
{
  display: none;
}

.switch 
{
    display: inline-block;

  width: 50px; /*=w*/
  height: 20px; /*=h*/
  
  transform: translateY(30%);
  position: relative;
}

.slider
{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 30px;
  box-shadow: 0 0 0 2px #777, 0 0 4px #777;
  cursor: pointer;
  border: 4px solid transparent;
  overflow: hidden;
  transition: 0.2s;
}

.slider:before
{
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: #777;
  border-radius: 30px;
  transform: translateX(-30px); 
  transition: 0.2s;
}

input:checked + .slider:before
{
  transform: translateX(30px); 
  background-color: var(--color-text);
}

input:checked + .slider
{
  box-shadow: 0 0 0 2px var(--color-text), 0 0 8px var(--color-text);
}
</style>