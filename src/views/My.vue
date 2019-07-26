<template>
  <div class="my-center">
    <div class="my"></div>
    <div class="logout" @click="logout()"></div>
  </div>
</template>

<script>
export default {
  name: 'my',
  methods: {
    logout () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
