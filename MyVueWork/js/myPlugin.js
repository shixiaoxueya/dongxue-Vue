(function (w){
    w.myPlugin = Object.create(null);

    w.myPlugin.install = function (Vue){
        Vue.component("v-dx",{
            template:"<div>v-dx</div>"
        })


        Vue.directive('focus',{
            // 当被绑定的元素插入到 DOM 中时……
            inserted: function (el) {
                // 聚焦元素
                el.focus()
            }
        })


        Vue.filter('filterDate',function (value){
            return moment(value).format('YYYY-MM-DD HH:mm:ss');
        })
    }
})(window)