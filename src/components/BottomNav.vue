<template>
  <!-- Bottom Nav -->
  <div class="bottom-nav background-color">
    <div
      class="menu"
      v-for="(value, key, index) in bottomMenu"
      :key="index"
      @click="handleClickMenu(value)"
    >
      <img class="image" :src="`/images/${value}.png`" />
      <div class="text color-bottom-text">{{ value }}</div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    computed: {
      ...mapState(["bottomMenu"]),
    },
    methods: {
      handleClickMenu(menu) {
        if (menu === "write") {
          this.$router.push("/write");
        } else if (menu === "calendar") {
          this.$router.push("/calendar");
        } else if (menu === "challenge") {
          this.$router.push("/challenge");
        }
      },
    },
  };
</script>

<style scoped>
  .bottom-nav {
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ddcbac;
    gap: 50px;

    .menu {
      width: 45px;
      height: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .image {
      width: 37px;
      height: 35px;
    }

    .text {
      font-size: 10px;
    }
  }
</style>
