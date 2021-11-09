<template>
  <div class="h-64 md:h-36 rounded-md border overflow-hidden bg-white mb-4">
    <div class="flex w-full">
      <div class="w-full md:w-3/4 flex-container">
        <img class="h-32 md:h-36 object-fill" :src="flat.image" alt="" />
        <div class="w-full ml-4 flex flex-col justify-center">
          <h2 class="text-center md:text-left text-2xl font-bold text-blue-900">
            {{ flat.address }}
          </h2>
          <h3 class="text-center md:text-left text-blue-900">
            {{ `${flat.city}, ${flat.state}, ${flat.zip}` }}
          </h3>
          <div class="mt-2 text-center md:text-left">
            <button class="btn btn-green">share</button>
            <button class="btn btn-white">archive</button>
          </div>
        </div>
      </div>
      <div class="hidden w-full md:w-1/4 md:flex justify-end items-center pr-6">
        <div class="h-12 w-12 text-2xl bottom-rs">RS</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxFlat',
  props: {
    flat: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.flex-container {
  @apply flex flex-col md:flex-row justify-start items-center;
}

.btn {
  @apply font-bold text-sm uppercase py-2 px-4 rounded;
}

.btn-white {
  @apply bg-white text-blue-900 border;
}

.btn-white:hover {
  @apply bg-gray-50;
}

.btn-green {
  @apply bg-green-500 text-white;
}

.btn-green:hover {
  @apply bg-green-700;
}

.bottom-rs {
  @apply flex items-center justify-center bg-gray-200 text-white rounded-full;
}
</style>
