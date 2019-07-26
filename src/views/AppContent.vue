<template>
  <div class="app-content" :style="{height:`${contentHeight - 60 }px`}">
    <transition name="fade-transform" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppContent',
  props: {
    contentHeight: {
      required: true,
      type: Number
    }
  },
  created () {
  }
}
</script>
