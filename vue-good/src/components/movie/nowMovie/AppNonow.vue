<template>
    <div class="app-nonow app-box">
      <ul class="list-movie">
            <li v-for="item in films" :key="item.id" class="list-item">
                <div class="films-item">
                <div class="films-item-img">
                    <img :src="item.poster.thumbnail" :title="item.name" :alt="item.intro">
                </div>
                <div class="films-desc">
                    <div class="films-name">
                        <span>{{item.name}}</span>
                        <span class="item-pf"> <i class="fa fa-angle-right"></i></span>
                      
                    </div>
                    <div class="films-info">
                        {{item.intro}}
                    </div>
                    <div class="films-count">
                        <span>{{item.premiereAt}}</span>
                        <span>{{item.mdae}}</span>
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
        name:"app-nonow",
        data:function(){
                return{
                    films:[],
                        
                   
                   
                }
        },
        methods:{
            getData(){
                let that =this
                https://m.maizuo.com/v4/api/film/coming-soon?__t=15141027589
               axios.get("/mxs/v4/api/film/coming-soon",{
                   params:{__t:Date.now()}
               }).then((response)=>{
                        this.films = response.data.data.films

                         this.films.forEach((item)=>{
                            item.premiereAt =  this.getLocalTime(item.premiereAt)
                             // console.log(this.getLocalTime(item.premiereAt))
                         })
                        console.log(response)
               })
            },
             getLocalTime(nS) { 
                return new Date(parseInt(nS)).toLocaleDateString().substr(5).replace("/","月")+"日上映";
                 }
               
        },
        created(){
            this.getData()
            
        }
        // updated(){
        //     this.getLocalTime()
        // }
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
.films-count span{
       line-height: 24px;
    color: #ffb375;
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
