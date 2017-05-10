import Vue from 'vue'
import Router from 'vue-router'
import studyRouter from '@/studies/study-router';

Vue.use(Router)

export default new Router({
  routes: [
    ...studyRouter
  ]
})
