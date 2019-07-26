<template>
  <div class="task-detail">
    <div class="detail">
      <img :src="this.image"/>
    </div>
  </div>
</template>

<script>
import { getTaskDetail } from '@/api/index'
export default {
  name: 'detail',
  data () {
    return {
      image: ''
    }
  },
  created () {
    this.getDetail(this.$route.params.id)
  },
  methods: {
    getDetail (id) {
      getTaskDetail(id).then(response => {
        this.image = response.sopImg
      })
    }
  }
}
</script>
