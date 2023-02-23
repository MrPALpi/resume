<template>
  <div class="wrap">
    <div class="skills">
      <oneSkill v-for="skill in skills" :key="skill" :skillGroup="skill"></oneSkill>
    </div>
  </div>
</template>

<script>
import oneSkill from './oneSkill.vue';
export default {
  components:{
    oneSkill,
  },
  data() {
    return {
      skills: [
        {
          name: 'Frontend',
          skills: ['HTML', 'CSS', 'JS', 'Vue.js'],
        },
        {
          name: 'Languages',
          skills: ['Python', 'JavaScript', 'SQL', 'Java<'],

        },
        {
          name: 'Опыт работы',
          skills: ['Vue.JS','Flask','SQLite', 'MySQL','Pandas','JDBC<'],

        },
        {
          name: 'Tools',
          skills: ['Adobe Photoshop', 'Microsoft Office', 'Google'],

        },
        {
          name: 'Образование',
          skills: ['УрТИСИ СибГУТИ', 'Информатика и вычислительная техника','2020 — 2025'],
        },
        {
          name: 'Контакты',
          skills: ['+7-922-198-97-29','kapralov-02@bk.ru'],
        },
      ]
    }
  },
}
</script>

<style>
.skills {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 10px;
  width: 100%;
  list-style: none;
}
</style>