<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFix from './components/LayoutFix.vue'
//触发获取导航列表的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())
//test
import Nav from './components/Nav.vue'
</script>

<template>
  <div>
    <LayoutFix></LayoutFix>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <router-view></router-view>
    <LayoutFooter></LayoutFooter>
  </div>
</template>
