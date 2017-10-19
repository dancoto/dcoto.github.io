import Home from './components/pages/home/Home.vue'
import Contact from './components/pages/contact/Contact.vue'

export const routes = [
  { path: '/', component: Home},
  { path: '/home', component: Home },
  { path: '/contact', component: Contact }
]
