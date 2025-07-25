<template>
  <div class="container">
    <h2>Debit Card</h2>
    <p><strong>Card Number:</strong> **** **** **** 5678</p>
    <p><strong>Linked Account:</strong> Main Savings</p>
    <button @click="lockCard">Lock Card</button>
  </div>
  <BottomNav />
</template>

<script setup lang="ts">
import BottomNav from '../components/BottomNav.vue'

const lockCard = () => {
  alert('Card Locked Temporarily')
}
</script>
