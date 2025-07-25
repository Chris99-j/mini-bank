<template>
  <div class="container">
    <h2>Settings</h2>

    <form @submit.prevent="save">
      <input v-model="name" type="text" placeholder="Full Name" />
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="New Password" />
      <button type="submit">Update Info</button>
    </form>

    <button class="logout" @click="logout">Logout</button>
  </div>

  <BottomNav />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BottomNav from '../components/BottomNav.vue'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

onMounted(() => {
  const user = localStorage.getItem('user')
  if (user) {
    const data = JSON.parse(user)
    name.value = data.name
    email.value = data.email
  }
})

const save = () => {
  const user = {
    name: name.value,
    email: email.value,
    password: password.value,
    balance: 10000,
    transactions: []
  }
  localStorage.setItem('user', JSON.stringify(user))
  alert('Profile updated!')
  router.push('/home')
}

const logout = () => {
  localStorage.removeItem('user')
  router.push('/login')
}
</script>

<style scoped>
.logout {
  background-color: #e53935;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  margin-top: 1rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
