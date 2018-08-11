import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import art from '@/components/art'
import design from '@/components/design'
import skill from '@/components/skill'
import special from '@/components/special'
import works from '@/components/works'
import system from '@/components/system'
import about from '@/components/about'
import contact from '@/components/contact'
import skillDetail from '@/components/skillDetail'
import specialDetail from '@/components/specialDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'home',
      component: home
    },
    {
      path: '/design',
      name: 'design',
      component: design
    },
    {
      path: '/skill',
      name: 'skill',
      component: skill,
    },
    {
      path:'/skill/detail/:id',
      name:'skillDetail',
      component:skillDetail
    },
    {
      path: '/special',
      name: 'special',
      component: special
    },
    {
      path:'/special/detail/:id',
      name:'specialDetail',
      component:specialDetail
    },
    {
      path: '/works',
      name: 'works',
      component: works
    },
    {
      path: '/art',
      name: 'art',
      component: art
    },
    {
      path: '/system',
      name: 'system',
      component: system
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path:"*",
      redirect:"/index"
    }
  ],
  mode:'history'
})
