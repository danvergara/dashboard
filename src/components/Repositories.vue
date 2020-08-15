<template>
  <div class="container">
    <h5 class="d-flex justify-content-center"><b>Trending Repositories</b></h5>
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
          <repository
            :url="repo.url"
            :author="repo.author"
            :name="repo.name"
            :avatar="repo.avatar"
            :description="repo.description"
            :language="repo.language"
            :languageColor="repo.languageColor"
            :stars="repo.stars">
          </repository>
        </li>
      </ul>
    </perfect-scrollbar>
  </div>
</template>
<script>
import axios from 'axios';
import Repository from './Repository.vue';

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
  components: {
    repository: Repository,
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
</style>
