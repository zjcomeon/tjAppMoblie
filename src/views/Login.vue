<template>
  <div class="login-wrap">
   <div class="login-form">
    <div class="form-item">
      <div class="logo">E-SOP</div>
    </div>
    <div class="form-item username">
      <input type="text" v-model="username"/>
    </div>
    <div class="form-item password">
      <input type="password" v-model="password"/>
    </div>
    <div class="form-item loginBtn" @click="loginApp()">
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginApp () {
      if (this.username === 'admin' && this.password === '123456') {
        this.$router.push({ path: '/task/list' })
      }
    }
  }
}
</script>
