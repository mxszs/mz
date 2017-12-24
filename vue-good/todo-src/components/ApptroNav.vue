<template>
    <nav class="bar bar-tab bar-tabe">
                <div @click="controlSelected(1)" :class="['cieal','all active']">完成</div>
				<div @click="controlSelected(2)" :class="['cieal','fin active']">未完</div>
				<div @click="controlSelected(3)" :class="['cieal','unfin active']">移除</div>
				<div @click="toggleSelet" :class="['cieal','all active']">取消</div>
    </nav>
    
</template>

<script>
import bus from '../modules/bus'
export default {
    name:'app-control-nav',
    props:['toggleSelet'],
    data(){
        return {
         
        }
    },
    methods:{
        controlSelected(type){
            bus.$emit('control-selected-todo',type)
        }
    }
}

</script>

<style scoped>
   
</style>