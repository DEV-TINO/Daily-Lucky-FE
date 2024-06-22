<template>
  <div class="container">
    <div class="header main-color">Create Challenge!</div>
    <div class="contents">
      <div class="title main-color">Title</div>
      <textarea
        v-model="title"
        class="title-textarea main-color"
        placeholder="Write challenge title"
      ></textarea>
      <div class="content main-color">Contents</div>
      <textarea
        v-model="contents"
        class="content-textarea main-color"
        placeholder="Write challenge contents"
      ></textarea>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CreateChallenge",
    props: ["modelValue"],
    emits: ["update:modelValue"],
    computed: {
      title: {
        get() {
          return this.modelValue.title;
        },
        set(value) {
          this.$emit("update:modelValue", {
            ...this.modelValue,
            title: value,
          });
        },
      },
      contents: {
        get() {
          return this.modelValue.contents;
        },
        set(value) {
          this.$emit("update:modelValue", {
            ...this.modelValue,
            contents: value,
          });
        },
      },
    },
  };
</script>

<style scoped>
  .container {
    height: auto;
    width: 100%;
    margin-top: 29px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header {
      height: 30px;
      width: 333px;
      display: flex;
      justify-content: flex-start;
      font-size: 24px;
    }
    .contents {
      height: 220px;
      width: 80%;
      margin-top: 17px;
      font-size: 24px;
      .title-textarea {
        width: 100%;
        height: 37px;
        margin-bottom: 15px;
        box-sizing: border-box;
        background-image: url("/images/line.png");
        background-position: bottom;
        background-size: contain;
        background-repeat: no-repeat;
        font-size: 14px;
        text-align: start;
        line-height: 35px;
        font-family: "custom-font";
        background-color: transparent;
        border: none;
        overflow: clip;
        resize: none;
        text-wrap: nowrap;
      }
      .title-textarea::placeholder {
        color: #ccc6ba;
      }
      .title-textarea:focus {
        outline: none;
      }
      .content-textarea {
        width: 100%;
        height: 80px;
        box-sizing: border-box;
        background-image: url("/images/line2.png");
        background-position: bottom;
        background-size: contain;
        background-repeat: no-repeat;
        font-size: 14px;
        text-align: start;
        line-height: 40px;
        font-family: "custom-font";
        background-color: transparent;
        border: none;
        overflow: clip;
        resize: none;
      }
      .content-textarea::placeholder {
        color: #ccc6ba;
      }
      .content-textarea:focus {
        outline: none;
      }
    }
  }
</style>
