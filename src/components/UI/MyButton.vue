<template>
  <button class="btn">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.btn {
  /* align-self: flex-end; */
  padding: 10px 15px;
  /* color: #fff; */
  color: var(--color-text-black);
  /* border: 2px solid var(--color-text-me); */
  border: none;
  /* background-color: var(--color-bg); */
  border-radius: 8px;
  font-family: var(--font);
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
}

.btn:hover {
  color: var(--color-text);

  /* border: 2px solid var(--color-bg); */
  /* background-color: var(--color-text-me); */
}
</style>
