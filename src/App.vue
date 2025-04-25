<script setup >
import layoutHeader from '@layout/layout-header.vue';
import layoutNav from '@layout/layout-nav.vue';
import layoutAside from '@layout/layout-aside.vue';
import layoutFooter from '@layout/layout-footer.vue';
</script>

<template>
  <layoutHeader />
  <layoutNav />
  <layoutAside />
  <main>
    <RouterView />
  </main>
  <layoutFooter />
</template>
