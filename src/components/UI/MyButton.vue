<template>
  <button class="btn">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style>
.btn {
  cursor: pointer;
  margin: 5px;
  background: none;
  padding: 10px 15px;
  color: var(--color-text);
  font-size: 1.4em;
  border: none;
  font-weight: 600;
  border-radius: 17px;
  font-family: var(--font);
  transition: background-color 0.4s ease-in-out, color 0.2s ease-in-out,
    border-color 0.4s ease-in-out;
}

.btn:hover {
  color: var(--color-text-special);

}
</style>
