<template>
<div class="orders container-md" style="padding-bottom: 20px;">
            <div style="padding: 10px;">
                <div v-for="order, id in orders" :key="id">
                    <div class="title">Заказ № {{order.id}}</div>
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <th scope="row">Имя</th>
                                <td>{{order.name}} <i>({{order.login}})</i></td>
                            </tr>
                            <tr>
                                <th scope="row">Телефон</th>
                                <td>{{order.phone}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Комментарий</th>
                                <td>{{order.addres}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" style="width: 5%;">#</th>
                                    <th scope="col">Товар</th>
                                    <th scope="col" style="width: 10%;">Цена</th>
                                    <th scope="col" style="width: 10%;">Количество</th>
                                    <th scope="col" style="width: 10%;">Сумма</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="good, id1 in order.products"  :key="id1">
                                    <th scope="row">1</th>
                                    <td>{{getGoodName(good.id)}}</td>
                                    <td>{{good.price}}</td>
                                    <td>{{good.count}}</td>
                                    <td>{{good.price + good.count}}</td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th scope="col" colspan="2" class="text-left"><button class="btn btn-sm btn-danger"><i aria-hidden="true" class="fa fa-trash"></i>
                                            удалить заказ </button><button class="btn btn-sm btn-primary" style="margin-left: 5px;"><i aria-hidden="true" class="fa fa-check"></i>
                                            выполнить </button> </th>
                                    <th scope="col" class="text-right"><b>СУММА</b></th>
                                    <th scope="col">1</th>
                                    <th scope="col">600</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  computed: {
  },
  props: {
    userLogin: String,
    userToken: String,
    goods: Array
  },
  data() {
    return {
      orders: [],
    }
  },
  methods: {
    getOrders() {
      this.axios.get(`http://195.161.62.172:7777/markov.rv/api/orders.php?login=${this.userLogin}&token=${this.userToken}`)
      .then(response=>{
        this.orders = response.data
      })
    },
    getGoodName(id) {
      var good = this.goods.find(good=>(Number(good.id) == id))
      if (good) return good.title
      return ""
    }
  },
  created() {
    this.getOrders()
  }
}
</script>