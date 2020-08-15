<template>
  <div class="container">
    <h5 class="d-flex justify-content-center"><b>Top News</b></h5>
    <br>
    <template>
      <div>
        <h5>Select a category</h5>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </div>
    </template>
    <br>
    <perfect-scrollbar>
      <ul class="list-unstyled">
        <li v-for="(item, x) in news" :key="x">
          <news-item :url="item.url"
                     :urlToImage="item.urlToImage"
                     :title="item.title"
                     :source="item.source.name"
                     :publishedAt="item.publishedAt"
                     :author="item.author"
                     :description="item.description">
          </news-item>
        </li>
      </ul>
    </perfect-scrollbar>
  </div>
</template>
<script>
import axios from 'axios';
import NewsItem from './NewsItem.vue';

export default {
  name: 'News',
  data() {
    return {
      news: [],
      selected: 'business',
      options: [
        { value: 'business', text: 'business' },
        { value: 'technology', text: 'technology' },
        { value: 'science', text: 'science' },
      ],
      VUE_APP_DASHBOARD_SERVER_URL: process.env.VUE_APP_DASHBOARD_SERVER_URL,
    };
  },
  components: {
    newsItem: NewsItem,
  },
  methods: {
    async getNews() {
      const path = `${this.VUE_APP_DASHBOARD_SERVER_URL}/v1/top-news`;
      const token = await this.$auth.getTokenSilently();

      // send the access token through the 'Authorization' header
      await axios.get(path, {
        headers: { Authorization: `Bearer ${token}` },
        params: { category: this.selected },
      })
        .then((res) => {
          this.news = res.data.news;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error.message);
        });
    },
  },
  watch: {
    selected() {
      this.getNews();
    },
  },
  created() {
    this.getNews();
  },
};
</script>
<style lang="css">
  .item:hover {
    color: blue;
  }

  .ps {
    height: 900px;
  }
</style>
