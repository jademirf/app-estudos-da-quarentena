<template>
  <q-page padding>
    <div class="text-subtitle2 q-mt-xs">Usuário:</div>
    <div class="text-subtitle2 text-weight-light q-mb-lg">Jademir de Moura</div>
    <q-card>
      <q-card-section class="text-grey-9 text-left">
        <div class="text-subtitle2 col-12">TÍTULO:</div>
        <div class="text-subtitle2 text-weight-light q-mt-xs">Estudo dia 65!</div>
        <div class="text-subtitle2 col-12">ASSUNTO:</div>
        <div class="text-subtitle2 text-weight-light q-mt-xs">Nodejs</div>
        <div class="text-subtitle2 col-12 q-mt-sm">DESCRIÇÃO:</div>
        <div class="text-subtitle2 text-weight-light text-justify q-mt-xs">{{
        lorem }}</div>
        <div class="text-subtitle2 col-12 q-mt-sm">MATERIAL:</div>
        <div class="text-subtitle2 text-weight-light q-mb-sm">Vídeo do youtube</div>
        <div class="text-subtitle2 col-12">ÁREA DO CONHECIMENTO:</div>
        <div class="text-subtitle2 text-weight-light">Informática</div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6 col-12 text-left row justify-around">
          <q-btn class="bg-primary text-white" label="Tenho interesse" />
          <q-btn class="bg-primary text-white" label="Compartilhar" />
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6 col-12 text-left">
          <div class="text-subtitle1 text-weight-bold col-12 q-my-sm">COMENTÁRIOS</div>
          <div class="text-subtitle2 q-mb-sm">Você</div>
          <q-input class="q-mb-sm col-12" outlined v-model="newComment" type="textarea" />
          <div class="text-right">
            <q-btn class="bg-primary text-white q-px-lg q-py-sm" no-caps rounded label="Publicar" />
          </div>
        </div>
        <section class="q-my-lg">
          <q-card class="q-pa-sm q-mt-md" v-for="comment in comments" :key="comment.id">
            <div class="text-subtitle1 text-weight-bold text-primary col-12 q-my-sm">{{ comment.user }}</div>
            <div class="text-caption q-mb-sm text-justify">{{ comment.text }}</div>
          </q-card>
        </section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      newComment: '',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non roident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: [
        {
          id: 1,
          user: 'Jademir de Moura',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          id: 2,
          user: 'Francisco',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          id: 3,
          user: 'Mariana',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          id: 4,
          user: 'Ibson',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          id: 5,
          user: 'Jademir de Moura',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        }
      ]
    }
  }
}
</script>
