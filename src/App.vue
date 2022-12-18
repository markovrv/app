<template>
    <div id="app">
        <div id="nav">
            <nav class="navbar navbar-expand-sm"><a href="#" class="navbar-toggler mybtn"><i aria-hidden="true"
                        class="fa fa-bars"></i></a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                          <router-link to="/" class="nav-link mybtn">Главная</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="goods" class="nav-link mybtn">Каталог</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="cart" class="nav-link mybtn">Корзина</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="orders" class="nav-link mybtn">Заказы</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div>
            <div class="container-md text-right">
                <small style="color: rgb(136, 136, 136);" v-if="user.login">
                    Здравствуйте, <a href="javascript://" style="cursor: pointer;">
                        <i aria-hidden="true" class="fa fa-user"></i>
                        {{user.login}}
                    </a>
                    <span> | </span>
                    <a href="javascript://" @click="logOut" style="cursor: pointer;">
                        <i aria-hidden="true" class="fa fa-sign-out"></i>
                            выйти
                    </a>
                </small>
                <small style="color: rgb(136, 136, 136);" v-else>
                    <a href="javascript://" @click="$router.push('login').catch(()=>{})" style="cursor: pointer;">
                        <i aria-hidden="true" class="fa fa-sign-out"></i>
                            Войти
                    </a>
                    <span> | </span>
                    <a href="javascript://" @click="$router.push('register').catch(()=>{})" style="cursor: pointer;">
                        <i aria-hidden="true" class="fa fa-sign-out"></i>
                            зарегистрироваться
                    </a>
                </small>
            </div>
        </div>
        <div class="goods container-md">
          <router-view 
            @good-click="goodToCart" 
            @del-from-cart="delFromCart"
            @logged-in="saveUserData"
            :goods="goods" 
            :cart="cart" 
            :count="cartCount" 
            :user-login="user.login"
            :user-token="user.token"
          />
        </div>
        <button @click="$router.push('cart').catch(()=>{})" type="button" class="btn btn-success btn-lg btn-bottom-left" style="z-index: 100;">
          <i aria-hidden="true" class="fa fa-shopping-cart"></i> {{ cartCount }}
        </button>
		<br><br><br><br><br><br>
        <div id="foot">
            <div class="row">
                <div class="col-sm-4">
					<b>ИП Марков Роман Владимирович</b><br> 
					ОГРН 304432435200110<br> 
					ИНН 432400080501
                </div>
                <div class="col-sm-4">
					<b>Наш адрес:</b><br> 
					г. Киров, ул Милицейская, 31<br> 
					(Центральный рынок)<br>
					<a href="javascript://">
						<i aria-hidden="true" class="fa fa-map-marker"></i> 
						карта 
					</a>
				</div>
                <div class="col-sm-4">
					<b>Контакты</b><br> 
					+7 (999) 123-4567<br> 
					+7 (888) 123-4567<br>
					<a href="https://vk.com/med_honey_kirov" target="_blank">
						<i class="fa fa-vk"></i> 
						med_honey_kirov
					</a>
				</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    cartCount() {
      if(!this.loading)
        localStorage.cart = JSON.stringify(this.cart)
      var count = 0
      this.cart.forEach(item => {
        count += item.count
      })
      return count
    }
  },
  data() {
    return {
      cart: [],
      goods: [],
      loading: true,
      user: {
        login: '',
        token: '',
      }
    }
  },
  methods: {
    saveUserData(data) {
      this.user.login = data.login
      this.user.token = data.token
    },
    logOut() {
      this.user.login = ''
      this.user.token = ''
      this.$router.push('goods').catch(()=>{})
    },
    goodToCart(good){
      var currentGood = this.cart.find(item => (item.id == good.id))
      if (currentGood) currentGood.count++
      else {
        good.count = 1
        this.cart.push(good)
      }
    },
    delFromCart(id){
      if(id == -1) this.cart = []
      else this.cart.splice(id, 1)
    },
    getGoods() {
      this.axios.get('http://195.161.62.172:7777/markov.rv/api/products.php')
        .then(resp => {
          resp.data.forEach(item => {
            item.count = 1
          })
          this.goods = resp.data
          if (localStorage.cart != undefined)
            this.cart = JSON.parse(localStorage.cart)
          this.loading = false
        })
    }
  },
  created() {
    this.getGoods()
    // this.axios.get('data.json').then(console.log)
  }
}
</script>
