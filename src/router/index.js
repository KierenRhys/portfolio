import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resume&skills',
      name: 'Resume & Skills',
      component: Resume
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
