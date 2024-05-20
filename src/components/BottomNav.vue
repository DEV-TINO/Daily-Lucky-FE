<template>
  <!-- Bottom Nav -->
  <div class="bottom-nav">
    <div
      v-for="(menu, index) in bottomMenu"
      :key="index"
      :class="`menu-${menu}`"
      @click="handleClickMenu(menu)"
    >
      <img :class="`${menu}-img`" :src="`/images/${menu}.png`" />
      <div :class="`${menu}-text`">{{ menu }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bottomMenu: ["write", "calendar", "challenge"],
      };
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

<style lang="css" scoped>
  .bottom-nav {
    width: 100%;
    min-height: 64px;
    max-height: 64px;
    height: 64px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ddcbac;
    gap: 50px;

    .menu-write,
    .menu-calendar,
    .menu-challenge {
      width: 45px;
      height: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
    }

    .write-img,
    .calendar-img,
    .challenge-img {
      width: 37px;
      height: 35px;
    }

    .write-text,
    .calendar-text,
    .challenge-text {
      font-size: 10px;
      color: #988461;
    }
  }
</style>
