<template>
  <el-table stripe :data="articles" border style="width: 100%;" v-loading.fullscreen="loading">
    <el-table-column prop="published" label="Date" :formatter="dateFormatter" sortable width="180"></el-table-column>
    <el-table-column prop="author" label="Author" width="250"></el-table-column>
    <el-table-column inline-template label="Title">
      <div>
        <router-link :to="`/articles/${row.uuid}`">{{ row.title }}</router-link>
      </div>
    </el-table-column>
  </el-table>
</template>

<script>
  import db from '../db'
  import events from '../events';

  export default {
    name: 'articles',
    data () {
      return {
        articles: [],
        loading: true
      }
    },
    created() {
      events.on('articles/added', this.getArticles);

      this.getArticles();
    },
    destroyed() {
      events.off('articles/added');
    },
    methods: {
      dateFormatter(row, column) {
        return (new Date(Date.parse(row.published)).toDateString());
      },

      async getArticles() {
        this.articles = await db.articles.toArray();
        this.loading = false;
      }
    }
  }
</script>
