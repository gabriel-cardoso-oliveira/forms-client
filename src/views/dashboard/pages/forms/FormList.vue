<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-material-card
      color="success"
      dark
      icon="mdi-file-document-multiple"
      title="Avaliações"
      class="px-5 py-3"
    >
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        item-key="name"
        class="elevation-1"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus'
        }"
      />
    </base-material-card>
  </v-container>
</template>

<script>
  import api from '../../../../service/api'

  export default {
    data () {
      return {
        headers: [
          {
            text: 'Título',
            align: 'start',
            value: 'title',
          },
          { text: 'Descrição', value: 'description' },
        ],
        desserts: [],
      }
    },
    created () {
      this.getForms()
    },
    methods: {
      getForms () {
        api
          .get('forms')
          .then(({ data }) => {
            this.desserts = data
          })
      },
    },
  }
</script>
