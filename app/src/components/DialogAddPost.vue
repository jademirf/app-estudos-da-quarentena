<template>
  <q-dialog
        v-model="dialogAdd"
        full-width
        @hide="$emit('closedDialog')"
        @show="load()"
      >
    <q-card>
      <q-card-section>
        <div class="text-h6 col-12 text-left">Novo plano de estudo</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input class="q-mb-sm col-12" outlined v-model="post.titulo" label="Título:" />
        <q-input class="q-mb-sm col-12" outlined v-model="post.assunto" label="Assunto:" />
        <q-input class="q-mb-sm col-12" outlined v-model="post.descricao" label="Descrição:" type="textarea" />
        <q-select outlined class="q-mb-sm col-12" v-model="post.material" :options="materiais" label="Material de estudo:" />
        <q-select outlined class="q-mb-sm col-12" v-model="post.areaConhecimento" :options="areasDoConhecimento" label="Áreas do Conhecimento:" />
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn class="bg-primary text-white" label="OK" @click="addPost()" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'DialogAddPost',
  data () {
    return {
      post: {
        titulo: '',
        assunto: '',
        descricao: '',
        material: null,
        areaConhecimento: null
      },
      materiais: [
        {
          value: 1,
          label: 'Youtube'
        },
        {
          value: 2,
          label: 'Livro'
        },
        {
          value: 3,
          label: 'Podcast'
        }
      ],
      areasDoConhecimento: [
        {
          value: 1,
          label: 'Informática'
        },
        {
          value: 2,
          label: 'Filosofia'
        },
        {
          value: 3,
          label: 'Saúde'
        }
      ]
    }
  },
  props: {
    dialogAdd: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    addPost () {
      this.$axios.get('https://api.chucknorris.io/jokes/random').then(response => {
        console.log(this.post)
      })
    },
    loadTiposMaterial () {
      console.log('Carregando os tipos de material....')
    },
    loadAreasConhecimento () {
      console.log('Carregando áreas do conhecimento....')
    },
    load () {
      this.loadAreasConhecimento()
      this.loadTiposMaterial()
    }
  }
}
</script>
