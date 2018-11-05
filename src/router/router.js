import {
  Top,
  SignUp,
  SignIn,
  User,
  NotFound
} from '../pages'

const routes = [
  { path: '/', name: 'Top', component: Top },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/signin', name: 'SignIn', component: SignIn },
  {
    path: '/:params',
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
  { path: '*', name: 'NotFound', component: NotFound }
]

export default routes
