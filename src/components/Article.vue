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
  watch: {
    '$route' (to, from) {
      console.log(to);
      console.log(from);
    }
  },
  data () {
    return {
      article: { }
    }
  },
  created() {
    let articleId = this.$router.history.current.params.id;
    db.articles.where("uuid").equals(articleId).each().then((article) => {
      this.article = article
    }).catch(function (error) {
      console.error(error);
    });
  }
}
</script>
