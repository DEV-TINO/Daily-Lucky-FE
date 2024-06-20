<template>
  <div class="writing-container background-color">
    <div class="date">
      <div class="month-year main-color">
        {{ months[this.$store.state.calendarSelected.month - 1] }}
        {{ this.$store.state.calendarSelected.year }}
      </div>
      <div class="date-day main-color">
        {{ this.$store.state.calendarSelected.date }}
        {{ daysFullNames[this.$store.state.calendarSelected.day] }}
      </div>
    </div>
    <textarea
      class="lined-textarea"
      placeholder="Write today's diary"
      :value="content"
      @input="$emit('updateContent', $event.target.value)"
    ></textarea>
    <div class="upload-image" @click="handleClickUploadImage()">
      <input
        ref="upload"
        type="file"
        hidden
        @change="$emit('handleUploadImage', $event)"
      />
      <div
        class="image-box"
        v-if="imageUrl != ''"
        :style="{ backgroundImage: `url(${this.imageUrl})` }"
      ></div>
      <img v-if="imageUrl == ''" class="img" src="/images/cloud-arrow-up.png" />
      <div v-if="imageUrl == ''" class="img-text main-color">Upload Image</div>
    </div>
    <div
      class="upload-button color-text"
      @click="$emit('handleClickWriteDiary')"
    >
      글쓰기
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "WriteContent",
    computed: {
      ...mapState(["months", "daysFullNames"]),
    },
    props: {
      handleUploadImage: Function,
      handleClickWriteDiary: Function,
      updateContent: Function,
      imageUrl: String,
      content: String,
    },
    methods: {
      handleClickUploadImage() {
        this.$refs.upload.click();
      },
    },
  };
</script>

<style scoped>
  .writing-container {
    width: 100%;
    min-height: 510px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .date {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .month-year {
        padding-left: 35px;
        font-size: 24px;
      }
      .date-day {
        padding-right: 35px;
        font-size: 16px;
      }
    }
    .lined-textarea {
      width: 80%;
      height: 250px;
      background-image: url("/images/lines.png");
      background-size: contain;
      background-repeat: no-repeat;
      font-size: 18px;
      text-align: start;
      line-height: 31px;
      padding: 0;
      font-family: "custom-font";
      background-color: transparent;
      border: none;
      overflow: clip;
    }
    .lined-textarea:focus {
      outline: none;
    }
    .lined-textarea::placeholder {
      color: #ccc6ba;
      font-size: 14px;
    }
    .upload-image {
      width: 80%;
      min-height: 110px;
      height: fit-content;
      border: #988461 dashed 2px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 17px;
      padding-bottom: 10px;
      .image-box {
        width: 100%;
        height: 400px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
      .img {
        width: 24px;
        height: 24px;
      }
      .img-text {
        width: 106px;
        height: 28px;
        font-size: 24px;
      }
    }
    .upload-button {
      width: 80%;
      height: 41px;
      margin-top: 18px;
      margin-bottom: 18px;
      background-color: #f9e9c5;
      border-radius: 5px;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
