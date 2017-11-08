// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bulma/css/bulma.css'
import 'vue-awesome'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.component('icon', Icon)

Icon.register({
  'thara-blue': {
    width: 32,
    height: 32,
    paths: [
      {
        style: 'fill:#386ebe',
        d: 'M5.512 7.772l-0.693 3.563 19.167 0.349-1.578 8.117 5.305 0.076 2.27-11.679-24.472-0.427z'
      },
      {
        style: 'fill:#fff',
        d: 'M22.772 11.709h-0.778l0.429-2.391h0.77l-0.422 2.391z'
      },
      {
        style: 'fill:#fff',
        d: 'M24.020 11.709h-0.778l0.429-2.391h0.77l-0.422 2.391z'
      },
      {
        style: 'fill:#383838',
        d: 'M26.994 23.904l0.693-3.563-19.167-0.349 1.578-8.117-5.305-0.076-2.27 11.679 24.472 0.427z'
      }
    ]
  }
})

Icon.register({
  'thara-white': {
    width: 32,
    height: 32,
    paths: [
      {
        style: 'fill:#fff',
        d: 'M5.512 7.772l-0.693 3.563 19.167 0.349-1.578 8.117 5.305 0.076 2.27-11.679-24.472-0.427z'
      },
      {
        style: 'fill:#386ebe',
        d: 'M22.772 11.709h-0.778l0.429-2.391h0.77l-0.422 2.391z'
      },
      {
        style: 'fill:#386ebe',
        d: 'M24.020 11.709h-0.778l0.429-2.391h0.77l-0.422 2.391z'
      },
      {
        style: 'fill:#383838',
        d: 'M26.994 23.904l0.693-3.563-19.167-0.349 1.578-8.117-5.305-0.076-2.27 11.679 24.472 0.427z'
      }

    ]
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
