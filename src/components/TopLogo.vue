<template>
  <div class="logo">
    <img class="image" src="/images/lucky-lucky.png" />
    <div class="title main-color">Daily Lucky</div>
  </div>
</template>

<script>
  export default {
    name: "TopLogo",
  };
</script>

<style scoped>
  .logo {
    margin-top: 51px;
    height: 68px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .image {
      width: 35px;
      height: 31px;
      margin-bottom: 5px;
    }
    .title {
      font-size: 10px;
    }
  }
</style>
