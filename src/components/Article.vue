<template>
  <div>
    <h1>{{ article.title }}</h1>
    <h2 v-if="article.author">by {{ article.author }}</h2>

    <p style="max-width: 50%; margin: auto;"><img :src="article.picture" @error="error" style="width: 100%; height: auto"></p>

    <div v-html="text"></div>
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
      },

      error(event) {
        event.target.hidden = true;
      },
    },
    computed: {
      text() {
        if (!this.article.text) return '';

        return this.article.text.split('\n').map(p => `<p>${p}</p>`).join('');
      }
    }
  }
</script>
