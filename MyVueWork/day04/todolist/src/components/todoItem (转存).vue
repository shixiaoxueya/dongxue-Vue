<template>
    <li>
        <label>
         <!--  v-model脏数据  :v-model 本身就是数据双向绑定   当你点击这个input时
          你要考虑到  你已经触发了数据的双向绑定  因为数据属性绑定  导致我们在totoitem
          这个组将中  直接修改了APP的   虽然说功能可以实现   但是这种方式违反了我们数据
          传递的规则  会使我们的项目在后期很难维护  所以我们不应该在todoitem中直接修改app的数据 -->

          <!-- 处理方案  
              1.将app传递过来的数据在item中转存一次
                  这种处理方式 我们不会直接修改到  app 中的数据 

            app中的checked是需要被修改的    footer中也会用到

                操作todoitem时  我们要修改APP中的数据
                        第一种方案  总线机制    bus        
                  
          -->


          <!-- 
            什么时候不通知父组件进行修改 (这种情况比较少)
                当父组件分发给子组件数据时   每一个子组件拿到数据之后是独立操作的
                   互相之间是没有什么逻辑关联的  那子组件可以把父组件的数据直接转存下来随意操作

            什么时候通知父组件进行修改 
                  若之间是有逻辑关联时   我们在转存的的前提下   每一次修改  我们得主动通知父组件;
                  让父组件完成修改
           -->
            <input type="checkbox"  v-model="checked" @change="change(item.id)"/>
            <span>{{item.content}}</span>
        </label>
        <button class="btn btn-danger" style="display:none">删除</button>
    </li>
</template>

<script>
    export default {
        name: 'todoItem',
        props:{
          item:Object
        },
        data(){
          return {
              checked:this.item.checked
          }
        },
        methods:{

          //这个函数调用时 要去修改app中的checked数据
          change(id){
              this.bus.$emit("change",id,this.checked)
          }
        }
       
    }
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
