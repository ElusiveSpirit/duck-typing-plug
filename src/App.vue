<template>
  <div>
    <p class="article" v-if="email || success">
      <template v-if="email && !success">
        Добро пожаловать, {{ email }}<br>
      </template>
      <template v-if="success">
        Спасибо за вашу подписку.
      </template>
      <template v-if="email">
        <b @click="enterNewEmail()" class="article__link">Подписаться с другим Email</b>
      </template>
    </p>
    <form v-if="!success && !email" @submit.prevent="submitForm()" id="signup-form" method="post" action="#">
      <input v-model="newEmail" type="email" name="email" id="email" placeholder="Email" />
      <input v-if="!loading" type="submit" value="Подписаться" class="animated" />
      <spinner v-else></spinner>
    </form>
  </div>
</template>

<script>
import { refs } from '@/firebase'
import Spinner from '@/components/Spinner.vue'

export default {
  name: 'app',
  data: () => {
    return {
      loading: false,
      success: false,
      email: null,
      newEmail: ''
    }
  },
  components: {
    Spinner
  },
  created () {
    this.email = this.$cookie.get('email')
  },
  methods: {
    submitForm () {
      this.loading = true
      if (this.newEmail && this.newEmail.includes('@') && this.newEmail.length > 5) {
        try {
          console.log(refs.emails.push({
            email: this.newEmail,
            createdAt: new Date()
          }))
          this.success = true
          this.$cookie.set('email', this.newEmail, 60)
          this.email = this.newEmail
          this.newEmail = ''
        } catch (e) {
          console.log(e)
        }
      }
      this.loading = false
    },
    enterNewEmail () {
      this.email = null
      this.success = false
    }
  }
}
</script>

<style lang="scss">
  span {
    top: -5px;

    @media screen and (max-width: 480px) {
      float: none !important;
      margin: 1.25em auto !important;
    }
  }

  .article {
    font-size: 1.35em;
    line-height: 1.65em;
    margin-bottom: 1em;

    &__link {
      font-weight: normal;
      text-decoration: underline;
      cursor: pointer;
      transition: color .3s ease;
      color: rgba(255, 255, 255, 0.75);

      &:hover {
        color: #1cb495;
      }
    }
  }
</style>
