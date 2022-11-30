<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
  <div class="q-pa-md q-gutter-sm">
    <q-avatar square color="red" text-color="white" icon="directions" />
    <q-avatar square color="primary" text-color="white">J</q-avatar>
    <q-avatar
      square
      size="100px"
      font-size="82px"
      color="teal"
      text-color="white"
      icon="directions"
    />
    <q-avatar square size="24px" color="orange">J</q-avatar>
    <q-avatar square>
      <img src="https://cdn.quasar.dev/img/avatar.png" />
    </q-avatar>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
