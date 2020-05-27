<template>
  <q-page padding class="flex flex-center row">
    <!-- content -->
    <div class="col-12 row text-center">
      <div class="text-h4 q-mb-xl col-12 text-center">Estudos da Quarentena</div>
      <q-input class="q-mb-sm col-12" outlined v-model="nome" label="Nome" />
      <q-input class="q-mb-sm col-12" outlined v-model="sobrenome" label="Sobrenome" />
      <q-input class="q-mb-sm col-12" outlined v-model="email" label="E-mail" />
      <q-input class="q-mb-sm col-12" type="password" outlined v-model="password" label="Password" />
      <q-btn push color="primary" class="col-12 q-py-sm" label="Cadastrar" />
      <div class="text-body-2 q-mt-lg">
        <q-btn to="/controle" flat class="text-lowercase text-primary"><q-icon name="arrow_back" style="font-size: 1.5rem;" /> cancelar</q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
