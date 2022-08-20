<template>
  <div>
    <HeroSection/>
    <LazyRecentApi v-if="$config.api.enabled && posts" :posts="posts"/>
    <Recommendations v-if="$config.recommendations.enabled"/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Início | ${this.$config.name}`,
    }
  },
  data() {
    return {
      posts: null,
    }
  },
  async created() {
    const fetchDocsLabel = 'fetchAllPosts'
    console.time(fetchDocsLabel)
    try {
      const posts = await this.$content('posts')
        .without(['body', 'toc', 'dir', 'extension', 'path', 'tags'])
        .limit(3)
        .skip(0)
        .sortBy('createdAt', 'desc')
        .fetch()
      this.posts = posts
    } catch (e) {
      console.error(e)
    } finally {
      console.timeEnd(fetchDocsLabel)
    }
  },
}

</script>

<style>
</style>
