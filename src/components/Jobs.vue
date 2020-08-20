<template>
  <div>
    <navbar></navbar>
    <div class="container mt-4">
      <h5 class="d-flex justify-content-center"><b>Github Jobs</b></h5>
      <br>
      <template>
        <div>
          <h5>Select a programming language</h5>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
      </template>
      <br>
      <perfect-scrollbar>
        <ul class="list-unstyled">
          <li v-for="(job, x) in jobs" :key="x">
            <job
              :title="job.title"
              :company_logo="job.company_logo"
              :company="job.company"
              :description="job.description"
              :location="job.location"
              :how_to_apply="job.how_to_apply"
              :company_url="job.company_url"
              :created_at="job.created_at"
              >
            </job>
          </li>
        </ul>
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import NavBar from './NavBar.vue';
import Job from './Job.vue';

export default {
  name: 'Jobs',
  data() {
    return {
      jobs: [],
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
    job: Job,
    navbar: NavBar,
  },
  methods: {
    async getJobs() {
      const path = `${this.VUE_APP_DASHBOARD_SERVER_URL}/v1/jobs`;
      const token = await this.$auth.getTokenSilently();

      await axios.get(path, {
        headers: { Authorization: `Bearer ${token}` },
        params: { description: this.selected },
      })
        .then((res) => {
          this.jobs = res.data.jobs;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error.message);
        });
    },
  },
  watch: {
    selected() {
      this.getJobs();
    },
  },
  created() {
    this.getJobs();
  },
};
</script>
<style lang="css">
</style>
