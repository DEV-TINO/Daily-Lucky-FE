<template>
  <div class="calendar-container">
    <div class="calendar-logo">
      <img class="calendar-logo-image" src="/public/images/lucky-lucky.png"></img>
			<div class="calendar-logo-title">Daily Lucky</div>
    </div>
		<div class="calendar-month">
			<div class="month-leftright calendarMonth"><</div>
			<div class="month-now calendarMonth">
				<div class="month-now-month">April</div>
				<div class="month-now-year">2024</div>
			</div>
			<div class="month-leftright calendarMonth">></div>
		</div>
		<div class="calendar-challenge">
			<img class="calendar-challenge-image" src="/public/images/lucky-sad.png"></img>
			<div class="calendar-challenge-contents">아직 아무 챌린지도 없어요...</div>
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
	font-size: 10px;
	/* border: 1px solid black; */
}
.calendar-challenge{
	position: absolute;
	bottom: 94px;
	width: 100vh;
	height: 141px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: rgba(249, 233, 197, 0.35);
	border: 2px solid #DDCBAC;
}
.calendar-challenge-image{
	width: 87px;
	height: 72px;
	margin-right:28px; 
}
.calendar-challenge-contents{
	font-size: 24px;
	color: #958565;
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
.calendar-month{
	width:100vh;
	height: 72px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color:#958565;
	/* border: 1px solid black; */
}
.calendarMonth{
	margin-right: 115px;
	font-size: 32px;
}
.calendarMonth:last-child{
	margin-right: 0px;
}
.month-now{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.month-now-month{
	font-size: 48px;
	margin-bottom: 5px;
}
.month-now-year{
	font-size:10px;
	margin-bottom: 10%;
}
</style>
