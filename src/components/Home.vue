<template>
  <div>
    <h1>VueFeed</h1>
    <h2>{{ count }} articles so far...</h2>
  </div>
</template>

<script>
  import db from '../db'

  export default {
    name: 'Home',
    data () {
      return {
        count: 0
      }
    },
    created () {
      this.getCount()
    },
    methods: {
      async getCount() {
        this.count = await db.articles.count();
      }
    }
  }
</script>
