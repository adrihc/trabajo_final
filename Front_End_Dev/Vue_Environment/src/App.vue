<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import HomeView from './views/HomeView.vue';

</script>

<template>
  <div id="home-view">
  <HomeView />
  <router-view />
  </div>
 

  
  <!--
  <header>

    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  -->
  
</template>

<style>
#home-view{
  display: flex;
  flex-direction: column;
}

</style>
