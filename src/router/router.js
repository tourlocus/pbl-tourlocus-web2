import {
  Top,
  SignUp,
  SignIn,
  User,
  Setting,
  NotFound
} from '../pages'

const routes = [
  { path: '/', name: 'Top', component: Top },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/signin', name: 'SignIn', component: SignIn },
  {
    path: '/settings',
    component: Setting.Container,
    children: [
      { path: '/', redirect: 'account' },
      { path: 'account', name: 'Account', component: Setting.Account },
      { path: 'password', name: 'Password', component: Setting.Password },
      { path: 'notification', name: 'Notification', component: Setting.Notification }
    ]
  },
  {
    path: '/users/:params',
    component: User.Container,
    children: [
      { path: '/', name: 'MyPage', component: User.Top },
      { path: 'favorites', name: 'Favorite', component: User.Favorite },
      { path: 'followers', name: 'Followers', component: User.Followers },
      { path: 'items/create', name: 'ItemCreate', component: User.Item.Create },
      { path: 'items/edit/:id', name: 'ItemEdit', component: User.Item.Edit },
      { path: 'items/:id', name: 'ItemDetail', component: User.Item.Detail }
    ]
  },
  { path: '/notfound', name: 'NotFound', component: NotFound },
  { path: '*', redirect: {name: 'NotFound'} }
]

export default routes
