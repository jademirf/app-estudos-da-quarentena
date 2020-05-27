
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'minha-conta/', component: () => import('pages/MinhaConta.vue') }
    ]
  },
  {
    path: '/controle',
    component: () => import('layouts/Controle.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/cadastro', component: () => import('pages/Cadastro.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
