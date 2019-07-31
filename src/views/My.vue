<template>
  <div class="my-center">
    <div class="card my">
      <div class="dt"></div>
      <div class="dc">
        <img src="@/assets/images/DaoCloud.png"/>
        <p>团队名称：“智简SOP”</p>
        <p>团队成员：程祥宁、张红兵、葛旭、韩鹏、郑策</p>
        <p>团队介绍：“智简SOP”团队成员来自海尔COSMOPlat与DaoCloud。团队秉承着”工业智慧传承和传播“的理念，以数据驱动智造，以创新服务用户，紧跟国家战略，深挖行业需求。为企业提供端到端的连接、数据洞察及相关应用创新服务，助力企业实施数字化转型战略。
        </p>
      </div>
      <div class="db"></div>
    </div>
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
