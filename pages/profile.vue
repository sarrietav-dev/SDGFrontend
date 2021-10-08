<template>
  <main class="mx-32 my-10 px-3 py-6 rounded-md shadow-md bg-gray-200">
    <h1 class="font-bold text-center text-2xl mb-8">Perfil</h1>
    <form
      method="post"
      class="lg:grid grid-cols-4 grid-rows-5 gap-x-10 lg:px-9"
      @submit.prevent=""
    >
      <div class="flex flex-col justify-center items-center row-span-2">
        <img
          src="https://generative-placeholders.glitch.me/image?width=600&height=300&style=tiles"
          class="rounded-full h-32 w-32 text-center m-0"
        />
        <div class="relative my-6">
          <button class="bg-indigo-300 active:bg-indigo-400 px-5 py-2 rounded">
            Sube tu imagen
          </button>
          <input
            id="image"
            type="file"
            name="image"
            class="opacity-0 absolute left-0 top-0 w-full h-full cursor-pointer"
          />
          <!-- To hide the input[type="file"] label -->
          <label for="image"> </label>
        </div>
      </div>
      <ProfileFormControl class="col-start-2 col-span-2">
        <label for="name" class="text-gray-700 font-medium">Nombre</label>
        <input
          id="name"
          type="text"
          class="transition-all rounded focus:border-blue-400 text-gray-700 lg:w-full disabled:bg-gray-600 disabled:text-gray-400 disabled:border-gray-300"
          :disabled="!editing"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="birthday" class="text-gray-700 font-medium"
          >Fecha de nacimiento</label
        >
        <input
          id="birthdate"
          type="date"
          class="transition-all rounded focus:border-blue-400 text-gray-700 disabled:bg-gray-600 disabled:text-gray-400 disabled:border-gray-300"
          :disabled="!editing"
        />
      </ProfileFormControl>
      <ProfileFormControl class="col-start-2 col-span-2">
        <label for="surname" class="text-gray-700 font-medium">Apellidos</label>
        <input
          id="surname"
          type="text"
          class="transition-all rounded focus:border-blue-400 text-gray-700 lg:w-full disabled:bg-gray-600 disabled:text-gray-400 disabled:border-gray-300"
          :disabled="!editing"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="gender" class="text-gray-700 font-medium">Género</label>
        <select
          id="gender"
          name="gender"
          class="transition-all rounded focus:border-blue-400 text-gray-700 disabled:bg-gray-800 disabled:text-gray-400 disabled:border-gray-300"
          :disabled="!editing"
        >
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="none">Prefiero no decir</option>
        </select>
      </ProfileFormControl>
      <ProfileFormControl class="col-span-2">
        <label for="address" class="text-gray-700 font-medium">Dirección</label>
        <input
          id="address"
          type="text"
          class="transition-all rounded focus:border-blue-400 text-gray-700 lg:w-full disabled:bg-gray-600 disabled:text-gray-400 disabled:border-gray-300"
          :disabled="!editing"
        />
      </ProfileFormControl>
      <ProfileFormControl class="col-span-2">
        <label for="email" class="text-gray-700 font-medium">Email</label>
        <input
          id="email"
          type="email"
          class="transition-all rounded focus:border-blue-400 text-gray-700 lg:w-full disabled:bg-gray-600 disabled:text-gray-400 disabled:border-gray-300"
          :disabled="!editing"
        />
      </ProfileFormControl>
      <ProfileFormControl class="col-span-2">
        <label for="tel" class="text-gray-700 font-medium">Teléfono</label>
        <input
          id="tel"
          type="tel"
          class="transition-all rounded focus:border-blue-400 text-gray-700 lg:w-full disabled:bg-gray-600 disabled:text-gray-400 disabled:border-gray-300"
          :disabled="!editing"
        />
      </ProfileFormControl>
      <ProfileFormControl class="col-span-2">
        <label for="username" class="text-gray-700 font-medium"
          >Nombre de usuario</label
        >
        <input
          id="username"
          type="text"
          class="transition-all rounded focus:border-blue-400 text-gray-700 lg:w-full disabled:bg-gray-600 disabled:text-gray-400 disabled:border-gray-300"
          :disabled="!editing"
        />
      </ProfileFormControl>
      <button
        :type="buttonType"
        class="transition-all bg-indigo-500 px-5 py-2 text-white w-full rounded active:bg-indigo-700 font-medium col-start-2 col-span-2 justify-self-center lg:self-center lg:w-52"
        :class="buttonEditingStyles"
        @click="handleEdit"
      >
        Editar datos
      </button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      editing: false,
    }
  },
  computed: {
    buttonType() {
      return this.editing ? 'submit' : 'button'
    },
    buttonEditingStyles() {
      return this.editing ? 'bg-green-500 active:bg-green-600' : ''
    },
  },
  methods: {
    handleEdit() {
      this.editing = !this.editing
    },
  },
}
</script>
