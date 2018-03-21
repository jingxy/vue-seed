<template>
    <div class="image-list">
        <el-tabs type="border-card" class="image-tab">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i>构建镜像</span>
                            <div class="mage_list">
                                <div class="search">
                                    <el-input
                                    placeholder="请输入内容"
                                    suffix-icon="el-icon-search"
                                    v-model="input21">
                                </el-input>

                                </div>
                                
                            </div>

            </el-tab-pane>


  <el-tab-pane label="仓库镜像">消息中心111</el-tab-pane>
</el-tabs>
    </div>
</template>
<script src="./imageList.js"></script>
<script>
export default {
  data() {
    return {
      input21: ''
    }
  }
}
</script>

<style lang="less">
@import "./imageList.less";
</style>

