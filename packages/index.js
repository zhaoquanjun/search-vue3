import 'element-plus/dist/index.css'
import './theme-chalk/index.js'
import QJsearch from './search/index.vue' //引入封装好的组件
const coms = [ QJsearch ] //将来如果有其他逐渐，都可以写在这个数据里

//批量组件注册
const install = function (Vue) {
  coms.forEach(com => {
    Vue.component(com.name, com)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install, //这个方法以后在使用的时候可以被use调用
  ...coms
} 
