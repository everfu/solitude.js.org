<script setup lang="ts">
import SponsorsGroup from './SponsorGroup.vue'
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.sponsors !== false">
    <a class="sponsors-aside-text" href="https://qm.qq.com/q/mYIJRTqo0w" target="_blank">赞助商</a>
    <SponsorsGroup tier="special" />
    <SponsorsGroup tier="platinum" />
  </div>
</template>

<style>
a.sponsors-aside-text {
  color: var(--vt-c-text-3);
  display: block;
  margin: 3em 0 1em;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}
</style>