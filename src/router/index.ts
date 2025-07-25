import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import ForgotPassword from '../pages/Forgotpassword.vue'
import Home from '../pages/Home.vue'
import Transactions from '../pages/Transactions.vue'
import Settings from '../pages/Settings.vue'
import BankTransfer from '../pages/BankTransfer.vue'
import PayBills from '../pages/PayBills.vue'
import CreditCard from '../pages/CreditCard.vue'
import DebitCard from '../pages/DebitCard.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/home', component: Home },
  { path: '/transactions', component: Transactions },
  { path: '/settings', component: Settings },
  { path: '/transfer', component: BankTransfer },
  { path: '/pay-bills', component: PayBills },
  { path: '/credit-card', component: CreditCard },
  { path: '/debit-card', component: DebitCard },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
