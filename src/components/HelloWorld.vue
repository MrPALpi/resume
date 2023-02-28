<template>
  <vSideBar v-model:show="showSideBar" />

  <resum-head :massImg="`first.png`"></resum-head>

  <sideText :side="`right`">
    <h2 v-scrolleffect class="findWord flying_TextX" v-for="item in items[0]" :key="item">
      {{ item }}
    </h2>
  </sideText>

  <sideText :side="`left`">
    <h2 v-scrolleffect class="findWord flying_Text_leftX" v-for="item in items[1]" :key="item">
      {{ item }}
    </h2>
  </sideText>

  <sideText>
    <cart-component @dialogShow="this.dialogShow" @sideBarShow="sideBarShow"></cart-component>
  </sideText>

  <my-dialog v-model:show="showDialog">
    <h1 style="font-size: 1.2em; text-align: center;">Обманул! Тут занудный диалог!<br>«Диалог»</h1>
  </my-dialog>
  <resumeDraw></resumeDraw>
  <skillLine></skillLine>
</template>

<script>
import resumHead from "@/components/resum-head";
import sideText from "./sideText.vue";
import cartComponent from "./cartComponent.vue";
import MyDialog from "./UI/MyDialog.vue";
import vSideBar from "./UI/v-sideBar.vue";
import resumeDraw from "./resumeDraw.vue";
import skillLine from "./skillLine.vue";

export default {
  name: "HelloWorld",
  components: {
    resumHead,
    sideText,
    cartComponent,
    MyDialog,
    vSideBar,
    resumeDraw,
    skillLine,

  },
  data() {
    return {
      showDialog: false,
      showSideBar: false,
      right: 'right',
      left: 'left',
      // massImg: [
      //   "first.png",
      //   "first.png",
      // ],
      items: [
        ['В рамках внеучебной деятельности выступил в роли Frontend разработчика на Vue.js',
          'Был разработан сайт для обмена "отчётами" или документами.', "Регистрация/авторизация реализована через тг-бота.",
          "Авторизированные пользователи могут делиться отчётами и скачивать чужие, редактировать/удалять можно только свои"],
        [
          "На правах внешнего подрядчика реализовал программу клиентского учёта, администрирование удалённой базы данных. Создано табличное представление данных, редактирование и обновление. Клиентская часть была разработана на Java.",
          "Серверная часть была разработана на Python.",]
      ],
      words: ["сайт", "java", "vue.js", "python"],
    };
  },
  methods: {
    dialogShow() {
      this.showDialog = true;
    },
    sideBarShow() {
      this.showSideBar = true;
    },


    createTag(node, index, word) {
      const range = document.createRange();
      range.setStart(node.firstChild, index);
      range.setEnd(node.firstChild, index + word.length);
      let newTag;
      if (word === 'сайт') {
        newTag = document.createElement('a');
        newTag.href = 'https://juicysquad.site/';
        newTag.target = '_blank'
      }
      else {
        newTag = document.createElement('span');
      }
      newTag.style.color = "var(--color-text-special)";
      range.surroundContents(newTag);
    },

    findWord() {
      const node = document.getElementsByClassName("findWord");
      this.words.forEach((word) => {
        for (let i = 0; i < node.length; i++) {
          let index = node[i].textContent.toLowerCase().indexOf(word);
          if (index > -1) {
            this.createTag(node[i], index, word)
          }
        }
      });
    },
  },
  mounted() {
    this.findWord();
  },
};
</script>

<style scoped></style>
