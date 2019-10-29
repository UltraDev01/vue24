<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-container>
        <b-navbar-brand to="/">Vektor</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Гланая</b-nav-item>
            <b-nav-item-dropdown text="Сервис" right>
              <b-dropdown-item href="#">Работы 1</b-dropdown-item>
              <b-dropdown-item href="#">Работы 2</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/about">О нас</b-nav-item>
            <b-nav-item to="/contact">Контакты</b-nav-item>

            <b-nav-form>
              <b-button v-b-modal.modal-1>Обратный звонок</b-button>

              <b-modal id="modal-1" title="Представьтесь и мы Вам перезвоним" v-model="show">

                <b-form-input type="text" placeholder="Enter your name"></b-form-input>
                <b-form-input type="phone" placeholder="Enter phone"></b-form-input>

                <template v-slot:modal-footer>
                  <div class="w-100">
                    <b-button
                      variant="primary"
                      class="float-right"
                      @click="show=false"
                    >
                      Отправить
                    </b-button>
                  </div>
                </template>
              </b-modal>
            </b-nav-form>

          </b-navbar-nav>

        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
      }
    }
  }
</script>