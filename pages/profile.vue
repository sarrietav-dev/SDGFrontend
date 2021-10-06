<template>
  <main class="m-6">
    <h1 class="font-bold text-center text-2xl my-4">Perfil</h1>
    <form action="" method="post">
      <ProfileFormControl>
        <label for="name">Nombre</label>
        <input
          id="name"
          type="text"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="birthday">Fecha de nacimiento</label>
        <input
          id="birthdate"
          type="date"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="surname">Apellidos</label>
        <input
          id="surname"
          type="text"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="gender">Género</label>
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
        <label for="address">Dirección</label>
        <input
          id="address"
          type="text"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="tel">Teléfono</label>
        <input
          id="tel"
          type="tel"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="username">Nombre de usuario</label>
        <input
          id="username"
          type="text"
          class="rounded focus:border-blue-400 text-gray-700"
        />
      </ProfileFormControl>
      <button
        type="submit"
        class="transition-all bg-indigo-500 px-5 py-2 text-white w-full rounded active:bg-indigo-700"
      >
        Editar datos
      </button>
    </form>
  </main>
</template>
