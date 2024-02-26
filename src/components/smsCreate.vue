<template>
    <div>
        <input
        v-bind:class="{'invalid':$v.form.login.$invalid}"
        v-model.trim="form.login"
        type="text"
         placeholder="Введите смс код">
         <button  type="submit"
                  @click="checkForm"
                  v-bind:disabled="$v.form.login.$invalid"
                  class="send" >Отправить
         </button>
    </div>
  </template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  name: 'smsCreate',
  data: function () {
    return {
      form: {
        login: ''
      }
    }
  },
  methods: {
    checkForm () {
      const url = 'http://localhost:3000/sms/check'
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(this.form),
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
        .then(response => {
          if (response.status === 200) {
            alert('success')
          } else {
            throw new Error()
          }
        })
        .catch(error => alert('ERROR', error))
    }
  },
  validations: {
    form: {
      login: {
        required,
        numeric,
        minLength: minLength(4),
        maxLength: maxLength(4)
      }
    }
  }
}
</script>
