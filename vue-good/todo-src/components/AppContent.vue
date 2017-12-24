
<template>
   <div class="content app-content">
				 <p v-if="todo.length==0">你还没有添加任何消息</p> 
                <app-card  :isShowselet="isShowselet" :finish="finish" :class="{seclet:isShowselet,users:!isShowselet}" :remove="remove" v-for="item in showTodo" :key="item.id" :item="item"  ></app-card>
			</div>
</template>

<script>
import AppCard from "./AppCard"
import bus from "../modules/bus"
export default {
    name:'app-content',
    components:{
        AppCard
    },
    props:[  'toggleInsertBox','isShowselet'],
     
    
     data(){
        return {
          xx: JSON.parse(localStorage.todo ? localStorage.todo : '[]').length,
			todo: JSON.parse(localStorage.todo ? localStorage.todo : '[]'),
          showType:'all'
        }
    },
    methods:{
        addNew: function(newtodo) {
			console.log(newtodo)
			this.xx++,
				console.log(this.xx)
			this.todo.push({
				new:newtodo,
				isFinished: false,
				isShowselet: false,
                id: this.xx, 
			})
			this.toggleInsertBox()
			this.updateStorage()
		},
        finish: function(id) {
			this.todo.forEach((item) => {
				if(item.id == id) {
					item.isFinished = !item.isFinished
				}
			})
			this.updateStorage()
		},
		remove: function(id) {
			for(let i = 0; i < this.todo.length; i++) {
				if(this.todo[i].id == id) {
					this.todo.splice(i, 1)
				}

			}
			this.updateStorage()
			return;
		},
		
        controlSelected(type){//控制选择的todo，1：完成选中的，2 未完成选择的 3.移除选择的
           
            if(type==3){
                
                var arr = []
                this.todo.forEach((item)=>{
                    if(!item.isShowseleted){
                        arr.push(item)
                    }
                })
                this.todo = arr

                return ;
            }
            this.todo.forEach((item)=>{
                if(item.isShowseleted){
                    item.isFinished = type==1?true:false
                   
                }
            })
            this.updateStorage()
		},
		updateStorage() {
			localStorage.todo = JSON.stringify(this.todo)
		},
    },
    computed: {
		fin: function() {
			var arr = []
			this.todo.forEach((item) => {
				if(item.isFinished) {
					arr.push(item)
				}
			});
			return arr;
		},
		unfin: function() {
			var arr = []
			this.todo.forEach((item) => {
				if(!item.isFinished) {
					arr.push(item)
				}
			});
			return arr;
		},
		showTodo: function() {
			switch(this.showType) {
				case 'all':
					return this.todo;
					break;
				case 'fin':
					return this.fin;
					break;
				case 'unfin':
					return this.unfin;
					break;
				default:
					return this.todo;
					break;
			}
		}

	},
     mounted(){
        bus.$on('change-type',function(type) {
            this.showType = type
        }.bind(this))
         bus.$on('add-new',function(newtodo) {
            this.addNew(newtodo)
        }.bind(this))
		bus.$on("control-selected-todo",function (type) {
           this.controlSelected(type)
		}.bind(this))
		
    }
}

</script>


