<template>
  <div>
    <button v-if="showButton" @click="test" class="generation">Сгенерировать смс код</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data () {
    return {
      showButton: true,
      code: ''
    }
  },
  methods: {
    async test () {
      this.showButton = false
      this.test1()
    },
    test1 () {
      const url = 'http://localhost:3000/sms/create'
      fetch(url)
        .then(response => response.json())
        .then(json => {
          this.code = json
          this.$router.push({ path: '/sms/create', query: { code: this.code } })
          alert(this.code)
        })
        .catch(error => console.log(error.message))
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.generation {
  background-color: rgb(240, 46, 46);
  color: aqua;
  font-size: 32px;
}
.generation:hover {
  cursor: pointer;
  border-radius: 10px
};
</style>
