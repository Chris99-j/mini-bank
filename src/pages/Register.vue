<template>
  <div class="register-container">
    <h2>Create Account 📝</h2>
    <p>Sign up to get started</p>
    <form @submit.prevent="register">
      <input v-model="name" type="text" placeholder="Full Name" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <p class="footer">Already have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const register = () => {
  const user = {
    name: name.value,
    email: email.value,
    password: password.value,
    balance: 10000,
    transactions: []
  }
  localStorage.setItem('user', JSON.stringify(user))
  alert('Registration successful!')
  router.push('/login')
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.register-container h2 {
  margin-bottom: 0.5rem;
}
.register-container p {
  margin-bottom: 1.5rem;
  color: #666;
}
.register-container input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}
.register-container button {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b883;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.register-container .footer {
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>