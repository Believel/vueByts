<template>
  <div class="about">
    <el-table
      :data="units"
      border
      style="width: 100%"
      height="500">
      <el-table-column
        prop="name.zh"
        label="单元名"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="type"
        label="单元类型"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="startDate"
        label="开始时间"
        align="center">
      </el-table-column>
      <el-table-column
        prop="endDate"
        label="结束时间"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import { getUnits, Unit } from '@/api/demo';
@Component
export default class About extends Vue {
  public units: Unit[] = [];
  private mounted() {
    getUnits('5d142bc0e38a6b2a6c15fc7b').then((res) => {
      const units = res.package.units;
      units.forEach((item) => {
        item.startDate = item.startDate && new Date(item.startDate).toLocaleString();
        item.endDate = item.endDate && new Date(item.endDate).toLocaleString();
      });
      this.units = res.package.units;
    });
  }
}
</script>
