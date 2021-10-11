<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="border-b border-gray-200">
      <h2 class="text-lg font-medium text-gray-900">
        CONSULTA, PAGO Y CANCELACION DE CITAS
      </h2>
    </div>
    <div class="flex w-full mt-8 space-x-4 justify-items-stretch">
      <div class="flex-1">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Tipo y numero de identificacion</label
        >
        <div class="mt-1">
          <input
            id="cc"
            type="text"
            name="cc"
            class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="1085.022.234"
            disabled
          />
        </div>
      </div>
      <div class="flex-1">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Nombre</label
        >
        <div class="mt-1">
          <input
            id="nombre"
            type="text"
            name="nombre"
            class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-500"
            placeholder="JAVIER JACOB CARDENAS MORENO"
            disabled
          />
        </div>
      </div>
      <div class="self-end flex-1">
        <button
          type="button"
          class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm disabled:opacity-50 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled
        >
          BUSCAR
        </button>
      </div>
    </div>
    <div class="mt-8"><Table :citas="citas"></Table></div>
  </div>
</template>

<script>
const citas = [
  {
    fecha: '2021/10/15 10:20',
    ips: 'salud del caribe santa lucia',
    servicio: 'consulta de valoracion por odontologo general',
    profesional: 'Ospino Hernandez Juelith',
    valor: '$ 35.000',
  },
  {
    fecha: '2021/10/15 10:20',
    ips: 'salud del caribe santa lucia',
    servicio: 'consulta de valoracion por odontologo general',
    profesional: 'Ospino Hernandez Juelith',
    valor: '$ 35.000',
  },
  {
    fecha: '2021/10/15 10:20',
    ips: 'salud del caribe santa lucia',
    servicio: 'consulta de valoracion por odontologo general',
    profesional: 'Ospino Hernandez Juelith',
    valor: '$ 35.000',
  },
]

export default {
  data() {
    return {
      citas,
    }
  },
}
</script>
