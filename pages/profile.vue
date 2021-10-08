<template>
  <main class="m-4 px-3 py-6 rounded-md shadow-md bg-gray-200">
    <h1 class="font-bold text-center text-2xl mb-8">Perfil</h1>
    <form action="" method="post">
      <div class="flex flex-col justify-center items-center">
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
            class="opacity-0 absolute left-0 top-0 w-full h-full"
          />
          <label for="image"> </label>
        </div>
      </div>
      <ProfileFormControl>
        <label for="name" class="text-gray-700 font-medium">Nombre</label>
        <input
          id="name"
          type="text"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="birthday" class="text-gray-700 font-medium"
          >Fecha de nacimiento</label
        >
        <input
          id="birthdate"
          type="date"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="surname" class="text-gray-700 font-medium">Apellidos</label>
        <input
          id="surname"
          type="text"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="gender" class="text-gray-700 font-medium">Género</label>
        <select
          id="gender"
          name="gender"
          class="rounded focus:border-blue-400 text-gray-700"
        >
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="none">Prefiero no decir</option>
        </select>
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="address" class="text-gray-700 font-medium">Dirección</label>
        <input
          id="address"
          type="text"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="email" class="text-gray-700 font-medium">Email</label>
        <input
          id="email"
          type="email"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="tel" class="text-gray-700 font-medium">Teléfono</label>
        <input
          id="tel"
          type="tel"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="username" class="text-gray-700 font-medium"
          >Nombre de usuario</label
        >
        <input
          id="username"
          type="text"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <button
        type="submit"
        class="transition-all bg-indigo-500 px-5 py-2 text-white w-full rounded active:bg-indigo-700 font-medium"
      >
        Editar datos
      </button>
    </form>
  </main>
</template>
