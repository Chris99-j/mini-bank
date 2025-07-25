<template>
  <div class="forgot-container">
    <h2>Forgot Password 🔐</h2>
    <p>We'll help you reset it</p>
    <form @submit.prevent="reset">
      <input v-model="email" type="email" placeholder="Enter your registered email" required />
      <button type="submit">Send Reset Link</button>
    </form>
    <p class="footer">Back to <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const reset = () => {
  const stored = localStorage.getItem('user')
  if (stored) {
    const user = JSON.parse(stored)
    if (user.email === email.value) {
      alert('Password reset link sent to your email.')
    } else {
      alert('Email not found. Please try again.')
    }
  } else {
    alert('No users registered.')
  }
}
</script>

<style scoped>
.forgot-container {
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.forgot-container h2 {
  margin-bottom: 0.5rem;
}
.forgot-container p {
  margin-bottom: 1.5rem;
  color: #666;
}
.forgot-container input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}
.forgot-container button {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b883;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.forgot-container .footer {
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>
