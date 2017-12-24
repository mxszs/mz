<template>
  <div class="inside">
     
        <ul>
            <router-link  :to='{name:"detil",params:{id:_new.id},query:{con:_new.con}}' v-for="_new in news" :key="_new.id" ><li>{{_new.con}}</li></router-link>
        </ul>

  </div>

</template>

<script>
export default {
    name:"inside",
    data:function(){
        return {
            news:[
            {id:1,con:"新闻1"},
            {id:2,con:"新闻2"},
            {id:3,con:"新闻3"}
            ]
        }
    }
}
</script>
