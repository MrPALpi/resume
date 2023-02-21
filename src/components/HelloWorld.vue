<template>
  <resum-head :massImg="massImg"></resum-head>
  <!-- <aboutMe></aboutMe> -->
  <sideText></sideText>
</template>

<script>
import resumHead from '@/components/resum-head'
import sideText from './sideText.vue';
export default {
  data(){
    return{
        massImg:[
          'https://sun9-45.userapi.com/impg/K8O77N-UFFq02z4uVncAi4vPbjJ8pIaSqT0Iwg/B3x_Gpaaw-0.jpg?size=1440x1442&quality=95&sign=a0642a3ba0ab3ea9bb76b5687c4ed46c&type=album',
          'https://sun9-6.userapi.com/impg/Ev6gxgbon3YyzOWwP9SsRqZyn8EZG8F8hx-uYw/hmgt9-SUZHo.jpg?size=2268x2265&quality=95&sign=fd9fd893fa3132ab9f953e02475781af&type=album',
        ]
    }
  },
  name: 'HelloWorld',
  components:{
    resumHead,
    sideText,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
