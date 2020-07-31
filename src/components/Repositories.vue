<template>
  <div class="container">
    <h2 class="d-flex justify-content-center">Trending Repositories</h2>
    <br>
    <template>
      <div>
        <h5>Select a language</h5>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </div>
    </template>
    <br>
    <perfect-scrollbar>
      <ul class="list-unstyled">
        <li v-for="(repo, x) in repositories" :key="x">
          <div class="repo">
            <b-card>
              <template v-slot:header>
                <a :href="repo.url" target="_blank">
                  <h5><strong>{{repo.author}}/{{repo.name}}</strong></h5>
                </a>
              </template>
              <b-media vertical-align="center">
                <template v-slot:aside>
                  <b-img :src="repo.avatar" width="50" height="50" alt="Media Aside"></b-img>
                </template>
                <b-card-text align="center">{{repo.description}}</b-card-text>
              </b-media>
              <template v-slot:footer>
                <small class="text-muted">
                  <svg height="30" width="30">
                    <circle cx="15"
                            cy="15"
                            r="8"
                            stroke="black"
                            stroke-width="1"
                            v-bind:fill="repo.languageColor" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                  {{repo.language}}
                  <span style="margin-left:1.5em"><b-icon icon="star"></b-icon></span>
                  {{repo.stars}}
                </small>
              </template>
            </b-card>
          </div>
        </li>
      </ul>
    </perfect-scrollbar>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Repositories',
  data() {
    return {
      repositories: [],
      selected: 'golang',
      options: [
        { value: 'golang', text: 'Go' },
        { value: 'python', text: 'Python' },
        { value: 'ruby', text: 'Ruby' },
        { value: 'rust', text: 'Rust' },
        { value: 'elixir', text: 'Elixir' },
        { value: 'vue', text: 'Vue' },
      ],
      VUE_APP_DASHBOARD_SERVER_URL: process.env.VUE_APP_DASHBOARD_SERVER_URL,
    };
  },
  methods: {
    async getRepositories() {
      const path = `${this.VUE_APP_DASHBOARD_SERVER_URL}/v1/repositories`;
      const token = await this.$auth.getTokenSilently();

      await axios.get(path, {
        headers: { Authorization: `Bearer ${token}` },
        params: { language: this.selected, since: 'weekly' },
      })
        .then((res) => {
          this.repositories = res.data.repositories;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error.message);
        });
    },
    redirect(url) {
      window.open(url, '_blank');
    },
  },
  watch: {
    selected() {
      this.getRepositories();
    },
  },
  created() {
    this.getRepositories();
  },
};
</script>
<style lang="css">
    .repo {
      margin-top: 5px;
      margin-bottom: 5px;
    }

    .item:hover {
      color: blue;
    }
</style>
