<template>
    <div>
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "lh-content"
    }
</script>

<style scoped>
  .buy ~ div {
    font-size:30px;
  }
</style>
