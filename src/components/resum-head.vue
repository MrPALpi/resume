<template>
       <div class="head-wrap">
        <div class="head-avatar">
            <img class="avatar"  @mouseleave="mouseOut" @mouseover="mouseOver"  :src="massImg[0]" alt="" />
        </div>
        <div class="head-about">
            <h1 class="hi">Hello!</h1>
            <div class="descriptionMe">
                <h3>My name is Polina and | am one of many UX/UI designers, but the only one
you really need! | love what | do and appreciate the quality in my work

In design, the main thing for me is to find a balance between convenience and
aesthetics, while not angering the developers. | am passionate about paying
my rent and not starving myself. And of course, design</h3>
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
                )[0].src = `${this.massImg[1]}`),
                100
            );
        },
        mouseOut() {
            setTimeout(
                () =>
                (document.getElementsByClassName(
                    "avatar"
                )[0].src = `${this.massImg[0]}`),
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
.head-wrap {
    margin: 4% 6% 4% 6%;
    display: flex;
    flex-wrap: wrap;
}

.head-about {
    width: 55%;
    padding: 10px 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
}



.hi {
    font-family: monospace;
    font-size: 10vw;
    width: 7ch;
    color: #0057ff;
    white-space: nowrap;
    overflow: hidden;
    border-right: 1vw solid white;
    animation: cursor 0.75s step-end infinite, printed_text 5.25s steps(7);
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

.head-avatar {
    width: 40%;
    margin-right: auto;
    flex-grow: 1;
    padding: 10px 10px 10px;
}

.avatar {
    border-radius: 5px;
    width: 100%;
    transition: all 0.4s ease-in-out;
}

.avatar:hover {
    filter: invert(100%);
}

.head-about {}


@keyframes cursor {
    0% {
        border-color: black;
    }

    50% {
        border-color: transparent;
    }

    100% {
        border-color: black;
    }
}

@keyframes printed_text {
    from {
        width: 0;
    }
}

</style>
