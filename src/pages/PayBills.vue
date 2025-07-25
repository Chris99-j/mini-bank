<template>
  <div class="container">
    <h2>Pay Bills</h2>
    <ul>
      <li v-for="biller in billers" :key="biller">
        <button @click="pay(biller)">Pay {{ biller }}</button>
      </li>
    </ul>
  </div>
  <BottomNav />
</template>

<script setup lang="ts">
import BottomNav from '../components/BottomNav.vue'
const billers = ['Electricity', 'Water', 'Internet', 'Mobile', 'Tuition']
const pay = (biller: string) => {
  alert(`Paid ${biller} bill!`)
}
</script>