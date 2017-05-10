<template lang="html">
    <div class="flex-center position-ref full-height">
        <div class="content">
            <numbers></numbers>
            <div class="title m-b-md">
                {{ sum }}
            </div>
        </div>
    </div>
</template>

<script>
import Numbers from './Numbers'

export default {
  name: 'sum',
  components: {
    Numbers
  },
  computed: {
    sum () {
      return this.$store.getters.sum
    }
  }
}
</script>
