<template>
  <b-card>
    <template v-slot:header>
      <h5><strong>{{ title }}</strong></h5>
    </template>
    <b-row no-gutters>
      <b-col md="2" sm="12">
        <b-card-img :src="company_logo"></b-card-img>
      </b-col>
      <b-col md="10" sm="12">
        <b-card-body>
          <b-card-text>
            <strong>Company: </strong><a :href="company_url">{{ company }}</a>
          </b-card-text>
          <b-card-text>
            <strong>Location: </strong>{{ location }}
          </b-card-text>
          <b-card-text>
            <strong>Description: </strong>
            <span v-html="description"></span>
          </b-card-text>
          <b-card-text>
            <strong>How to apply: </strong>
            <span v-html="how_to_apply"></span>
          </b-card-text>
          <b-card-text>
            <strong>Created at: </strong>{{ created_at }}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
export default {
  name: 'Job',
  props: {
    title: {
      type: String,
    },
    company_logo: {
      type: String,
    },
    company: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    how_to_apply: {
      type: String,
    },
    created_at: {
      type: String,
    },
    company_url: {
      type: String,
    },
  },
};
</script>
