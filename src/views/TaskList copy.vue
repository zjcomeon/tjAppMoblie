<template>
  <div class="app-wrap">
    <div class="app-top"></div>
    <div class="app-title">
      <div>我的任务</div>
    </div>
    <div class="app-content">
      <div class="taskList">
        <div v-for="(item,index) of list" :key="index" class="task-item">
          <div class="clearfix">
            <div class="left">
              <div class="item item-1">{{item.id}}</div>
              <div class="item item-2">{{item.gw}}</div>
              <div class="item item-3">{{item.gxh}}</div>
              <div class="item item-4">{{item.gxm}}</div>
            </div>
            <div class="right">
              <div class="item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-bar">
    </div>
  </div>
</template>

<script>
export default {
  name: 'task',
  data () {
    return {
      list: [
        { id: 'wo031808006', gw: '车削', gxh: '01', gxm: '车外圆' },
        { id: 'wo031808006', gw: '车削', gxh: '01', gxm: '车外圆' },
        { id: 'wo031808006', gw: '车削', gxh: '01', gxm: '车外圆' }
      ]
    }
  }
}
</script>
