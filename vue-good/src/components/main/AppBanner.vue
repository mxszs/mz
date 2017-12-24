
<template>
    <div class="app-banner  swiper-container">
        <div class="swiper-wrapper">
            <div v-for="item in build" :key="item.id" class="swiper-slide">
                <img width="100%" :src="item.imageUrl" :title="item.name" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template> 

<script>
import swiper from 'swiper'
import axios from "axios"
    export default {
        name:'app-banner',
        data:function(){
    return{
        build:[]
    }
        },
        methods:{
            
            getData(){
               let that = this
               // https://m.maizuo.com
                axios.get(" /mxs/v4/api/billboard/home",{
                        params:{__t:Date.now()}
                }).then((response)=>{
                   // console.log(response)
                    that.build = response.data.data.billboards
                })
            }
        },
        created(){
            this.getData()
            
        },
        updated(){
            new swiper('.app-banner',{autoplay:{delay:2000}})
            
        }

    }
</script>
<style >

</style>
