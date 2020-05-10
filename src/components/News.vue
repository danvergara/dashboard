<template>
  <div class="container">
    <perfect-scrollbar>
      <h2 class="d-flex justify-content-center">Top News</h2>
      <ul class="list-unstyled">
        <li v-for="(item, x) in news" :key="x">
          <b-card no-body>
            <b-media tag="li" class="m-2 item"
                     vertical-align="center"
                     @click.stop.prevent="redirect(item.url)">
              <template v-slot:aside>
               <b-img :src="item.urlToImage" width="170" height="180" alt="Media Aside"></b-img>
              </template>

                <h5 class="mt-0 mb-1">{{item.title}}</h5>
                <p><strong>Source: </strong>{{item.source.name}}<br>
                   <strong>Published at: </strong>{{toDateString(item.publishedAt)}}<br>
                   <strong v-if="item.author">Author: </strong>{{item.author}}
                 </p>
                <p class="mb-0">
                  {{item.description}}
                </p>
            </b-media>
          </b-card>
        </li>
      </ul>
    </perfect-scrollbar>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'News',
  data() {
    return {
      news: [],
      VUE_APP_DASHBOARD_SERVER_URL: process.env.VUE_APP_DASHBOARD_SERVER_URL,
    };
  },
  methods: {
    getNews() {
      const path = `${this.VUE_APP_DASHBOARD_SERVER_URL}/v1/top-news`;

      axios.get(path)
        .then((res) => {
          this.news = res.data.news;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error.message);
        });
    },
    redirect(url) {
      window.open(url, '_blank');
    },
    toDateString(date) {
      const dateObj = new Date(date);
      return dateObj.toDateString();
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
