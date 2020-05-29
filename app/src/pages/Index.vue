<template>
  <q-page padding class="">
    <div class="text-h5 q-mb-sm">Bem Vindo!</div>
    <div class="text-subtitle1 text-weight-light q-mb-md">Publicações recentes</div>
    <div class="row">
      <CardResumo class="col-12 col-md-4" v-for="publicacao in publicacoes" :key="publicacao.id" v-bind="publicacao" />
    </div>
    <DialogAddPost v-model="dialogAdd" :dialogAdd="dialogAdd" @closedDialog="dialogAdd = false" />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" @click="dialogAdd = true" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import CardResumo from 'components/CardResumo'
import DialogAddPost from 'components/DialogAddPost'

export default {
  name: 'PageIndex',
  components: {
    CardResumo,
    DialogAddPost
  },
  data () {
    return {
      dialogAdd: false,
      publicacoes: [
        {
          id: 1,
          usuario: 'Nome de Usuário',
          assunto: 'texto do assunto',
          descricao: 'lorem jals jfçlk saçlkfj çlaksjçlf kajs çldfj asçlkdjf çlasjf'
        },
        {
          id: 2,
          usuario: 'Nome de Usuário 2',
          assunto: 'texto do assunto',
          descricao: 'lorem jals jfçlk saçlkfj çlaksjçlf kajs çldfj asçlkdjf çlasjf'
        },
        {
          id: 3,
          usuario: 'Nome de Usuário 3',
          assunto: 'texto do assunto',
          descricao: 'lorem jals jfçlk saçlkfj çlaksjçlf kajs çldfj asçlkdjf çlasjf'
        }
      ]
    }
  },
  methods: {
    openDialogAdd () {
      alert('oi')
    }
  }
}
</script>
