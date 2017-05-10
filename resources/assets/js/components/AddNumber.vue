<template lang="html">
  <div>
    <a href="#" @click.prevent="add">Add random number</a>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'add-number',
    methods: {
      ...mapActions({
        fetchNumber: 'fetchNumber'
      }),
      add() {
        this.fetchNumber({
          min: 1,
          max: 100
        })
      }
    }
  }
</script>

<style lang="css" scoped>
  a {
    color: blue;
    font-weight: 600;
    text-decoration: none;
  }
</style>