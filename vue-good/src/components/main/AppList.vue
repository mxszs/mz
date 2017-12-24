
<template>
    <div class="app-list ">
    <ul>
        <li class="list" v-for="item in build" :key="item.id" >
            <img width="100%" class="img-info" :src="item.cover.origin" :title="item.intro" :alt="item.intro">
            <div class="info-box">
                <div class="info">
                    <div class="info-name">{{item.name}}</div>
                    <div class="info-good">
                        <span>{{item.cinemaCount}}</span>
                        <span>家影院上映</span>
                        <span>{{item.watchCount}}</span>
                        <span>人购票</span>
                    </div>
                    
                </div>
                <div class="grade"><span>{{item.grade}}</span></div>
            </div>
        </li>
    </ul>
    </div>
</template> 

<script>
    import axios from 'axios'
    export default {
        name:'app-list',
         data:function(){
            return{
                build:[]
            }
        },
        methods:{
            getData(){
                let that = this
                //https://m.maizuo.com/v4/api/film/now-playing?__t=1514024036988&page=1&count=5
                axios.get("/mxs/v4/api/film/now-playing",{
                    params:{__t:Date.now()}
                }).then((response)=>{
                   // console.log(response)
                   that.build = response.data.data.films
                })
            }
        },
         created(){
            this.getData()
            
        },
    }
</script>
<style >
.info-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .5rem;
    padding-right: 0;
    padding-top: 13px;
    padding-left: .1rem;
}
   /* .info{
    height: .5rem;

   } */
   ul{
           padding-top: 18px;
           font-size: 8px;


   }
   .list{
    margin: 0 17px 17px 17px;
    background-color: #f9f9f9;
    -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
    -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
    box-shadow: 0.5px 0.5px 1px #a8a8a8;
    cursor: pointer;
   }
   .grade{
    color: #f78360;
    display: inline-block;
    line-height: 50px;
    float: right;
    margin-right: 15px;
    font-size: 18px;
   }

</style>
