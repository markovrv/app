<template>
  <div class="goods">
    <h1>Интернет магазин</h1>
    <div class="row">
      <div v-for="good in goods" :key="good.id" class="col-md-6 col-lg-4">
          <div class="card">
              <img :src="good.image" :alt="good.title" class="card-img-top">
              <div class="card-body">
                  <h5 class="card-title">{{good.title}}</h5>
                  <p class="card-text">{{good.description}}</p>
                  <h2 class="card-title">{{good.price}}₽</h2>
                  <a class="mybtn" style="cursor: pointer;" @click="$emit('good-click', good)" >
                    <i aria-hidden="true" class="fa fa-cart-plus"></i>
                    в корзину
                  </a>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: Array
  }
}
</script>
