/**
 * Created by Administrator on 2017-05-10.
 */
const Stylus = resolve => require(['@/studies/stylus/index'], resolve)
const Router = resolve => require(['@/studies/router/index'], resolve)
const Animate = resolve => require(['@/studies/animate/index'], resolve)

import Red from '@/studies/router/red'
import Green from '@/studies/router/green'
import Blue from '@/studies/router/blue'

export default [
  {path: '/stylus', component: Stylus},
  {
    path: '/router', component: Router,
    children: [
      {path: 'red',component: Red},
      {path: 'green',component: Green},
      {path: 'blue',component: Blue}
    ]
  },
  {path: '/animate', component: Animate}
]
