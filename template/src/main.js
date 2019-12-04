/*
 * @Descripttion: 
 * @version: 
 * @Author: guozhikun
 * @Date: 2019-12-04 14:15:55
 * @LastEditors: guozhikun
 * @LastEditTime: 2019-12-04 14:36:45
 */
import Vue from 'vue';
import App from './App.vue'
<%_ if (options.vuex) { _%>
import store from './store'
<%_ } _%>

<%_ if (options.elementUI) { _%>
import ElementUI from 'element-ui';
Vue.use(ElementUI);
<%_ } _%>


new Vue({
    <%_ if (options.vuex) { _%>
    store,
    <%_ } _%>
    render: h => h(App)
  }).$mount('#app')