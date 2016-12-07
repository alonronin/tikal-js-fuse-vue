<template>
  <el-table stripe :data="articles" border style="width: 100%">
    <el-table-column prop="published" label="Date" :formatter="dateFormatter" sortable width="180"></el-table-column>
    <el-table-column prop="author" label="Author" width="180"></el-table-column>
    <el-table-column inline-template label="Title">
      <div>
        <a :href="row.url" target="_blank">{{ row.title }}</a>
      </div>
    </el-table-column>
  </el-table>
</template>

<script>
  import db from '../db'

  export default {
    name: 'articles',
    data () {
      return {
        articles: []
      }
    },
    created() {
      this.getArticles();
    },
    methods: {
      dateFormatter(row, column) {
        return (new Date(Date.parse(row.published)).toDateString());
      },

      async getArticles() {
        this.articles = await db.articles.toArray();
      }
    }
  }
</script>
