
<template>
    <div class="app-header">
        <div class="nav square">
            <i @click="showNav" class="fa fa-navicon"></i>
        </div>
        <div class="info-box">
           <div class="title">卖座电影</div> 
           <div class="info">
               <div class="city">
                   北京 <i class="fa fa-sort-down"></i>
               </div>
               <div class="user square">
                   <i class="fa fa-user-circle"></i>
               </div>
           </div>
        </div>
    </div>
</template> 

<script>
    export default {
         props:['showNav'],
        name:'app-header'
     
    }
</script>
<style  lang='scss'>
//@import '../../styles/app.scss';
    .app-header{
            background: #282828;
            position: fixed;
            z-index: 500;
            top: 0;
            right: 0;
            left: 0;
            width: auto;
            height: 0.5rem;
            line-height: 0.5rem;
            overflow: hidden;

            display: flex;
            color:rgb(233, 233, 233);
            .square{
                width: 0.5rem;height: 0.5rem;display: flex;justify-content: center;align-items: center;
            }

            .nav{
                border-right: 1px solid rgb(85, 85, 85);
                flex-grow: 0;flex-shrink: 0;
            }

            .info-box{
                 flex-grow: 1;
                display: flex;justify-content: space-between;align-items: center;
                .title{
                  
                   //font-size: 14px;
                    padding-left: 10px;
                }

                .info{
                    display: flex;
                }
            }
    }

</style>
