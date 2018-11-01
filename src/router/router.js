import {Top, SignUp, SignIn, NotFound} from '../pages'

const routes = [
  { path: '/', name: 'Top', component: Top },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/signin', name: 'SignIn', component: SignIn },
  { path: '*', name: 'NotFound', component: NotFound }
]

export default routes
