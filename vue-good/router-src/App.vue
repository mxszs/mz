<template>
  <div id="app">
     <button @click="toMain">to main</button>
        <router-link to="/main"  >main</router-link>
        <router-link :to="{name:'news'}"  >news</router-link>
        <router-link class='abc' tag="button" to="/news">news</router-link>
        <p>content:</p>
        <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data:function() {
    return {
    }
  },
  methods:{
      toMain(){
         

            this.$router.push({name:'main'})

      }
  }

}

</script>

<style >
.router-link-active{
    color:red;
}


</style>
