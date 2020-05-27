<template>
  <q-page padding class="">
    <div class="text-h5 q-mb-sm">Bem Vindo!</div>
    <div class="text-subtitle1 text-weight-light q-mb-md">Publicações recentes</div>
    <CardResumo v-for="publicacao in publicacoes" :key="publicacao.id" v-bind="publicacao" />
  </q-page>
</template>

<script>
import CardResumo from 'components/CardResumo'
export default {
  name: 'PageIndex',
  components: {
    CardResumo
  },
  data () {
    return {
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
  }
}
</script>
