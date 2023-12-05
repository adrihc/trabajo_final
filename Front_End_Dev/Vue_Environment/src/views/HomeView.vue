<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Header from '../components/Header.vue';
import Zones from '../components/Zones.vue';


</script>

<template>
  <main>
    <Header />
    <div class="full-body">
      <Zones/>
    </div>
  </main>
</template>

<style scoped>

main{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.full-body {
  width: 100%;
  display: flex;
  flex-direction: column;
}

@media(max-width:620px) {
    #full-body {
        width: 1400px;
    }
}
</style>