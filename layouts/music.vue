<template>
<!-- <div>
  <top/>
  <index/>
  <nuxt/>
</div> -->
  <el-container>
    <el-header><top /></el-header>
    <el-container>
      <index />
    </el-container>
  </el-container>
</template>

<script>
import top from "../components/01.top";
import index from "../components/02.index";
export default {
  components: {
    top,
    index
  }
};
</script>

<style></style>
