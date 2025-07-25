<template>
  <div class="container">
    <h2>Transaction History</h2>
    <ul v-if="transactions.length">
      <li v-for="(tx, i) in transactions" :key="i">
        {{ tx.date }} - {{ tx.type }} - ₱{{ tx.amount }}
      </li>
    </ul>
    <p v-else>No transactions recorded.</p>
  </div>

  <BottomNav /> <!-- ✅ ADD THIS -->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import BottomNav from '../components/BottomNav.vue' // ✅ IMPORT THIS

export default defineComponent({
  components: { BottomNav },
  setup() {
    const transactions = ref<any[]>([])

    onMounted(() => {
      const stored = localStorage.getItem('user')
      if (stored) {
        const user = JSON.parse(stored)
        transactions.value = user.transactions || []
      }
    })

    return { transactions }
  }
})
</script>
