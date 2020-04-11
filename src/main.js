import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import '@/styles/app.scss'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', name: 'home', component: App },
      { path: '/foo', name: 'foo', component: { template: '<template>Foo</template>' }}
    ]
  }),
  render: h => h(App),
}).$mount('#app')
