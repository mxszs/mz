<template>
    <div class="app-now app-box">
        <ul class="list-movie">
            <li v-for="item in films" :key="item.id" class="list-item">
                <div class="films-item">
                <div class="films-item-img">
                    <img :src="item.poster.thumbnail" :title="item.name" :alt="item.intro">
                </div>
                <div class="films-desc">
                    <div class="films-name">
                        <span>{{item.name}}</span>
                        <span class="item-pf">{{item.grade}} <i class="fa fa-angle-right"></i></span>
                      
                    </div>
                    <div class="films-info">
                        {{item.intro}}
                    </div>
                    <div class="films-count">
                        <span>{{item.cinemaCount}}</span>
                        <span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>{{item.watchCount}}</span>
                        <span>人购票  </span>
                    </div>
                </div>
                </div>  

            </li>
        </ul>

    </div>
</template> 
<script>
import axios from 'axios'
export default {
        name:"app-now",
        data:function(){
                return{
                    films:[]
                }
        },
        methods:{
            getData(){
                let that =this
               axios.get("/mxs/v4/api/film/now-playing",{
                   params:{__t:Date.now()}
               }).then((response)=>{
                        this.films = response.data.data.films
                        console.log(response)
               })
            }
        },
        created(){
            this.getData()
        }
}
</script>
<style lang="scss">
body{
     background: #f9f9f9;
}
.list-movie{
        width:100%;
         background: #f9f9f9;
}
.films-item{
    display: flex;
    width: 100%;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
}
.films-item .films-item-img img{
    width:60px;
    height: 80px;
}
.films-desc{
     margin-left:.15rem; 
}
.films-name{
    width: 2.5rem;
    display:flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 32px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.films-info{
    height: 24px;
    line-height: 24px;
    color: #8e8e8e;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
}
.films-count{
        line-height: 24px;
    color: #8e8e8e;
    font-size: 12px;
}
.item-pf{
    font-size: 16px;
    line-height: 32px;
    color: #fc7103;
}
.item-pf i{
     color: #8e8e8e;
}
</style>
