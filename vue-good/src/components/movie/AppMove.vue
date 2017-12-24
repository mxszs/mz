
<template>
    <div class="app-movie app-box">
         <div class="movied-nav">
            <router-link class="movie-left list-m" :to="{name:'now'}"><span>正在热映</span></router-link>
           <router-link class="movie-right list-m" :to="{name:'nonow'}"><span>即将放映</span></router-link>
            <router-view></router-view>
        </div> 

    </div>
</template> 

<script>
    export default {
        name:'app-movie',
        data:function(){
            return {
                isShow:false
            }
        }
    }
</script>
<style lang="scss" >


a:hover{
    text-decoration: none;
color: #fe6e00 ; 
}
a{
   color: #fe6e00 ; 
}
.router-link-active{
    
      border-bottom:3px solid #fe6e00 ;
      
}

.app-movie{
    height: 100%;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
     background-color: #f9f9f9;
}
    .movied-nav{
   
    background-color: #f9f9f9;
   
    height: 46px;
     border-bottom: solid #fe6e00 1px;
    }
    .movie-left{

    float: left;
    width: 50%;
    height: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 46px;
    color: #6a6a6a;
    cursor: pointer;
     line-height: 46px;
    padding-bottom: 5px;

    
    }
    .movie-right{
   float: right;
    width: 50%;
    height: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 46px;
    padding-bottom: 5px;
    color: #6a6a6a;
    cursor: pointer;
    }
 
   
</style>
