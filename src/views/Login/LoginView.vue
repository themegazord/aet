<template>
  <div id="login">
    <div id="logo-empresa">
      <h1>Logo da empresa</h1>
    </div>
    <div id="container-login">
      <v-form>
        <v-text-field label="Insira seu usuário" v-model="usuario"></v-text-field>
        <v-text-field label="Insira sua senha" v-model="senha" type="password"></v-text-field>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    usuario: '',
    senha: '',
  }),
};
</script>

<style>
#login {
  background-color: --primary-color-pale-spring-bud;
}
</style>
