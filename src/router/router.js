import {
  Top,
  SignUp,
  SignIn,
  SignOut,
  User,
  Setting,
  NotFound
} from '../pages'

const routes = [
  { path: '/', name: 'Top', component: Top },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/signin', name: 'SignIn', component: SignIn },
  { path: '/settings', redirect: 'account' },
  { path: '/settings/account', name: 'Account', component: Setting.Account },
  { path: '/settings/password', name: 'Password', component: Setting.Password },
  { path: '/settings/notification', name: 'Notification', component: Setting.Notification },
  { path: '/users/:params', name: 'MyPage', component: User.Top },
  { path: '/users/:params/favorites', name: 'Favorite', component: User.Favorite },
  { path: '/users/:params/followers', name: 'Followers', component: User.Followers },
  { path: '/users/:params/items/create', name: 'ItemCreate', component: User.Item.Create },
  { path: '/users/:params/items/edit/:id', name: 'ItemEdit', component: User.Item.Edit },
  { path: '/users/:params/items/:id', name: 'ItemDetail', component: User.Item.Detail },
  { path: '/users/:params/presents/create', name: 'PresentCreate', component: User.Present.Create },
  { path: '/users/:params/presents/edit/:id', name: 'PresentEdit', component: User.Present.Edit },
  { path: '/notfound', name: 'NotFound', component: NotFound },
  { path: '*', redirect: {name: 'NotFound'} }
]

export default routes
