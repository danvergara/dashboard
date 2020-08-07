<template>
  <b-card no-body>
    <b-media tag="li"
             class="m-2 item"
             vertical-align="center"
             @click.stop.prevent="redirect(url)">

      <template v-slot:aside>
        <b-img :src="urlToImage"
               width="170"
               height="180"
               alt="Media Aside">
        </b-img>
      </template>

      <h5 class="mt-0 mb-1">{{ title }}</h5>
      <p><strong>Source: </strong>{{ source }}<br>
        <strong>Published at: </strong>{{ toDateString(publishedAt) }}<br>
        <strong v-if="author">Author: </strong>{{ author }}
      </p>
      <p class="mb-0">
        {{ description }}
      </p>
    </b-media>
  </b-card>
</template>
<script>
export default {
  name: 'NewsItem',
  props: {
    url: {
      type: String,
    },
    urlToImage: {
      type: String,
    },
    title: {
      type: String,
    },
    source: {
      type: String,
    },
    publishedAt: {
      type: String,
    },
    author: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  methods: {
    redirect(url) {
      window.open(url, '_blank');
    },
    toDateString(date) {
      const dateObj = new Date(date);
      return dateObj.toDateString();
    },
  },
};
</script>
<style lang="css">
  .item:hover {
    color: blue;
  }
</style>
