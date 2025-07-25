<template>
  <nav class="bottom-nav">
    <router-link to="/home" class="nav-item" :class="{ active: isActive('/home') }">
      <span class="icon">🏠</span>
      <span class="label">Home</span>
    </router-link>

    <router-link to="/transactions" class="nav-item" :class="{ active: isActive('/transactions') }">
      <span class="icon">💸</span>
      <span class="label">Transactions</span>
    </router-link>

    <router-link to="/settings" class="nav-item" :class="{ active: isActive('/settings') }">
      <span class="icon">⚙️</span>
      <span class="label">Settings</span>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

function isActive(path: string) {
  return route.path === path
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #ffffff;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 5px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  z-index: 1000;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #888;
  font-size: 12px;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-item .icon {
  font-size: 22px;
  margin-bottom: 4px;
}

.nav-item.active {
  color: #007bff;
}

.nav-item.active .icon {
  font-size: 24px;
}
</style>
