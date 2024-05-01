<template>
  <div class="calendar-container">
    <div class="calendar-logo">
      <img class="calendar-logo-image" src="/public/images/lucky-lucky.png"></img>
			<div class="calendar-logo-title">Daily Lucky</div>
    </div>
		<div class="calendar-month">
			<div class="month-leftright calendar-months"><</div>
			<div class="month-now calendar-months">
				<div class="month-now-month">April</div>
				<div class="month-now-year">2024</div>
			</div>
			<div class="month-leftright calendar-months">></div>
		</div>
		<div class="calendar-calendar">
			<div class="calendar-calendar-day">
				<div class="calendar-day">SUN</div>
				<div class="calendar-day">MON</div>
				<div class="calendar-day">TUE</div>
				<div class="calendar-day">WED</div>
				<div class="calendar-day">THU</div>
				<div class="calendar-day">FRI</div>
				<div class="calendar-day">SAT</div>
			</div>
			<div class="calendar-calendar-date">
				<div v-for="(week,index) in weeks":key="index" class="calendar-date-week"> 
					<div class="calender-date-week-date">1 2 3 4 5 6 7</div>
				</div>
			</div>
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
		return{
			date:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
			weeks:[1,2,3,4,5,6]
		}
	}
};
</script>

<style scoped>
.calendar-container{
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* border: 1px solid black; */
}
.calendar-logo{
	margin-top: 51px;
	height: 68px;
	width: 100%;
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
.calendar-month{
	width:100%;
	height: 72px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color:#958565;
	/* border: 1px solid black; */
}
.calendar-months{
	margin-right: 115px;
	font-size: 32px;
}
.calendar-months:last-child{
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
	margin-bottom: 10px;
}
.calendar-calendar{
	width:100%;
	height:415px;
	/* border:1px solid red; */
}
.calendar-calendar-day{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width:100%;
	height: 46px;
	/* border:1px solid blue; */
}
.calendar-day{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-right: 18px;
	width:28px;
	height:27px;
	color: #958565;
	font-size: 18px;
	border-bottom:2px solid #958565;
	/* border:1px solid green; */
}
.calendar-day:first-child{
	color: #DD6262;
	border-bottom: 2px solid #DD6262;
}
.calendar-day:last-child{
	margin-right: 0px;
	color:#737FE9;
	border-bottom: 2px solid #737FE9;
}
.calendar-calendar-date{
	width: 100%;
	height: 375px;
	border:1px solid red;
}
.calendar-date-week{
	width: 100%;
	height: 60.5px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size:14px;
	color:#958565;
	border: 1px solid;
}
.calendar-challenge{
	position: absolute;
	bottom: 94px;
	width: 100%;
	height: 141px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: rgba(249, 233, 197, 0.35);
	border-bottom: 2px solid #DDCBAC;
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
	width: 40px;
	height: 55px;
	margin-right:60px;
}
.footer-menu-image:last-child{
	margin-right: 0;
}
</style>