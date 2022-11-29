<template>
  <div style="padding: 10px;">
    <div v-if="count>0">
      <div class="title">Ваши покупки</div>
      <div class="table-responsive">
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th scope="col" style="width: 5%;">#</th>
                      <th scope="col">Товар</th>
                      <th scope="col" style="width: 10%;">Цена</th>
                      <th scope="col" style="width: 10%;">Количество</th>
                      <th scope="col" style="width: 10%;">Сумма</th>
                      <th scope="col" style="width: 114px;"></th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="good, id in cart" :key="id">
                      <th scope="row">{{ id + 1 }}</th>
                      <td>{{good.title}}</td>
                      <td>{{good.price}}</td>
                      <td><input value="1" type="number" min="1" class="form-control form-control-sm text-center"></td>
                      <td>{{good.price}}</td>
                      <td>
                        <button @click="delItem(id)" class="btn btn-sm btn-danger">
                          <i aria-hidden="true" class="fa fa-trash"></i>
                          удалить
                        </button>
                      </td>
                  </tr>
              </tbody>
              <thead>
                  <tr>
                      <th scope="col" colspan="3" class="text-right"><b>СУММА</b></th>
                      <th scope="col">{{count}}</th>
                      <th scope="col">{{cartSum}}</th>
                      <th scope="col">
                        <a @click="delItem(-1)" class="btn btn-sm btn-danger">ОЧИСТИТЬ</a>
                      </th>
                  </tr>
              </thead>
          </table>
      </div>
      <div class="title">Ваша анкета</div>
      <div>
          <!---->
          <div class="form-group row"><label for="name" class="col-sm-4 text-sm-right"
                  style="margin-top: 5px;">Фамилия, Имя, Отчество</label>
                  <input v-model="name" type="text" id="name"
                  class="form-control col-sm-6"></div>
          <div class="form-group row"><label class="col-sm-4 text-sm-right" style="margin-top: 5px;">Мобильный
                  телефон</label>
              <div class="input-group col-sm-6 phone">
                  <div class="input-group-prepend">
                    <span class="input-group-text">+7</span>
                  </div>
                  <input v-model="phone" v-phone placeholder="(905) 123-4567" maxlength="14" pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
                    required="required" class="form-control">
              </div>
          </div>
          <div class="form-group row"><label for="info" class="col-sm-4 text-sm-right"
                  style="margin-top: 5px;">Пожелания к заказу</label>
                  <textarea v-model="info" type="text" id="info" rows="3"
                  class="form-control col-sm-6"></textarea></div>
      </div>
      <div>
          <div>
              <div>
                <button @click="sendCart" type="button" class="btn btn-success btn-lg"><i aria-hidden="true"
                          class="fa fa-paper-plane"></i> Отправить </button></div>
          </div>
      </div>
    </div>
    <div v-else>
      <h2>Ваша корзина пуста</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      name: '',
      info: ''
    }
  },
  computed: {
    cartSum() {
      var sum = 0
      this.cart.forEach(good=>{
        sum += Number(good.price)
      })
      return sum
    }
  },
  props: {
    cart: Array,
    count: Number
  },
  methods: {
    delItem(id) {
      this.$emit('del-from-cart', id)
    },
    sendCart() {
      var data = {
        name: this.name,
        phone: this.phone,
        info: this.info,
        cart: this.cart,
      }
      console.log(data)
      window.alert('Ваш заказ принят!')
    }
  }
}
</script>
