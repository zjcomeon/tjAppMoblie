<template>
  <div class="task-detail">
    <div class="card" v-for="(img,index) of this.images" :key="index">
      <div class="dt"></div>
      <img :src="img" preview="33" preview-text="描述文字"/>
      <div class="db"></div>
    </div>
  </div>
</template>

<script>
import { getTaskDetail } from '@/api/index'
export default {
  name: 'detail',
  data () {
    return {
      images: ''
    }
  },
  created () {
    this.getDetail(this.$route.params.id)
  },
  methods: {
    getDetail (id) {
      getTaskDetail(id).then(response => {
        //const aa = '["http://puh01tec3.bkt.clouddn.com/1564480415750780-blob"]';
        this.images = JSON.parse(response.sopImg)
        this.$previewRefresh();
      })
    }
  }
}
</script>
