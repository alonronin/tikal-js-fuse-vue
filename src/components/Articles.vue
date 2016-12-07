<template>
    <el-table :data="articles" border style="width: 100%">
      <el-table-column prop="published" label="Date" sortable width="180"></el-table-column>
      <el-table-column prop="author" label="Author" width="180"></el-table-column>
      <el-table-column prop="title" label="Title">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
  name: 'articles',
  props: ['articleList'],
  data () {
    return {
      articles: this.articleList
    }
  }
}
</script>
