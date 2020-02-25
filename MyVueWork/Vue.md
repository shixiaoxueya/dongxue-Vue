![image-20200221142542928](C:\Users\轮滑小姐姐\AppData\Roaming\Typora\typora-user-images\image-20200221142542928.png)

# Vue

### 介绍描述

* 渐进式JavaScript框架(可插拔式)
* 作者尤雨溪(以为华裔前Google工程师)
* 作用:动态构建(显示)用户界面

### Vue的特点

* 遵循MVVM模式
* 编码简洁,体积小,运行效率高,适合移动/pc端开发
* 它本身只关注UI,轻松引入vue插件或其他第三方库开发项目

### 与其他前端JS框架的关联

* 借鉴angular的**模板**和**数据绑定**技术
* 借鉴react的**组件化**和**虚拟DOM**技术

### Vue扩展插件

* vue-loader:vue模板加载器

* vue-cli:vue脚手架
* vue-resource(axios):ajax请求
* vue-router: 路由
* vuex: 状态管理
* vue-lazyload: 图片懒加载
* vue-scroller: 页面滑动相关
* mint-ui: 基于vue的UI组件库(移动端)
* element-ui: 基于vue的UI组件库(PC端)



## 深入的了解MVVM与mvc

### Vue的MVVM模式

* mvc
  * 后台的一种设计模式,后台负责渲染界面,将渲染成功后的界面交给浏览器(服务端渲染);前端只需要花界面,写动态效果,将写完的页面以.html结尾  发给后台,后台拿到后将.html换成.jsp  将数据库中的数据渲染到jsp上,将成功渲染的jsp交给前端
* mvvm(前后端分离)
  * 前端的一种设计模式,后台只负责吐数据;前端拿到后台吐出来的数据;将这个数据放到一个仓库中;再过框架(vue)将仓库中的数据优雅高性能的渲染到html上
* mvc和mvvm那个性能高
  * mvc(服务端渲染  后台管理项目  企业级项目  toB  B:企业)
    * 可以让前端省下赛数据的过程.理论上来讲,mvc性能高
    * 但是再高并发(同时有10000000人访问这个站点)的情况下,mvc的性能是极低的;低在用户拿到界面的过程会变的很慢;可是拿到之后渲染还是很快的,因为省下了赛数据的过程
  * mvvm(前后端分离  toC的项目  面向客户端  淘宝  京东) 那个性能高?
    * 在高并发的情况下,mvvm的性能是极高的,因为这个时候我们去后台拿的是数据(json  体积比页面小太多)    高在拿数据的这个过程是极快的,界面的渲染是相对慢一点
  * 为什么现在提倡使用mvvm?
    * 因为mvvm有一个致命的有点:
      * 可以让后台程序员从前端的技术中脱离处理;让他们一心想着怎么快速图数据
      * 可以让前端程序员从后台技术的苦海中脱离处理;让他们一心想着怎么优雅的渲染界面
      * 可以提高整个项目的开发速度

![image-20200223193700791](C:\Users\轮滑小姐姐\AppData\Roaming\Typora\typora-user-images\image-20200223193700791.png)

![image-20200221101948885](C:\Users\轮滑小姐姐\AppData\Roaming\Typora\typora-user-images\image-20200221101948885.png)

> 三个单词的简写

#### 第一个小练习

vue是一个可插拔的渐进式MVVM框架!!!

### vue的四大特征

* 声明式编程
  * 区别dom编程
* 响应式数据(数据单向流)
  * vue data对象的所有属性都会转绑给对应的vue实例
  * data中的所有数据  都是响应式数据  数据的改变会触发界面的更新
    * 当一个vue实例创建时,它将data对象中的所有的属性加入到vue的响应式系统中,当这些属性的值发生改变时,试图将会产生响应,匹配新的值
  * 值得注意的是只有当实例被创建时 data 中存在的属性才是响应式的
    * 如果说你知道你会在晚些时候需要一个属性,但是一开始它为空或不存在,那么你仅需要设置一些初始值
* 数据双向流(model-->view   view-->model)(表单标签)
  * v-model实现了数据双向流
* 数据驱动
  * 没有必要给函数做响应式,函数是用来执行一段逻辑的
  * 函数的值 在整个开发过程中,不会去改变,不能把函数放在data中
  * vue时支持在data定义函数的,函数中执行this指向的是widow

#### vue编码的注意点

* 所有需要在界面上展现的数据应该都要在data中定义一遍
* 在使用vue开发的过程中,我们所有的编码一般情况下是不会写在配置对象外部的(使用生命周期钩子)
* 事件对应的回调函数应该注册在配置对象的method属性中

## vue的指令

##### 插值表达式

* 数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值

```js
<span>Message: {{ msg }}</span>
```



* 在我们的模板中，我们一直都只绑定简单的属性键值。但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持 

  ```js
  {{ number + 1 }}
      {{ ok ? 'YES' : 'NO' }}
      {{ message.split('').reverse().join('') }}
      
      <!-- 这是语句，不是表达式 -->
      {{ var a = 1 }}
      
      <!-- 流控制也不会生效，请使用三元表达式 -->
      {{ if (ok) { return message } }}
  ```

  #### 注意

  > 模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。
  > 你不应该在模板表达式中试图访问用户定义的全局变量。 

# vue的指令

* 指令 (Directives) 是带有 v- 前缀的特殊特性。指令特性的值预期是单个 JavaScript 表达式 (v-for
  是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，
  响应式地作用于 DOM

#### 数据绑定

* v-text 

  * 更新元素的text Content

  * ```js
    msg:"不要着急"
    ```

* v-html

  * 更新元素的inner HTML

  * ```js
    htmlStr:"<strong>不要着急</strong>"
    ```

* 还有插值 {{}}

* v-module(双向数据绑定)

#### 事件

* v-on

  * 绑定事件监听器,用在普通元素上时，只能监听原生 DOM 事件 

  ```js
  <button v-on:click="doThis"></button>
  <button @click.stop="doThis"></button>
  <button @click.prevent="doThis"></button>
  <button @click.stop.prevent="doThis"></button>
  ```

  * 修饰符
    *  .stop - 调用 event.stopPropagatio
    *  .prevent - 调用 event.preventDefault()
    *  .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
    *  .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
       * 13|enter按键的key或则是名字都可以
    *  .once - 只触发一次回调。
    *  .left - (2.2.0) 只当点击鼠标左键时触发。
    *  .right - (2.2.0) 只当点击鼠标右键时触发。
    *  .middle - (2.2.0) 只当点击鼠标中键时触发。
  * 参数
    * 默认传递事件的event对象为回调函数的第一个参数
    * 如果回调函数的第一个参数被占用 则需显示的传递$event标识

#### 样式

> 操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是属性，
> 所以我们可以用 v-bind 处理它们：只需要通过表达式计算出字符串结果即可。
> 因此，在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。
> 表达式结果的类型除了字符串之外，还可以是对象或数组。

* class

  * 表达式的结果为字符串

  - 表达式的结果为对象   
  - 表达式的结果为数组  
        数组包字符串
        数组包对象

* style

  * 表达式的结果为对象   

  - 表达式的结果为数组    
        数组包对象   

#### 流程控制

* 分支

  * v-show
    根据表达式之真假值，切换元素的 display CSS 属性。
  * v-if
  * v-else
  * v-else-if
        根据表达式的值的真假条件渲染元素
        <span style="color:red">这三个指令一定要连用!</span>

* 循环

  * v-for

    * 用来循环数组

  ```js
      <div v-for="(item, index) in arr"></div>
    //参数顺序很重要  不能乱写
      //item,index可以被当做是data中的数据来使用
      //item数组中的每一项
      //index:当前项在数组中的下标
  ```


  ​    

    * 基于源数据多次渲染元素或模板块
    
    * 此指令的值，必须使用特定语法
    
    ```js
    
    <div v-for="(val, key, index) in object"></div>
    //参数顺序很重要  不能乱写
    //val,key,index可以被当做是data中的数据来使用
    //val对象的属性值
    //key:对象的属性名
    //index:属性在对象中的下标
    ```

#### 其他(不常用)

*  v-pre:填充静态模板  不需要vue解析的标签
   *  跳过这个元素和它的子元素的编译过程。
   *  可以用来显示原始的标签。
   *  跳过大量没有指令的节点会加快编译
*  v-cloak:避免闪屏
   *  vue的指令最终是不会污染标签的;vue在模板全部解析完毕之后会将所有的指令从html身上移除.而v-cloak是最后一个被移除的
   *  这个指令保持在元素上直到关联实例结束编译。所有的v-cloak可以和 [v-cloak] { display: none } 一起结合使用，让模板还没有解析成功的情况下不在页面上做显示
   *  这个指令可以隐藏未编译的标签直到实例准备完毕
*  v-once
   * 只渲染元素和组件一次。模板只被渲染一次
   * 元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能              

##### 数组更新检测

> 由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
>  当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
>  当你修改数组的长度时，例如：vm.items.length = newLength
>
> 由于js的限制,vue中不能直接通过index去修改数组的数据
>
> ​        如果通过index去修改数组的数据 数据是可以被修改的
>
> ​        但是界面得不到更新 vue的数据会失去响应式的能力
>
> ​        我们应该使用数组的变异方法 才能有效的更新界面

* Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：
  * push()
  * pop()
  * shift()
  * unshift()
  * splice()
  * sort()
  * reverse()        

##### 对象更新检测

> 由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除
> 对于已经创建的实例，Vue 不能动态添加根级别的响应式属性。
>  但是，

* 可以使用 Vue.set(object, key, value) 方法向嵌套对象添加响应式属性

* 你还可以使用 vm.$set 实例方法，它只是全局 Vue.set 的别名
* 最好不是用这个方法  需要用到的属性  先定义一下

##### key值

>  Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。
>  这么做可以使 Vue 变得非常快. 但这样也不总是符合实际需求，
>  所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。
>  只需添加一个具有唯一值的 key 属性即可.
>
>  在新旧 nodes 对比时辨识 VNodes。如果不使用 key，
>  Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。
>  而使用 key 时，它会基于 key 的变化重新排列元素顺序

* 在v-if中使用key 可以使展示的input展示自己的值
* vue在渲染的时候 100% 是一个元素 一个span(内存模型)
  *  :key 后面的内容 一定要是唯一的
* 在v-for循环中使用key,提高代码渲染  暂时这边在使用v-for的使用 key值指定为index![image-20200224093039413](C:\Users\轮滑小姐姐\AppData\Roaming\Typora\typora-user-images\image-20200224093039413.png)

### vue配置项

* vue的配置项:
  * el:选定一个挂载元素
  * data:响应式数据
  * methods:事件的回调函数

#### vue计算属性

> 在vue中,如果你分析需求发现:一个数据要依赖于data中的其他数据时,那一定要想到计算属性
>
> 计算属性时基于他们响应式依赖进行缓存的



>  模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。
>  在模板中放入太多的逻辑会让模板过重且难以维护.
>  所以，对于任何复杂逻辑，你都应当使用计算属性
>
>  ```js
>  <div id="example">
>  {{ message.split('').reverse().join('') }}
>  </div>
>  ```
>
>  

* 特点

  * 当计算属性依赖的属性发生变化时,计算属性会重新执行,渲染界面
  * 计算属性的get方法会在vue初始化渲染的时候  执行一次
  * 计算属性的get方法会在其依赖的属性发生变化时  重新执行
  * 计算属性的set方法会在计算属性本身产生改变的时候   被执行且set方法的第一个参数时改完的那个值
  * 计算属性会使用缓存
  * 计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。
    多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数

* 计算属性和method的区别

  >  初始化的时候,如果模板上调用了该函数  该函数会被调用两次

  > 任何一个在模板上使用的data数据产生变化 函数会被执行两次

  * 方法的调用一直都是两次连续调用的 方法在任何一个模板上使用的data数据产生变化  都会被执行两次  方法没有缓存
  * 计算属性的调用一直都是一次调用  计算属性只有在自己关联的属性产生变化时才会被调用  计算属性拥有缓存

##### 计算机属性vs侦听器

语法不灵活

> Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。
> 当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch——特别是如果你之前使用过 AngularJS。
> 然而，通常更好的做法是使用计算属性而不是命令式的 watch 回调![image-20200224202639364](C:\Users\轮滑小姐姐\AppData\Roaming\Typora\typora-user-images\image-20200224202639364.png)

#### 数组方法的使用实例

```js
1. 当前这个数组的api可以干嘛 filter可以用来做过滤
   怎么代表通过测试?
   callback 返回 true 表示该元素通过测试

2. 当前这个数组的api有几个参数
    callback
    item index array
3. 当前这个数组的api返回值是什么
    一个新的、由通过测试的元素组成的数组
4. 当前这个api 会不会影响老数组
   filter不会影响老数组
```

#### get和set方法

* get & set 方法让属性的设置 语法上变的比较复杂

* get & set 方法让属性变的更安全 更强大

## vue实例对象

* 所有配置对象的data属性(对象)所对应的属性都会转绑给Vue实例对象
* 一个Vue实例就是一个组件对象

### 属性

* vm.$root(只读)
  *  当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己
* vm.$el(只读)
  *  Vue 实例使用的根 DOM 元素。
* vm.$options(只读)
  *  用于当前 Vue 实例的初始化选项。需要在选项中包含自定义属性时会有用处 
* vm.$data
  * Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象属性的访问

### 方法

> el两个作用
>
> ​    确定了vue根组件挂载到那个节点下
>
> ​    确定了根组件的模板
>
>   只要有template 是一个覆盖过程
>
>   没有template 是一个挂载过程

* vm.$mount( [elementOrSelector] )       
  * 如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态(可以使用template选项指定模板)
        没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。
* vm.$set(object, key, value) 
      vm.$set 实例方法，它只是全局 Vue.set 的别名 
* vm.$watch
      除了 watch 选项之外，您还可以使用命令式的 vm.$watch API。
      vm.$watch('a.b.c', function (newVal, oldVal) {
        // 做点什么
      })    

### 事件

* vm.$on
      监听当前实例上的自定义事件。事件可以由
* vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。
  * vm.$emit
        触发当前实例上的事件。附加参数都会传给监听器回调
* vm.$once
  监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器
* vm.$off
  * 移除自定义事件监听器。
  * 如果没有提供参数，则移除所有的事件监听器；
  * 如果只提供了事件，则移除该事件所有的监听器；
  * 如果同时提供了事件与回调，则只移除这个回调的监听器

# vue的组件系统

* 什么是组件
  * 狭义上讲   组件技术就是一个标签
* 组件的能力
  * 可以去简化我们的界面; 让我们的界面变的一块一块的!!!
* vue组件
  * 在vue中只有根组件才能使用el这个配置
  * 在vue中只有根组件的data属性可以是个对象
  * 在非根组件中  el的两个功能需要使用  组件的名字&template模板来代替
  * 在非根组件中  由于非根组件很有可能被调用很多次  所以非根组件的数据是相互独立的     
  * 在非分组件中  data得是一个函数
* cosmponent全局组件在全局都可以使用 当前界面的任何根组件
* components局部组件只可以在定义的地方使用
* 组件间的关系看的是组件的使用位置
* 定义的位置 为什么要在上面
  * 跟Vue的生命周期有关 只有在new Vue的时候 Vue身上的所有相关机制都应该要注册

> 组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。
> 仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树：

![image-20200224221416360](C:\Users\轮滑小姐姐\AppData\Roaming\Typora\typora-user-images\image-20200224221416360.png) 	

### 组件名称规则

定义时：驼峰
使用时：用-连接符来连接

### vue组件(全局组件)

* 在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例。

* 在 Vue 中注册组件很简单

* 定义个组件  Vue.component('todo-item', { template: ''})

* 在子组件中不能使用el配置 el配置只能由根组件使用

  因为子组件中没有办法使用el

  * 不知道怎么挂载

    *  靠匹配组件名(不是挂载 而是覆盖)

  * 模板怎么定义

    * 通过template定义

      ![image-20200224222508604](C:\Users\轮滑小姐姐\AppData\Roaming\Typora\typora-user-images\image-20200224222508604.png)

* 只有在根组件中 data才允许是一个对象

* 在其他非根组件中data应该定义成一个对象

* 这个函数应该要返回一个对象

### vue组件(局部组件)

在根组件里面的一个属性

```js
components:{
                "v-damu":{
                    template:"<div>{{msg}}</div>",
                    data(){
                        return {
                            msg:"戏子入画 一生天涯"
                        }
                    }
                }
            }
```

![image-20200224224035964](C:\Users\轮滑小姐姐\AppData\Roaming\Typora\typora-user-images\image-20200224224035964.png)

### 父组件如何向子组件传递数据

* (父组件通过一个自定义属性向子组件传递数据)
  * 在自定义组件里面加:传递
* (子组件通过props属性来接受父组件的数据)
  * 在子组件里面用props来接

#### 使用细节1

* 在非根组件中data的定义必须是一个函数
* 函数返回的对象才是真正意义上数据的存储仓库(data)
* 这样设计的目的是为了让每个组件间的数据都是独立的 互不影响

#### 使用细节2

* 在html5的规范下 table底下只能使用tr标签  ul下放li  ol下放 li
* <tr is = "v-row"></tr>用is来解决  is后面是自定义的组件

#### 使用细节-3

* 一个组件就是一个vue实例

* vue实例 能 定义vue自定义事件

  ​      vm.$on

* 如果在组件上使用@符号 相当与是给当前组件定义vue事件

* 这个@放在了身上就去神那去找

#### 使用细节-4props的特性

* props特性 非props特性
  * props特性属性(出现在组件的props列表中)                            	
    * 组件不会继承
  * vue指令                                                          
    * 组件不会继承
  * 非props特性属性(没有出现在组件的props列表中 不是一个vue指令)   class
    * 组件继承

##  vue的生命周期

> 每个 Vue 实例在被创建时都要经过一系列的初始化过程
>     ——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。
> 同时在这个过程中也会运行一些叫做生命周期钩子的函数，
> 这给了用户在不同阶段添加自己的代码的机会

#### 钩子函数

* 1)	vue生命周期函数
  *  初始化显示
    * beforeCreate()
    *   created()   ajax请求最早可以发送的地方
    * beforeMount()
    *    mounted()   如果需要界面做一些操作  最后在这个钩子里  ajax请求发送最安全的地方
  * 更新状态: this.xxx = value
    * beforeUpdate()
    *  updated()
  * 销毁vue实例: vm.$destory()
       * beforeDestory()
       * destoryed()
* 2)	常用的生命周期方法
  * created()/mounted(): 发送ajax请求, 启动定时器等异步任务
  * beforeDestory(): 做收尾工作, 如: 清除定时器       

![image-20200225190403977](C:\Users\轮滑小姐姐\AppData\Roaming\Typora\typora-user-images\image-20200225190403977.png)

![image-20200225201229781](C:\Users\轮滑小姐姐\AppData\Roaming\Typora\typora-user-images\image-20200225201229781.png)

### 父向子传值

> 通过标签属性传值
>     如果子组件的props接收了 那这个标签属性就具有props特性
>     如果子组件的props没有接收 那这个标签属性就是一个普通的自定义          属性

* 父组件如何向子组件传值
  * 父组件通过标签属性的形式向子组件传值。
  * 子组件可以通过props属性正常接收到来自父组件的值。
  * 但值得注意的是 子组件接收到父组件的值后不应该修改接收到的值， 因为该值果然是一个对象，而且被几个子组件共同引用着。那很有可能会导致脏数据      
  *  非得改这数据，应该怎么办？
    *   转存一份，再改     
* 在vue中组件间传值是要单向数据流的,子组件不能随意修改来着父组件的值

### props

* props的验证

  *  我们可以为组件的 prop 指定验证要求，例如你知道的这些类型。如果有一个需求没有被满足，
  * 则 Vue 会在浏览器控制台中警告你。这在开发一个会被别人用到的组件时尤其有帮助

* 验证方式

  *  props:[] 数组；数组的每一项表示接受父组件传过来的哪些属性（无法做验证）

  * props:{} 对象；通过键值对的形式表示接受父组件传过来的哪些属性

    * key ：哪些属性   value：验证规则

    * key:type    

    *  key:[type1,type2]  

    *  key:{
                  type: String,

      ​			//一般required和default不会一起使用

      ​             required: true，
      ​              //default: 100  默认值可以是一个值也可以是一个函数
      ​              // 对象或数组默认值必须从一个工厂函数获取
      ​                default: function () {
      ​                             return { message: 'hello' }
      ​                   }
      ​                 //自定义验证
      ​                   validator: function (value) {
      ​                          // 在这可以写很多复杂的验证逻辑
      ​                               return ['success', 'warning', 'danger'].indexOf(value) !== -1
      ​                        }
      ​      } 

## 子向父传值

* 子向父传递数据的方案

  * 父组件通过一个标签属性向子组件传递一个方法
* 子组件通过props来接受并检验这个方法
  *  子组件在自身的内部调用父组件传过来的方法;
* 并且通过该方法的形参向父组件传递数据
  * 当前这个方案 子向父传递数据 是父亲主动的
*  应该让子组件自己去找都组件
* 使用@符号 相当与是给当前组件定义vue事件
  * this.$emit("add",this.step) 去调用![image-20200225212515230](C:\Users\轮滑小姐姐\AppData\Roaming\Typora\typora-user-images\image-20200225212515230.png)

### 非父子

* 总线机制
  * 利用原型链
  * 注册  调用
  * 总线小练习

> 一个vue组件就是一个vue实例?
>
> ​      var "v-a" = new VueComponent()
>
> ​      VueComponent.prototype = Object.create(Vue.prototype)
>
> ​      VueComponent.prototype = 对象
>
> ​      对象.__proto__ = Vue.prototype
>
> ​      v-a.bus 有没有可能 会在Vue.prototype上找到?
>
> ​        v-a 没有bus属性
>
> ​        VueComponent.prototype 没有bus属性
>
> ​        Vue.prototype 上找bus属性

* PubSub
  * 引用 PubSub

### vue过渡动画

> Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。
>
> v-if   v-show

##### transtion组件

* Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡
* 条件渲染 (使用 v-if)
* 条件展示 (使用 v-show)

> 当插入或删除包含在 transition 组件中的元素时，Vue 将会做以下处理
>     自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名
>     在进入/离开的过渡中，会有 6 个 class 切换。

*  v-enter：
              定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
*   v-enter-active：
              定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，
              在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
*  v-enter-to:
              2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效
              (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
*   v-leave:
              定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
*   v-leave-active：
              定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，
              在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。
              这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
* v-leave-to:
              2.1.8版及以上 定义离开过渡的结束状态。
              在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除

![image-20200225225344650](C:\Users\轮滑小姐姐\AppData\Roaming\Typora\typora-user-images\image-20200225225344650.png)

>   对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 <transition>，则 v- 是这些类名的默认前缀。
>     如果你使用了 <transition name="my-transition">，那么 v-enter 会替换为 my-transition-enter。

### ref

> ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。
> 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；
> 如果用在子组件上，引用就指向组件实例

#### 表单元素的输入绑定

> 你可以用 v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。

* number   转数字     v-model.number
* trim   首位去空格    v-model.trim 
* lazy   懒加载             v-model.lazy 

> 单个复选框，绑定到布尔值
>    checked 应该是一个布尔值
>      <input type="checkbox" id="checkbox" v-model="checked">
>      <label for="checkbox">{{ checked }}</label>
> 多个复选框，绑定到同一个数组
>     checkedNames:应该是一个数组
>         <div id='example-3'>
>           <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
>           <label for="jack">Jack</label>
>           <input type="checkbox" id="john" value="John" v-model="checkedNames">
>           <label for="john">John</label>
>           <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
>           <label for="mike">Mike</label>
>           <br>
>           <span>Checked names: {{ checkedNames }}</span>
>         </div>
>
> 单选按钮      
>     picked 应该对应到一个字符串 字符串代表value
>
>     <div id="example-4">
>       <input type="radio" id="one" value="One" v-model="picked">
>       <label for="one">One</label>
>       <br>
>       <input type="radio" id="two" value="Two" v-model="picked">
>       <label for="two">Two</label>
>       <br>
>       <span>Picked: {{ picked }}</span>
>     </div>
>
>  选择框
>     单选时selected 为一个字符串
>     <div id="example-5">
>       <select v-model="selected">
>         <option disabled value="">请选择</option>
>         <option>A</option>
>         <option>B</option>
>         <option>C</option>
>       </select>
>       <span>Selected: {{ selected }}</span>
>     </div>
>     
>     多选时selected 为一个数组
>     <div id="example-6">
>       <select v-model="selected" multiple style="width: 50px;">
>         <option>A</option>
>         <option>B</option>
>         <option>C</option>
>       </select>
>       <br>
>       <span>Selected: {{ selected }}</span>
>     </div>

#### 过滤器

[过滤器文档](https://cn.vuejs.org/v2/guide/filters.html)

> Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：**双花括号插值和 `v-bind` 表达式** (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

全局过滤器

![image-20200225233302783](C:\Users\轮滑小姐姐\AppData\Roaming\Typora\typora-user-images\image-20200225233302783.png)