<template>
  <input
    :id="$props.id"
    :type="type"
    :disabled="!editing"
    class="transition-all disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-400 block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
</template>

<script>
export default {
  props: {
    editing: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
}
</script>
