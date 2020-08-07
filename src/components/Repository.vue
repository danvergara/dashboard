<template>
  <div class="repo">
    <b-card>
      <template v-slot:header>
        <a :href="url" target="_blank">
          <h5><strong>{{ author }}/{{ name }}</strong></h5>
        </a>
      </template>
      <b-media vertical-align="center">
        <template v-slot:aside>
          <b-img :src="avatar" width="50" height="50" alt="Media Aside"></b-img>
        </template>
        <b-card-text align="center">{{ description }}</b-card-text>
      </b-media>
      <template v-slot:footer>
        <small class="text-muted">
          <svg height="30" width="30">
            <circle cx="15"
                    cy="15"
                    r="8"
                    stroke="black"
                    stroke-width="1"
                    v-bind:fill="languageColor" />
            Sorry, your browser does not support inline SVG.
          </svg>
          {{ language }}
          <span style="margin-left:1.5em"><b-icon icon="star"></b-icon></span>
          {{ stars }}
        </small>
      </template>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'Repository',
  props: {
    url: {
      type: String,
    },
    author: {
      type: String,
    },
    name: {
      type: String,
    },
    avatar: {
      type: String,
    },
    description: {
      type: String,
    },
    language: {
      type: String,
    },
    languageColor: {
      type: String,
    },
    stars: {
      type: Number,
    },
  },
};
</script>
<style lang="css">
    .repo {
      margin-top: 5px;
      margin-bottom: 5px;
    }
</style>
