
<template>
    <div class="app-nav ">
           <nav>
                <li @click="[rout(nav.name),showNav()]"   :key="nav.id" v-for="nav in navs">{{nav.content}}<i class="fa fa-angle-right"></i></li>
           </nav>  
    </div>
</template> 

<script>
    export default {
        name:'app-nav',
        props:['showNav'],
        data:function(){
            return{
                navs:[
                    {id:1,content:"首页",name:"main"},
                    {id:2,content:"影片",name:"movie"},
                    {id:3,content:"影院",name:"main"},
                    {id:4,content:"我的",name:"main"},
                ]
            }

        },
            methods:{
                rout(name){
                    this.$router.push({name:name})
                }
            }
    }
</script>
<style lang="scss">

    .app-nav{
          animation-duration: .5s;
        width: 2.65rem;
       
        position:fixed;
        height: 100%;
        left: 0;
        top: 0;
        padding-top:.5rem;
        z-index: 400;
    
        nav{
          
            width: 100%;
            height: 100%;
             background: #282828;
            border-top: 1px solid #222;
             box-shadow: 0 1px 1px #363636 inset;
   
        }
        li{
         
            color: #9a9a9a;
            line-height:.5rem;
            width: 100%;
            padding: 0 16px;
            border-bottom: 1px dotted #333;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }


</style>

