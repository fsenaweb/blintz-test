<template>
  <div
    class="h-48 md:h-28 rounded-md border overflow-hidden bg-gray-50 p-4 mb-4"
  >
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
      <div>
        <div class="grid grid-cols-2 gap-1">
          <label class="block text-left">
            <span
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              >FILTER</span
            >
            <div class="relative">
              <select
                v-model="selectedFilter"
                class="block-select"
                @change="selectFilter"
              >
                <option disabled value="">Select a item</option>
                <option :value="true">Active</option>
                <option :value="false">Inactive</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </label>
          <label class="block text-left">
            <span
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              >SORT</span
            >
            <div class="relative">
              <select
                v-model="selectedSort"
                class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                @change="selectSort"
              >
                <option disabled value="">Select a item</option>
                <option value="address">Address</option>
                <option value="city">City</option>
                <option value="state">State</option>
                <option value="zip">ZIP</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </label>
        </div>
      </div>
      <div class="col-span-2"></div>
      <div>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
          for="search"
        >
          search
        </label>
        <input
          id="search"
          v-model="search"
          class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Search"
          @keydown="searchCityAddress"
        />
      </div>
    </div>
  </div>
</template>

<script>
import flats from '~/utils/db.json'

export default {
  name: 'BoxForm',
  props: {},
  data() {
    return {
      search: '',
      listFlats: [],
      selectedFilter: [],
      selectedSort: [],
    }
  },
  mounted() {
    this.listFlats = flats
    this.$emit('list-flats', this.listFlats)
  },
  methods: {
    searchCityAddress() {
      const results = this.listFlats.filter(
        (x) =>
          x.city.toLowerCase().includes(this.search) ||
          x.address.toLowerCase().includes(this.search)
      )
      this.$emit('list-flats', results)
    },
    selectFilter() {
      const filtered = this.listFlats.filter((item) => {
        return item.active === this.selectedFilter
      })

      this.$emit('list-flats', filtered)
    },
    selectSort() {
      const key = this.selectedSort

      function sorting(a, b) {
        if (a[key] < b[key]) return -1
        if (a[key] > b[key]) return 1
        return 0
      }

      const sortings = this.listFlats.sort(sorting)

      this.$emit('list-flats', sortings)
    },
  },
}
</script>

<style scoped>
.block-select {
  @apply block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500;
}
</style>
