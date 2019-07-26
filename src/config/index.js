const modeUrlConfig = {
  develop: {
    baseURL: 'http://127.0.0.1:8080/'
  },
  stage: {
    baseURL: 'http://127.0.0.1:8080/'
  }
}
// 根据当前模式选择baseURL
export default modeUrlConfig[process.env.VUE_APP_CURRENTMODE]
