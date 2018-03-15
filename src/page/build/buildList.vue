<template>
    <div class="build-list">
      <el-table
        :data="curdata"
        style="width: 100%">
        <el-table-column
          label="构建名称"
          width="180">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.metadata.name" placement="top">
            <span>{{scope.row.metadata.name}}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          label="最近构建状态">
          <template slot-scope="scope">
            <span v-if="scope.row.build">{{scope.row.build.status.phase | phaseFilter}}</span>
            <span v-if="!scope.row.build">-</span>
          </template>
        </el-table-column>
        <el-table-column
          label="最近构建时间">
          <template slot-scope="scope">
            <el-tooltip v-if="scope.row.build" class="item" effect="dark" :content="scope.row.build.metadata.creationTimestamp | timescon" placement="top">
              <span >{{scope.row.build.metadata.creationTimestamp | dateRelative}}</span>
            </el-tooltip>
            <span v-if="!scope.row.build">-</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="build.status.duration"
          label="最近构建时长">
          <template slot-scope="scope">
            <span v-if="scope.row.build">{{scope.row.build.status.duration | duration}}</span>
            <span v-if="!scope.row.build">-</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="构建" placement="top">
              <span style="font-size: 24px;margin-left:15px;"  @click="startBuild(scope.$index)"><i class="uex-icon-start-all"></i></span>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="查看源代码" placement="top">
              <a v-if="scope.row.spec.source.git" :href="scope.row.spec.source.git.uri" style="font-size: 24px;margin-left:15px;"><i class="uex-icon-link"></i></a>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="停止" placement="top">
              <span  style="font-size: 24px;margin-left:15px"><i class="uex-icon-minus"></i></span>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="查看镜像" placement="top">
              <!--<router-link style="font-size: 24px;margin-left:15px"><i class="uex-icon-computer"></i></router-link>-->
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="ds_oq_pageF" @current-change="handleCurrentChange"
                     :current-page="pageobj.currentPage" :page-size="pageobj.size" layout="total, prev, pager, next, jumper"
                     :total="pageobj.totalRow"></el-pagination>
    </div>
</template>
<script src="./buildList.js"></script>
<style>

</style>
