<template>
  <n-layout class="default-layout" has-sider>
    <AdNav/>
    <n-layout>
      <AppHeader/>
      <n-layout class="main" :native-scrollbar="false" content-style="padding: 1.6rem">
        <slot />
      </n-layout>
      <AppFooter/>
    </n-layout>
  </n-layout>
</template>
<script setup lang="ts">
import { showError } from '#app'
const route = useRoute()
if ('setup' in route.query) {
  throw new Error('error in setup')
}
if ('mounted' in route.query) {
  onMounted(() => {
    throw new Error('error in mounted')
  })
}
function triggerError () {
  throw new Error('manually triggered error')
}

</script>