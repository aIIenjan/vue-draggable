import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

const Hello = (resolve) => {
  import('components/Hello').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Hello'
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
