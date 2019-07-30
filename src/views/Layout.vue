<template>
  <div class="app-wrap">
    <div class="app-top">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
    <div class="app-title">
      <div v-if="this.$route.name==='detail'" class="backPage" @click="backTaskList()"></div>
      <div class="title">{{this.title}}</div>
    </div>
    <AppContent :contentHeight="appContentHeight"/>
    <div ref="appbar" class="app-bar">
      <div v-for="(item,index) of bars" :key="index" class="bar-item" :class="isActive">
        <router-link :to="item.url">
        <i :class="`icon-${item.icon}`"></i>
        <div class="text" v-text="item.text"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppContent from './AppContent.vue'
export default {
  name: 'layout',
  components: { AppContent },
  data () {
    return {
      title: '',
      appContentHeight: document.documentElement.clientHeight - 98 ,
      bars: [
        { icon: 'task', text: '我的任务', url: '/task/list' },
        { icon: 'my', text: '个人中心', url: '/my' }
      ],
      isActive: false
    }
  },
  created () {
    // 设置title
    this.getTitle()
  },
  methods: {
    getTitle () {
      this.title = this.$route.meta.title
    },
    backTaskList () {
      this.$router.push({ path: '/task/list' })
    }
  },
  watch: {
    $route () {
      this.getTitle()
    }
  }
}
</script>
