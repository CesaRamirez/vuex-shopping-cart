<template lang="html">
    <div>
        <ul v-if="numbers.length">
          <li v-for="number in numbers">{{ number }}</li>
        </ul>
        <p v-else>Start adding numbers</p>
        <add-number></add-number>
    </div>
</template>

<script>
  import AddNumber from './AddNumber'
  export default {
    name: 'numbers',
    components: {
      AddNumber
    },
    computed: {
      numbers () {
        return this.$store.getters.numbers
      }
    }
  }
</script>

<style lang="css">
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

    p {
      font-weight: 600;
      color: #636b6f;
      padding: 0 25px;
      font-size: 12px;
    }
</style>
