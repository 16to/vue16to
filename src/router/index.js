import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import skill from '@/components/skill'
import special from '@/components/special'
import works from '@/components/works'
import system from '@/components/system'
import skillDetail from '@/components/skillDetail'
import specialDetail from '@/components/specialDetail'
import search from '@/components/search'

import about from '@/components/about'
import me from '@/components/about/me'
import link from '@/components/about/link'
import contact from '@/components/about/contact'
import faq from '@/components/about/faq'
import map from '@/components/about/map'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'home',
      component: home
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
      path: '/system',
      name: 'system',
      component: system
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      children:[
          {
             path: 'me',
             name: 'me',
             components: {
                default:about,
                aboutView:me
             }
          },
          {
             path: 'map',
             name: 'map',
             components: {
                default:about,
                aboutView:map
             }
          },
          {
             path: 'contact',
             name: 'contact',
             components: {
                default:about,
                aboutView:contact
             }
          },
          {
             path: 'faq',
             name: 'faq',
             components: {
                default:about,
                aboutView:faq
             }
          },
          {
             path: 'link',
             name: 'link',
             components: {
                default:about,
                aboutView:link
             }
          }
      ]
    },
    {
      path:"*",
      redirect:"/index"
    }
  ],
  mode:'history'
})
