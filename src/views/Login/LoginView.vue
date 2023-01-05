<template>
  <div id="login">
    <div id="logo-empresa">
      <h1>Logo da empresa</h1>
    </div>
    <div id="container-login">
      <div id="container-login-form">
        <h2>Faça seu login</h2>
        <v-form>
          <v-text-field label="Insira seu usuário" v-model="usuario"></v-text-field>
          <v-text-field label="Insira sua senha" v-model="senha" type="password"></v-text-field>
          <v-btn>Login</v-btn>
        </v-form>
      </div>
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

<style src="./style.scss" lang="scss" scoped/>
