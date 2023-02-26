<template>
       <div class="wrap">
        <div class="head-avatar">
            <img class="avatar"  @mouseleave="mouseOut" @mouseover="mouseOver"  :src="require('../assets/'+massImg[0])" alt="" />
        </div>
        <div class="head-about">
            <h1 class="hi">Hello!</h1>
            <div class="descriptionMe">
                <h3>Меня зовут Саша, и я студент-программист, каких много нас самом-то деле, но мне нравится, что делаю и я всегда готов совершенствовать свои навыки! Люблю участвовать в создании проектов, которые можно попробовать, увидеть, поэтому решил заняться Frontend разработкой. Вообще я могу не только во Front, например: получил сертификат участника хакатона <span style="color:var(--color-text-special)"> «Цифровой прорыв. Сезон:
искусственный интеллект в Уральском федеральном округе»</span>, пришлось жёстко кодить на питоне! Подробнее о моих достижения и мне ниже <a style="color:var(--color-text-special)" href="https://github.com/MrPALpi">или здесь</a>!</h3>
            </div>
        </div>
    </div>
</template>
<!-- @mouseleave="mouseOut" @mouseover="mouseOver" -->
<script>

export default {

    props: {
        massImg: {
            reguired: true,
            default: [],
        },
    },
    methods: {
        mouseOver() {
            setTimeout(
                () =>
                (document.getElementsByClassName(
                    "avatar"
                )[0].src = `${require('../assets/'+this.massImg[1])}`),
                100
            );
        },
        mouseOut() {
            setTimeout(
                () =>
                (document.getElementsByClassName(
                    "avatar"
                )[0].src = `${require('../assets/'+this.massImg[0])}`),
                100
            );
        },
    },

};
</script>

<style>
h3{
    font-family: monospace;
    font-weight: 700;
    font-size: 1.3rem;
}

.descriptionMe{

   
}
.wrap {
    margin: 6% 6% 4% 6%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.head-about {
    width: 55%;
    padding: 10px 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
   
}



.hi {
    font-family: monospace;
    font-size: 10vw;
    width: 7ch;
    color: var(--color-text-special);
    white-space: nowrap;
    overflow: hidden;
    border-right: 1vw solid var(--color-text);
    animation: cursor 0.75s step-end infinite, printed_text 5.25s steps(7);
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

.head-avatar {
    width: 40%;

    padding: 10px 10px 10px;
}

.avatar {
    border-radius: 5px;
    width: 100%;
    max-width: 700px;
    transition: all 0.4s ease-in-out;
    height: auto;
}

.avatar:hover {
    filter: invert(100%);
}

.head-about {}


@keyframes cursor {
    0% {
        border-color: var(--color-text);
    }

    50% {
        border-color: transparent;
    }

    100% {
        border-color: var(--color-text);
    }
}

@keyframes printed_text {
    from {
        width: 0;
    }
}

</style>
