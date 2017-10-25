<template>
  <button class="Button button-dark">
    <slot>Button</slot>
  </button>
</template>


<style scoped>
  .button-dark {
    width: 100px;
    height: 50px;
    background-color: indigo;
    color: white;
    border: 0 solid black;
    border-radius: 2px;
  }
</style>
