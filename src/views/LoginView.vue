<template>
  <div class="login">
    <div class="login container-md">
      <div class="card cardauth">
        <div class="card-body">
          <h5 class="card-title">Авторизация</h5>
          <div class="card-text">
            <div class="form-group">
              <label for="login">Логин</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i aria-hidden="true" class="fa fa-user"></i></span>
                </div>
                <input v-model="login" type="text" maxlength="14" required="required" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label for="password">Пароль</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i aria-hidden="true" class="fa fa-key"></i>
                  </span>
                </div>
                <input v-model="password" type="password" id="password" class="form-control">
              </div>
            </div>
            <button @click="auth" type="button" class="mybtn"> Вход </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    auth() {
      this.axios.post('http://195.161.62.172:7777/markov.rv/api/users.php', {
        auth: true,
        login: this.login,
        password: this.password
      }).then(resp => {
        if(resp.data.message) {
          this.$emit('logged-in', {token: resp.data.token, login: resp.data.login})
          this.$router.push('goods').catch(()=>{})
        }
        if(resp.data.error) alert(resp.data.error)
      })
    }
  }
}
</script>
