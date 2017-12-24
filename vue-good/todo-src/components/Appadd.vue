
<template>
        <div class="mask app-add" >
				<div class="insert-box">
					<textarea v-model='newtodo'></textarea>

					<div class="btn-box">
						<button @click="addNew(newtodo)" class="button button-fill button-success">完成</button>
						<button @click="toggleInsertBox"  class="button button-fill button-danger">取消</button>
					</div>

				</div>

			</div>

</template>

<script>
import bus from "../modules/bus"
export default {
    name:'app-add',
     props:{
       toggleInsertBox:Function
    },
     data(){
        return {
          newtodo:''
        }
    },
    methods:{
        addNew(){
            bus.$emit("add-new",this.newtodo)
            this.newtodo = ''
        }
    }
}

</script>

