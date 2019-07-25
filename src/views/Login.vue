<template>
  <div class="login-wrap">
   <div class="login-form">
    <div class="form-item">
      <div class="logo">E-SOP</div>
    </div>
    <div class="form-item username">
      <input type="text"/>
    </div>
    <div class="form-item password">
      <input type="password"/>
    </div>
    <div class="form-item loginBtn" @click="loginApp()">
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    loginApp () {
      this.$router.push({ path: '/task' })
    }
  }
}
</script>
