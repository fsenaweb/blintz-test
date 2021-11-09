<template>
  <div class="container mx-auto p-6">
    <BoxForm @list-flats="showList" />
    <div v-if="resultList.length > 0">
      <BoxFlat
        v-for="(flats, index) in resultList"
        :key="index"
        :flat="flats"
      />
    </div>
    <div v-else>
      <BoxEmpty />
    </div>
  </div>
</template>

<script>
import BoxForm from '~/components/BoxForm'
import BoxFlat from '~/components/BoxFlat'
import BoxEmpty from '~/components/BoxEmpty'

export default {
  components: { BoxEmpty, BoxFlat, BoxForm },
  data() {
    return {
      resultList: [],
    }
  },
  methods: {
    showList(value) {
      this.resultList = value
    },
  },
}
</script>

<style></style>
