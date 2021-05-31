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
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="primary"
            @click="editItem(item)"
          >
            <v-icon small>
              mdi-pencil
            </v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="primary"
            @click="generateQrcode(item)"
          >
            <v-icon small>
              mdi-qrcode-scan
            </v-icon>
          </v-btn>
        </template>
      </v-data-table>
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
          { text: 'Ações', value: 'actions', sortable: false },
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
      editItem (item) {
        console.log(item)
      },
      generateQrcode (item) {
        this.$router.push({
          name: 'Avaliação',
          params: item,
        })
      },
    },
  }
</script>
