import HelloWorld from '../components/HelloWorld.vue'
import SmsCreate from '../components/SmsCreate'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/sms/create',
    name: 'SmsCreate',
    component: SmsCreate
  }
]

export default routes
