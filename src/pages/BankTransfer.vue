<template>
  <div class="container">
    <h2>Bank Transfer</h2>

    <!-- ✅ Unified Bank/GCash Selection -->
    <select v-model="selectedMethod" required>
      <option value="" disabled>Select Destination</option>
      <option v-for="item in options" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>

    <form @submit.prevent="submit" v-if="selectedMethod">
      <input v-model="recipient" type="text" placeholder="Recipient Name" required />

      <!-- ✅ If Bank selected -->
      <div v-if="isBank">
        <input v-model="accountNumber" type="text" placeholder="Bank Account Number" required />
      </div>

      <!-- ✅ If GCash selected -->
      <div v-else-if="selectedMethod === 'gcash'">
        <input v-model="gcashNumber" type="text" placeholder="GCash Number" required />
      </div>

      <input v-model.number="amount" type="number" placeholder="Amount" required />
      <button type="submit">Send Money</button>
    </form>
  </div>

  <BottomNav />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BottomNav from '../components/BottomNav.vue'

// ✅ Dropdown options (banks + GCash)
const options = [
  { label: 'GCash', value: 'gcash' },
  { label: 'BDO (Banco de Oro)', value: 'bdo' },
  { label: 'BPI (Bank of the Philippine Islands)', value: 'bpi' },
  { label: 'Metrobank', value: 'metrobank' },
  { label: 'Land Bank of the Philippines', value: 'landbank' },
  { label: 'Security Bank', value: 'security' },
  { label: 'China Bank', value: 'china' },
  { label: 'UnionBank', value: 'unionbank' },
  { label: 'PNB (Philippine National Bank)', value: 'pnb' },
  { label: 'EastWest Bank', value: 'eastwest' }
]

const selectedMethod = ref('')
const recipient = ref('')
const amount = ref<number>(0)
const accountNumber = ref('')
const gcashNumber = ref('')

// ✅ Check if selected method is a bank
const isBank = computed(() => selectedMethod.value !== 'gcash')

const submit = () => {
  const destination = isBank.value
    ? `${selectedMethod.value.toUpperCase()} - ${accountNumber.value}`
    : `GCash No. ${gcashNumber.value}`

  alert(`Transferred ₱${amount.value} to ${recipient.value} via ${destination}`)

  // Reset fields
  recipient.value = ''
  amount.value = 0
  accountNumber.value = ''
  gcashNumber.value = ''
  selectedMethod.value = ''
}
</script>

<style scoped>
select {
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
}
</style>
