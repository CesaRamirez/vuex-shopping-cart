<template lang="html">
    <div class="flex-center position-ref full-height">
        <div class="content">
            <numbers></numbers>
            <div class="title m-b-md">
                {{ sum }}                
            </div>
            <p>You have generated {{ total }} random numbers</p>
        </div>
    </div>
</template>

<script>
  import Numbers from './Numbers'
  import { mapGetters } from 'vuex'

  export default {
    name: 'sum',
    components: {
      Numbers
    },
    computed: {
      ...mapGetters({
          sum: 'sum',
          total: 'totalNumbers'
      })
    }
}
</script>
