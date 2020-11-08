<template>
  <div id="app">
    <div class="ui four column grid">
      <div class="column" v-for="user in users" :key="user.id">
        <div class="ui card">
          <div class="content">
            <div class="header">
              <input type="text" v-model="user.name" style="width:100%">
            </div>
            <div class="meta">
              <a>Friends</a>
            </div>
            <div class="description">
              {{ user.address.street }}<br>
              {{ user.address.zipcode }} {{ user.address.city }}<br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.$http.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      this.users = response.data
    }, (response) => {
      console.log('erreur', response)
    })
  }
}
</script>

<style lang="scss"></style>
