<template>
  <main>
    <h1>Perfil</h1>
    <form action="" method="post">
      <label for="name">Nombre</label>
      <input id="name" type="text" />
      <label for="birthday">Fecha de nacimiento</label>
      <input id="birthdate" type="date" />
      <label for="surname">Apellidos</label>
      <input id="surname" type="text" />
      <label for="gender">Genero</label>
      <select id="gender" name="gender">
        <option value="male">Masculino</option>
        <option value="female">Femenino</option>
        <option value="none">Prefiero no decir</option>
      </select>
      <label for="address">Dirección</label>
      <input id="address" type="text" />
      <label for="email">Email</label>
      <input id="email" type="email" />
      <label for="tel">Teléfono</label>
      <input id="tel" type="tel" />
      <label for="username">Nombre de usuario</label>
      <input id="username" type="text" />
      <button type="submit">Editar datos</button>
    </form>
  </main>
</template>
