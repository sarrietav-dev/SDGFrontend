<template>
  <main class="m-6">
    <h1 class="font-bold text-center text-2xl my-4">Perfil</h1>
    <form action="" method="post">
      <ProfileFormControl>
        <label for="name">Nombre</label>
        <input id="name" type="text" />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="birthday">Fecha de nacimiento</label>
        <input id="birthdate" type="date" />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="surname">Apellidos</label>
        <input id="surname" type="text" />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="gender">Genero</label>
        <select id="gender" name="gender">
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="none">Prefiero no decir</option>
        </select>
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="address">Dirección</label>
        <input id="address" type="text" />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="email">Email</label>
        <input id="email" type="email" />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="tel">Teléfono</label>
        <input id="tel" type="tel" />
      </ProfileFormControl>
      <ProfileFormControl>
        <label for="username">Nombre de usuario</label>
        <input id="username" type="text" />
      </ProfileFormControl>
      <button type="submit">Editar datos</button>
    </form>
  </main>
</template>
