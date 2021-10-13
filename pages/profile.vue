<template>
  <main class="mx-32 my-10 px-3 py-6 rounded-md shadow-md bg-gray-200">
    <h1 class="font-bold text-center text-2xl mb-8">Perfil</h1>
    <form
      method="post"
      class="lg:grid grid-cols-4 grid-rows-5 gap-x-10 lg:px-9"
      @submit.prevent=""
    >
      <div class="flex flex-col justify-center items-center row-span-2">
        <div class="rounded-full h-32 w-32 text-center m-0">
          <svg
            viewBox="0 0 191 191"
            class="fill-current text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M83.5517 190.457C72.2585 188.917 63.1539 186.043 52.6075 180.689C24.2093 166.272 4.75864 138.775 0.621143 107.196C-0.576273 98.0572 -0.00217545 84.8923 1.99621 75.664C4.80981 62.671 11.0002 49.2784 19.3925 38.0278C23.3424 32.7328 32.8526 23.2123 38.0707 19.3296C50.7008 9.93167 64.7746 3.80816 79.9949 1.0884C85.757 0.0587392 99.5252 -0.345387 105.552 0.338237C122.671 2.27993 138.94 8.83858 153.334 19.6011C158.092 23.1583 167.761 32.8315 171.338 37.6114C181.94 51.7806 188.824 68.7952 190.607 85.2334C191.202 90.7236 191.106 102.035 190.42 107.275C188.245 123.873 181.182 140.745 170.781 154.188C167.234 158.774 157.821 168.06 153.223 171.512C139.513 181.803 123.779 188.29 107.283 190.454C101.742 191.18 88.8655 191.182 83.5517 190.457ZM38.6437 158.565C42.5171 156.261 46.4214 154.452 55.6441 150.688C66.2242 146.369 70.2161 144.217 73.2997 141.168C77.1309 137.38 77.2458 137.009 77.4326 127.827L77.5908 120.049L75.848 118.185C73.0381 115.179 69.9165 108.426 68.9233 103.205C68.4854 100.902 68.3689 100.708 67.2493 100.418C64.7508 99.7704 62.5535 95.5564 61.9551 90.2648C61.6374 87.4556 62.2264 85.1606 63.6943 83.4879L64.8097 82.217L64.2572 80.1003C62.0735 71.7339 61.213 59.6456 62.3268 52.9814C63.5703 45.5413 65.503 41.5112 70.0105 36.9595C72.4854 34.4603 73.7341 33.539 76.3518 32.2806C81.7732 29.6745 87.9738 28.3907 95.2043 28.3772C102.71 28.3633 108.352 30.0664 111.262 33.2246C112.504 34.5726 113.208 34.989 114.81 35.3231C121.823 36.7857 126.801 41.8553 128.962 49.7346C129.665 52.2968 129.784 53.7644 129.785 59.8305C129.786 65.9537 129.647 67.6395 128.77 72.1079C128.211 74.9566 127.427 78.4184 127.028 79.8008L126.301 82.3142L127.384 83.5265C128.819 85.1337 129.412 87.4678 129.096 90.2648C128.498 95.5533 126.384 99.6169 123.784 100.475C122.611 100.863 122.494 101.058 122.11 103.285C121.242 108.314 117.965 115.459 115.135 118.492L113.846 119.875L113.868 127.606C113.885 133.358 114.029 135.666 114.432 136.622C115.38 138.874 118.009 141.783 120.709 143.567C124.295 145.937 126.23 146.868 134.956 150.42C143.749 154 149.137 156.521 152.766 158.755C154.193 159.633 155.609 160.352 155.911 160.352C156.645 160.352 163.084 153.179 166.709 148.324C182.267 127.485 187.714 99.4883 181.24 73.6426C175.67 51.4079 161.938 32.4956 142.476 20.2573C132.865 14.214 120.438 9.78368 107.605 7.82586C102.404 7.03237 89.9961 6.91651 84.7883 7.61281C56.8708 11.3454 33.0528 26.8403 19.2918 50.2218C7.47589 70.2985 4.04445 95.5368 10.0304 118.34C12.6756 128.417 17.5848 139.02 23.2754 146.947C27.402 152.696 34.28 160.352 35.3176 160.352C35.4949 160.352 36.9917 159.548 38.6437 158.565Z"
            />
          </svg>
        </div>
        <div class="relative my-6">
          <button
            class="bg-indigo-500 text-white font-medium px-5 py-2 rounded"
          >
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
        <ProfileFormInput id="name" type="text" :editing="editing" />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="birthday" class="text-gray-700 font-medium"
          >Fecha de nacimiento</label
        >
        <input
          id="birthdate"
          type="date"
          class="transition-all disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-400 block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          :disabled="!editing"
        />
      </ProfileFormControl>
      <ProfileFormControl class="col-start-2 col-span-2">
        <label for="surname" class="text-gray-700 font-medium">Apellidos</label>
        <ProfileFormInput id="surname" type="text" :editing="editing" />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="gender" class="text-gray-700 font-medium">Género</label>
        <select
          id="gender"
          name="gender"
          class="transition-all disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-400 block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          :disabled="!editing"
        >
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="none">Prefiero no decir</option>
        </select>
      </ProfileFormControl>
      <ProfileFormControl class="col-span-2">
        <label for="address" class="text-gray-700 font-medium">Dirección</label>
        <ProfileFormInput id="address" type="text" :editing="editing" />
      </ProfileFormControl>
      <ProfileFormControl class="col-span-2">
        <label for="email" class="text-gray-700 font-medium">Email</label>
        <ProfileFormInput id="email" type="email" :editing="editing" />
      </ProfileFormControl>
      <ProfileFormControl class="col-span-2">
        <label for="tel" class="text-gray-700 font-medium">Teléfono</label>
        <ProfileFormInput id="tel" type="tel" :editing="editing" />
      </ProfileFormControl>
      <ProfileFormControl class="col-span-2">
        <label for="username" class="text-gray-700 font-medium"
          >Nombre de usuario</label
        >
        <ProfileFormInput id="username" type="text" :editing="editing" />
      </ProfileFormControl>
      <button
        :type="buttonType"
        class="transition-all bg-indigo-500 px-5 py-2 text-white w-full rounded active:bg-indigo-700 font-medium col-start-2 col-span-2 justify-self-center lg:self-center lg:w-52"
        :class="buttonEditingStyles"
        @click="handleEdit"
      >
        {{ editing ? 'Guardar cambios' : 'Editar perfil' }}
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
