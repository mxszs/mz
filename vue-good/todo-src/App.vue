<template>
  <div id="app">
    <app-header :toggleSelet="toggleSelet" :toggleInsertBox="toggleInsertBox"></app-header>  
    <app-content :isShowselet="isShowselet" :toggleInsertBox="toggleInsertBox" ></app-content>
   
    <transition enter-active-class='animated fadeInDown'  leave-active-class='animated fadeOutDown'>
      <ApptroNav :toggleSelet="toggleSelet" key="lte"  v-if="isShowselet" ></ApptroNav>
      <app-nav v-else></app-nav>
     </transition>
   
    <transition enter-active-class='animated fadeIn'  leave-active-class='animated fadeOut'>  
    <app-add v-if="isShowNew" :toggleInsertBox="toggleInsertBox" ></app-add>
    </transition>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader"
import AppContent from "./components/AppContent"
import ApptroNav from "./components/ApptroNav"
import AppNav from "./components/AppNav"
import AppAdd from "./components/Appadd"
export default {
  name: 'app',
  data:function(){
   return{
      isShowNew :false,
      isShowselet:false
   }
   
  
  },
 methods:{
    toggleInsertBox(){
      this.isShowNew = !this.isShowNew
    },
     toggleSelet(){
      this.isShowselet = !this.isShowselet
    }
  },
  components:{
    AppHeader,AppContent,AppNav,AppAdd,ApptroNav
  }
}
</script>










<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.card-content-inner {
	width: 80%;
	height: 5rem;
}

.allx {
	padding: 0 !important;
	margin-left: 2rem;
}

.hidden {
	margin-right: 1rem;
	background: none;
	display: none;
}

.content {
	top: 2.5rem;
	padding-bottom: 2.5rem;
	overflow: scroll;
}

.card-content.todo-card {
	display: flex;
}

.but-box {
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

.finished {
	border: 1px solid rgb(42, 218, 56);
}

.wwc {
	border: 1px solid red;
}

.bar {
	background: none;
}

.bar:before {
	content: "";
}

.bz {
	float: right;
	margin: .5rem;
	text-align: end;
}

.space {
	margin-left: 2rem;
}

.check-box .check {
	width: 1rem;
	height: 1rem;
}

.success {
	color: green;
}

.undone {
	color: red;
}

.bar-tabe {
	display: flex;
	justify-content: space-around;
	align-items: center;
	line-height: 2rem;
	text-align: center;
}

.cieal {
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
  transition: all .5s;
}

.all {
	width: 2rem;
	height: 2rem;
	border: 1px solid rgb(21, 104, 212);
	border-radius: 50%;
}

.fin {
	width: 2rem;
	height: 2rem;
	border: 1px solid greenyellow;
	border-radius: 50%;
}

.unfin {
	width: 2rem;
	height: 2rem;
	border: 1px solid pink;
	border-radius: 50%;
}

.fin.active {
	border: none;
	background: rgb(21, 212, 53);
	color: #fff;
}

.all.active {
	border: none;
	background: blue;
	color: #fff;
}

.unfin.active {
	border: none;
	background: red;
	color: #fff;
}

.mask {
	position: absolute;
	width: 100%;
	height: 100vh;
	z-index: 999;
	background: rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
}

.insert-box {
	width: 70%;
	height: 15rem;
	background: #fff;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}

.insert-box textarea {
	width: 80%;
	height: 50%;
	border: 1px solid rgb(224, 224, 224);
}

.insert-box .btn-box {
	width: 70%;
	display: flex;
	justify-content: space-around;
}

.card.users.todo-card {
	width: 100%;
}

.chick {
	display: none;
}

.card .todo-card {
	width: 90%;
}

.seclet.card {
	display: flex;
	align-items: center;
}

.check-box {
	width: 10%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

</style>
