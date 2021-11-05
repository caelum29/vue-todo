<template>
  <div class="home">
    <h1 class="text-7xl text-blue-900">Hello world!!</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Home extends Vue {}
</script>
