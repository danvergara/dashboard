<template>
  <div class="container">
    <perfect-scrollbar>
      <ul class="list-unstyled">
        <li v-for="(item, x) in news" :key="x">
          <b-media tag="li" class="my-4 border item"
                   vertical-align="center" @click="redirect(item.url)">
            <template v-slot:aside>
             <b-img :src="item.urlToImage" width="170" height="180" alt="Media Aside"></b-img>
            </template>

              <h5 class="mt-0 mb-1">{{item.title}}</h5>
              <p><strong>Author: </strong>{{item.author}}<br>
                 <strong>Published at: </strong>{{item.publishedAt}}</p>
              <p class="mb-0">
                {{item.description}}
              </p>
          </b-media>
        </li>
      </ul>
    </perfect-scrollbar>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NewsITem',
  data() {
    return {
      news: [],
    };
  },
  methods: {
    getNews() {
      const path = 'http://0.0.0.0:8000/v1/top-news';

      axios.get(path)
        .then((res) => {
          this.news = res.data.news;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    redirect(url) {
      window.location = url;
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
