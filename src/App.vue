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
                <small style="color: rgb(136, 136, 136);">
                    Здравствуйте, <a href="javascript://" style="cursor: pointer;">
                        <i aria-hidden="true" class="fa fa-user"></i>
                        Марков Роман
                    </a>
                    <span> | </span>
                    <a href="javascript://" style="cursor: pointer;">
                        <i aria-hidden="true" class="fa fa-users"></i> 
                        пользователи
                    </a>
                    <span> | </span>
                    <a href="javascript://" style="cursor: pointer;">
                        <i aria-hidden="true" class="fa fa-sign-out"></i>
                            выйти
                    </a>
                </small>
            </div>
        </div>
        <div class="goods container-md">
          <router-view 
            @good-click="goodToCart" 
            @del-from-cart="delFromCart" 
            :goods="goods" 
            :cart="cart" 
            :count="cartCount" 
          />
        </div>
        <button @click="$router.push('cart')" type="button" class="btn btn-success btn-lg btn-bottom-left" style="z-index: 100;">
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
      return this.cart.length
    }
  },
  data() {
    return {
      cart: [],
      goods: [
        {
          id: 1,
          title: "Товар 1",
          description: "Описание товара 1",
          price: "6000",
          pic: "img/pic.jpg",
        },
        {
          id: 2,
          title: "Товар 2",
          description: "Описание товара 2",
          price: "6502",
          pic: "img/pic.jpg",
        }
      ]
    }
  },
  methods: {
    goodToCart(good){
      this.cart.push(good)
    },
    delFromCart(id){
      if(id == -1) this.cart = []
      else this.cart.splice(id, 1)
    }
  }
}
</script>
