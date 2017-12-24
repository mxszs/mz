<template>
  <div id="app">
    <app-header :showNav="showNav"></app-header> 
      <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
      <app-nav :showNav="showNav" v-if="isNavShow"></app-nav>
      </transition>
       <transition enter-active-class="animated fadeIn" leave-active-class=" animated fadeOut">
      <div @click="isNavShow=false" v-if="isNavShow" class="mask"></div>
      </transition>
     
      <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/header/AppHeader'
import AppNav from './components/nav/AppNav'
export default {
  name: 'app',
  data:function() {
    return {
        isNavShow:false
    }
  },
  methods:{
          showNav(){
            this.isNavShow = !this.isNavShow
          },
        

  },
  components:{AppHeader,AppNav}

}

</script>

<style lang="scss">
  @import './styles/app.scss';
  .mask{
    animation-duration: .5s;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    position: fixed;
    z-index: 399;
    top:0;
    left: 0;
  }
  

</style>

