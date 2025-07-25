<template>
  <div class="container">
    <div class="balance-card">
      <h3>Available Balance</h3>
      <p class="amount">₱{{ user?.balance.toLocaleString() }}</p>
    </div>

    <h3>Quick Actions</h3>
   <div class="actions-grid">
  <div class="action-card" @click="goTo('/transfer')">
    💸 <span>Bank Transfer</span>
  </div>
  <div class="action-card" @click="goTo('/pay-bills')">
    🧾 <span>Pay Bills</span>
  </div>
  <div class="action-card" @click="goTo('/credit-card')">
    💳 <span>Credit Card</span>
  </div>
  <div class="action-card" @click="goTo('/debit-card')">
    🏦 <span>Debit Card</span>
  </div>
  <div class="action-card" @click="goTo('/transactions')">
    📜 <span>Transactions</span>
  </div>
</div>

  </div>

  <BottomNav />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import BottomNav from '../components/BottomNav.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { BottomNav },
  setup() {
    const user = ref<any>(null)
    const router = useRouter()

    onMounted(() => {
      const stored = localStorage.getItem('user')
      if (stored) user.value = JSON.parse(stored)
    })

    const goTo = (path: string) => {
      router.push(path)
    }

    return { user, goTo }
  }
})
</script>

<style scoped>
.balance-card {
  background-color: #007bff;
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.amount {
  font-size: 2rem;
  margin-top: 0.5rem;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.action-card {
  background-color: white;
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.action-card:hover {
  background-color: #f0f8ff;
  transform: translateY(-3px);
}
</style>
