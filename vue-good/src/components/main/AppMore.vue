
<template>
    <div class="app-main reactid">
      <div class="dividing-line">
          <div class="upcoming">
              即将上映
          </div>
      </div>
      <ul>
          <li class="movie" :key="item.id" v-for="item in films">
              <img class="Image" :src="item.cover.origin" :title="item.name" :alt="item.intro">
              <div class="all">
              <div class="left">{{item.name}}</div>
              <div  class="right">{{item.premiereAt}}</div>
              </div>
          </li>
      </ul>
      <div class="more-but">
          更多即将上映电影
      </div>
    </div>
</template> 

<script>
    import axiso from "axios"
    export default {
        name:'app-more',
        data:function(){
            return {
                films:[]
            }
        },
        methods:{
              
            //https://m.maizuo.com/v4/api/film/coming-soon?__t=1514081333376&page=1&count=3
            getData(){
                let that = this
                    axiso.get("/mxs/v4/api/film/coming-soon",{
                        params:{__t:Date.now()}
                    }).then((response)=>{
                         this.films = response.data.data.films.slice(0,3)

                         this.films.forEach((item)=>{
                            item.premiereAt =  this.getLocalTime(item.premiereAt)
                             // console.log(this.getLocalTime(item.premiereAt))
                         })
                    
                    })
            },
           getLocalTime(nS) { 
                return new Date(parseInt(nS)).toLocaleDateString().substr(5).replace("/","月")+"日上映";
                 } 
        },
        created(){
            this.getData()
           
        },
        updated(){
           
             this.getLocalTime() 
             console.log(1)
        }
    }
</script>

<style  >
  .dividing-line{
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #a8a8a8;
   
  } 
   .upcoming {
    width: .65rem;
    height: 20px;
    margin: 0 auto;
    margin-bottom: -10px;
    border-radius: 5px;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: #eee;
    background: #a7a7a7;
}
.movie{
        margin: 0 17px 17px 17px;
    background-color: #f9f9f9;
    -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
    -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
    box-shadow: 0.5px 0.5px 1px #a8a8a8;
    cursor: pointer;
}
 .Image{
         display: block;
        width: 100%;
        height: auto;
 }
 .all{
     display: flex;
     justify-content:space-between;
     align-items: center;
 }
 .left{
    height: 35px;
    padding-right: 0;
    padding-top: 10px;
    padding-left: .1rem;
 }
 .right{
    font-size: 10px;
    color: RGB(245, 162, 125);
    line-height: 15px;
    height: 35px;
    padding-right: 0.5rem;
    padding-top: 10px;
 }
 .more-but{
    width: 1.6rem;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
 }
</style>


