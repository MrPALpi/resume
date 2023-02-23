<template>
   
  <label  class="switch">
    <input @click="changeMode"  type="checkbox"/>
    <span class="slider"></span>
  </label>

</template>

<script>
export default {
    name: "my-switch",
    data(){
      return{
        darkTheme: false,
      }
    },
    methods:{
        changeMode(){
            if(!this.darkTheme){
              this.ChangeStyle("light", "dark");
              this.darkTheme= true;
            }
            else{
              this.ChangeStyle("dark", "light");
              this.darkTheme=false;
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
  text-align: left;
    display: inline-block;
  padding: 2px;
  width: 50px; /*=w*/
  height: 20px; /*=h*/
  
  transform: translateY(30%);
  position: relative;
}

.slider
{
  margin: 2px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 30px;
  box-shadow: 0 0 0 2px #777, 0 0 2px #777;
  cursor: pointer;
  border: 2px solid transparent;
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
  background-color: var(--color-text-special);
}

input:checked + .slider
{
  box-shadow: 0 0 0 2px var(--color-text-special), 0 0 2px var(--color-text-special);
}
</style>