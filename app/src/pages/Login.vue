<template>
  <q-page padding class="flex flex-center row">
    <!-- content -->
    <div class="col-12 row text-center">
      <div class="text-h4 q-mb-xl col-12 text-center">Estudos da Quarentena</div>
      <q-input class="q-mb-sm col-12" outlined v-model="email" label="E-mail" />
      <q-input class="q-mb-sm col-12" outlined v-model="password" type="password" label="Password" />
      <q-btn push color="primary" class="col-12 q-py-sm" label="Entrar" />
      <div class="text-body-2 q-mt-lg">
        <q-btn to="/cadastro" flat class="text-lowercase text-primary"><q-icon name="input" style="font-size: 1.5rem;" /> Não tenho cadastro</q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
