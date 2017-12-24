
<template>
  <nav  class="bar bar-tab bar-tabe app-nav">
	<div :key="_type.type" @click="changeType(_type.type)" :class="['cieal',_type.type,showType==_type.type?'active':'']" v-for="_type in types">{{_type.con}}</div>
	</nav>


</template>

<script>
import bus from "../modules/bus"
export default {
    name:'app-nav',
     data(){
        return {
          types: [{
			type: "all",
			con: "所有"
		}, {
			type: "fin",
			con: "完成"
		}, {
			type: "unfin",
			con: "未完"
		}],
        showType:"all"
        }
    },
    methods:{
            changeType(type){
                bus.$emit("change-type",type)
                this.showType = type
            }
    }
}

</script>


