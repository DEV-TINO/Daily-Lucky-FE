<template>
  <div class="select-date-container">
    <div class="header main-color">Due to</div>
    <div class="start-date color-coral">
      <div class="text">Start from..</div>
      <div class="start-select-box main-color">
        <div>
          <select
            class="select-date start main-color"
            v-model="startDate"
            @change="$emit('startDateChange', $event)"
          >
            <option v-for="date in startDateOptions" :key="date" :value="date">
              {{ date }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="end-date color-coral">
      <div class="text">End to..</div>
      <div class="end-select-box main-color">
        <div>
          <select class="select-date end main-color" v-model="endDate">
            <option v-for="date in endDateOptions" :key="date" :value="date">
              {{ date }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SelectDate",
    props: ["modelValue", "startDateOptions", "endDateOptions"],
    emits: ["update:modelValue", "startDateChange"],
    computed: {
      startDate: {
        get() {
          return this.modelValue.startDate;
        },
        set(value) {
          this.$emit("update:modelValue", {
            ...this.modelValue,
            startDate: value,
          });
        },
      },
      endDate: {
        get() {
          return this.modelValue.endDate;
        },
        set(value) {
          this.$emit("update:modelValue", {
            ...this.modelValue,
            endDate: value,
          });
        },
      },
    },
  };
</script>

<style scoped>
  .select-date-container {
    width: 80%;
    height: 293px;
    display: flex;
    flex-direction: column;
    .header {
      font-size: 24px;
    }
    .start-date {
      .text {
        font-size: 20px;
        margin: 27px 0px 21px 13px;
      }
      .start-select-box {
        font-size: 24px;
        text-align: center;
      }
    }
    .end-date {
      .text {
        font-size: 20px;
        margin: 30px 0px 21px 13px;
      }
      .end-select-box {
        font-size: 24px;
        text-align: center;
      }
    }
    .select-date {
      border: none;
      background-color: #f8f6e9;
      outline: none;
      font-size: 24px;
      font-family: "custom-font";
    }
  }
</style>
