<template>
  <div class="calendar-container">
    <div class="calendar-logo">
      <img class="calendar-logo-image" src="/public/images/lucky-lucky.png"></img>
			<div class="calendar-logo-title">Daily Lucky</div>
    </div>
  </div>
</template>

<script>
export default {
	name: "CalendarPage",
	data(){
		return{}
	}
};
</script>

<style scoped>
.calendar-container{
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.calendar-logo{
	margin-top: 51px;
	height: 68px;
	width: 366px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.calendar-logo-image{
	width: 55px;
	height: 54px;
}
.calendar-logo-title{
	color: #958565;
}

</style>
