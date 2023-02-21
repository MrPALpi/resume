<template>
  <div class="wrap">
    <div  class="side">
    <div class="head-about">
        <h2 v-scrolleffect class="flying_TextX">
            На правах внешнего подрядчика была реализована программа клиентского учёта, <span style="color:#0057ff">администрирование удалённой базы данных.</span>
        </h2>
        <h2 class="flying_TextX">Реализовано было удобное представление, редактирование и обновление данных. Клиентская часть была разработана на Java.</h2>
        <h2 class="flying_TextX">Серверная часть была разработана на Python.</h2>
    </div>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.side{
    display: flex;
    justify-content: right;
    /* flex-wrap: wrap;
    flex-grow: 1; */
}
.text-pad{
    padding: 10px 10px 10px;
    /* flex-wrap: wrap;
    flex-grow: 1; */
    width: 55%;
}
.flying_TextX {
  transform: translateX(50%);
  opacity: 0;
  /* filter: blur(10px); */
  /* scale: 0.6; */
  /* transition: all 1s ease 0s; */
}

.flying_TextX.element-show {
  transform: translate(0px, 0px);
  opacity: 1;
  /* filter: blur(0px); */
  /* scale: 1; */
  transition: all 1.2s ease-in-out 0.1s;
}
</style>