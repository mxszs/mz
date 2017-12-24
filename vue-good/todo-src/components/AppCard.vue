
<template>
   <div class="card app-card" :class="{finished:item.isFinished}">
	<div class="card-content todo-card">
						<div class="check-box">
							<span v-if="item.isFinished" class="success bz icon icon-emoji"></span>
							<span v-else  class="undone bz icon icon-me"></span>
							<input  :class="{chick:!isShowselet}" v-model="item.isShowseleted"  type="checkbox" />

						</div>
						<div  class="card-content-inner space">{{item.new}}</div>
						<div class="but-box">
							<button @click="finish(item.id)" :class="{'button-fill':item.isFinished}" class="button button-small button-success icon icon-check "></button>
							<button @click="remove(item.id)" class="button button-small button-fill button-danger icon icon-remove"></button>
						</div>
					</div>
				</div>
</template>

<script>
export default {
    name:'app-card',
    props:["item","finish","remove","isShowselet"],
     data(){
        return {
          
        }
    }
}

</script>

