<template>
  <div>
    Live
    <el-progress
      :text-inside="true"
      :stroke-width="18"
      :percentage="0"></el-progress>
    <el-progress
      :text-inside="true"
      :stroke-width="18"
      :percentage="70"></el-progress>
    <el-progress :percentage="70"></el-progress>
    <el-progress
      :percentage="50"
      status="exception"></el-progress>
  </div>
</template>

<script>
export default {
}
</script>
