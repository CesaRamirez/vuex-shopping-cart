<template lang="html">
    <ul class="v-list">
        <li v-for="number in numbers">{{ number }}</li>
    </ul>
</template>

<script>
  export default {
    name: 'numbers',
    computed: {
      numbers () {
        return this.$store.getters.numbers
      }
    }
  }
</script>

<style lang="scss" scoped>
    ul {
      color: #636b6f;
      padding: 0 25px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: .1rem;
      text-decoration: none;
      text-transform: uppercase;
      list-style-type: none;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }
</style>
