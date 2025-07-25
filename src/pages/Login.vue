<template>
  <div class="login-container">
    <h2>Welcome Back 👋</h2>
    <p>Please sign in to your account</p>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p class="link"><router-link to="/forgot-password">Forgot Password?</router-link></p>
    </form>
    <p class="footer">Don't have an account? <router-link to="/register">Sign Up</router-link></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
  const stored = localStorage.getItem('user')
  if (stored) {
    const user = JSON.parse(stored)
    if (user.email === email.value && user.password === password.value) {
      alert('Login successful!')
      router.push('/home')
    } else {
      alert('Incorrect email or password')
    }
  } else {
    alert('No user found. Please register.')
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.login-container h2 {
  margin-bottom: 0.5rem;
}
.login-container p {
  margin-bottom: 1.5rem;
  color: #666;
}
.login-container input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}
.login-container button {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b883;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.login-container .link,
.login-container .footer {
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>