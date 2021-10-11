<template>
  <v-date-picker v-model="date">
    <template #default="{ inputEvents }">
      <img
        class="w-6 h-6"
        src="~assets/icons/CalendarIcon.svg"
        v-on="inputEvents"
      />
    </template>
  </v-date-picker>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    }
  },
}
</script>
