<template>
  <div class="calendar-container">
    <div class="calendar-logo">
      <img class="calendar-logo-image" src="/public/images/lucky-lucky.png"></img>
			<div class="calendar-logo-title">Daily Lucky</div>
    </div>
		<div class="calendar-footer-menu">
			<img class="footer-menu-image" src="/public/images/write.png">
			<img class="footer-menu-image" src="/public/images/calendar.png">
			<img class="footer-menu-image" src="/public/images/challenge.png">
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
	/* border: 1px solid black; */
}
.calendar-logo{
	margin-top: 51px;
	height: 68px;
	width: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* border: 1px solid black; */
}
.calendar-logo-image{
	width: 55px;
	height: 54px;
	/* border: 1px solid black; */

}
.calendar-logo-title{
	color: #958565;
	/* border: 1px solid black; */
}
.calendar-footer-menu{
	width: 100%;
	height: 64px;
	left: 0;
	right: 0;
	position: absolute;
	bottom:17px;
	display:flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	/* border: 1px solid black; */
}
.footer-menu-image{
	width: 42px;
	height: 60px;
	margin-right:70px;
}
.footer-menu-image:last-child{
	margin-right: 0;
}
</style>
