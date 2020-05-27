<template>
   <q-card flat bordered class="my-card bg-grey-1 q-my-sm">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-subtitle2">Usuário: <span class="text-grey-7 text-weight-light">{{ usuario }}</span></div>
            <div class="text-subtitle2">Assunto: <span class="text-grey-7 text-weight-light">{{ assunto }}</span></div>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle2">Descrição:</div>
        <div class="text-grey-7 text-weight-light">
          {{ descricao }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat class="text-primary">ver mais</q-btn>
        <q-space />
        <q-btn flat color="grey-7" icon="chat_bubble_outline" />
        <q-btn flat color="grey-7" icon="save" />
      </q-card-actions>
    </q-card>
</template>

<script>
export default {
  name: 'CardResumo',
  props: {
    id: {
      type: Number,
      required: true
    },
    usuario: {
      type: String,
      required: true
    },
    assunto: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    }
  }
}
</script>
