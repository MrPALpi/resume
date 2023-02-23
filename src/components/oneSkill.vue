<template>
  <div v-scrolleffect class="skillCart">
    <ul style="text-align: left;"> {{ skillGroup['name']}}
        <li v-for="skill in skillGroup['skills']" :key="skill">{{ skill}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props:{
        skillGroup:{
            type:Object,
            default:{},
        },
    }
}
</script>

<style>
li{
    font-size:1.2rem;
    padding: 5px 0 0 10px;
    font-weight: 600;
    margin-top: 5px;
}
ul{
    font-size:1.6rem;
    font-weight: 800;
   /* margin-bottom: 50px; */
}
.skillCart{
    margin: 3% 0 0 0;
    transform: scaleY(0);
    width: 215px;
}

.skillCart.element-show{
    animation: cartOpen 0.5s ease-in forwards;
}
@keyframes cartOpen {
    100%{
        transform: scaleY(1);
    }    
}
</style>