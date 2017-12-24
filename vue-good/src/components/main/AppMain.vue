
<template>
    <div class="app-main app-box">
       <app-banner></app-banner>
       <app-list></app-list>
       <div class="more-button">
        更多热映电影
       </div>
       <app-more></app-more>
    </div>
</template> 

<script>
import AppBanner from "./AppBanner"
import AppList from "./AppList"
import AppMore from "./AppMore"
    export default {
        name:'app-main',
        components:{
            AppBanner,AppList,AppMore
        }
    }
</script>
<style >
        .more-button{
                width: 1.6rem;
    height: .3rem;
    border: .01rem solid #aaa;
    border-radius: 15px;
    margin: 10px auto 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
        }



</style>
