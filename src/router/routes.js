import HelloWorld from '../components/HelloWorld.vue'
import smsCreate from '../components/smsCreate'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/sms/create',
    name: 'smsCreate',
    component: smsCreate
  }
]

export default routes
