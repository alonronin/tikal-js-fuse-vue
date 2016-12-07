<template>
  <div>
    <h1>VueFeed</h1>
    <p><b>{{ count }}</b> articles so far...</p>
  </div>
</template>

<script>
  import db from '../db'
  import events from '../events';

  export default {
    name: 'Home',
    data () {
      return {
        count: 0
      }
    },
    created() {
      this.$on('test', function(){
        console.log('Home')
      });

      events.on('articles/added', this.getCount);

      this.getCount();
    },
    destroyed() {
      events.off('articles/added');
    },
    methods: {
      async getCount() {
        this.count = await db.articles.count();
      }
    }
  }
</script>
