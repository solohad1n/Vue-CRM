<template>
  <ul class="sidenav app-sidenav" :class="{ open: isOpen }">
    <li v-for="link in links" :key="link.url" :to="link.url">
      <router-link :to="link.url" class="waves-effect waves-orange pointer">{{
        link.title
      }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["isOpen"],
  data: () => ({
    links: [
      { title: "Счет", url: "/", exact: true },
      { title: "История", url: "/history" },
      { title: "Планирование", url: "/planning" },
      { title: "Новая запись", url: "/record" },
      { title: "Категории", url: "/categories" },
    ],
  }),
};
</script>

<style>
</style>


