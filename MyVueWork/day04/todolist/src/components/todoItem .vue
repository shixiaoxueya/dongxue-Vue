<template>
    <li :class="{line:checked}">
        <label>       
            <input type="checkbox"  v-model="checked"/>
            <span>{{item.content}}</span>
        </label>
        <button class="btn btn-danger" 
          @click="delTodo"
          >删除</button>
    </li>
</template>

<script>
    export default {
        name: 'todoItem',
        props:{
          item:Object
        },
        
        computed:{
            checked:{
              get(){
                return this.item.checked
              },
              set(val){
                  this.bus.$emit("change",this.item.id,val)
              }
            }
        },
        methods:{
          delTodo(){
            //把id传给app
            this.bus.$emit("delTodo",this.item.id)
          }
        }
       
    }
</script>

<style scoped>

.line{
  position: relative;
}
.line:after{
    display: block;
    content:"";
    height: 1px;
    width: 90%;
    background: red;
    position: absolute;
    top: 50%;
}


li:hover{
  background: orange;
}
li:hover button{
  display: block;
}
/* .highLight{
  background: orange;
} */
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
  position: relative;
  z-index: 99;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
 <!--  v-model脏数据  :v-model 本身就是数据双向绑定   当你点击这个input时
          你要考虑到  你已经触发了数据的双向绑定  因为数据属性绑定  导致我们在totoitem
          这个组将中  直接修改了APP的   虽然说功能可以实现   但是这种方式违反了我们数据
          传递的规则  会使我们的项目在后期很难维护  所以我们不应该在todoitem中直接修改app的数据 -->

          <!-- 处理方案  
              1.将app传递过来的数据在item中转存一次
                  这种处理方式 我们不会直接修改到  app 中的数据 

            app中的checked是需要被修改的    footer中也会用到

                操作todoitem时  我们要修改APP中的数据
                        第一种方案  总线机制    bus 转存+ change时间
                        第二种方案      直接使用计算属性 
                                  取值: 计算机属性的get方法
                                  设置值的时候:计算属性的set方法   
                  
          -->