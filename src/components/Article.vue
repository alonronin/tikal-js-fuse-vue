<template>
  <div>
    <h1>{{ $route.params.id }} / {{ article.name }}</h1>
    <h2>by {{ article.author }}</h2>
    <div>{{ article.text }}</div>
  </div>
</template>

<script>
  import db from '../db'

  export default {
    name: 'article',
    data () {
      return {
        article: {}
      }
    },
    created() {
      const articleId = this.$route.params.id;
      this.getArticle(articleId);
    },
    methods: {
        async getArticle(id) {
          this.article = await db.articles
            .where("uuid")
            .equals(id)
            .first()
        }
    }
  }
</script>
