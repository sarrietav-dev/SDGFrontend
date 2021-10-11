<template>
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <div
        class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
      >
        <table class="min-w-full divide-y divide-gray-200 table-fixed">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="w-2/12 px-3 py-3 text-xs font-medium tracking-tighter text-center text-gray-500 uppercase"
              >
                FECHA-HORA
              </th>
              <th
                scope="col"
                class="w-2/12 px-3 py-3 text-xs font-medium tracking-tighter text-center text-gray-500 uppercase"
              >
                IPS
              </th>
              <th
                scope="col"
                class="w-2/12 px-3 py-3 text-xs font-medium tracking-tighter text-center text-gray-500 uppercase"
              >
                SERVICIO
              </th>
              <th
                scope="col"
                class="w-1/12 px-3 py-3 text-xs font-medium tracking-tighter text-center text-gray-500 uppercase"
              >
                PROFESIONAL
              </th>
              <th
                scope="col"
                class="w-2/12 px-3 py-3 text-xs font-medium tracking-tighter text-center text-gray-500 uppercase"
              >
                ORDEN VALOR
              </th>
              <th
                scope="col"
                class="w-1/12 px-3 py-3 text-xs font-medium tracking-tighter text-center text-gray-500 uppercase"
              >
                PAGAR
              </th>
              <th
                scope="col"
                class="w-1/12 px-3 py-3 text-xs font-medium tracking-tighter text-center text-gray-500 uppercase"
              >
                <span>REPROGRAMAR</span>
              </th>
              <th
                scope="col"
                class="w-1/12 px-3 py-3 text-xs font-medium tracking-tighter text-center text-gray-500 uppercase"
              >
                <span>CANCELAR</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(cita, citaIdx) in citas"
              :key="citaIdx"
              :class="citaIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
            >
              <td
                class="px-3 py-4 text-xs font-medium text-center text-gray-500 uppercase whitespace-normal"
              >
                {{ cita.fecha }}
              </td>
              <td
                class="px-3 py-4 text-xs text-center text-gray-500 uppercase whitespace-normal"
              >
                {{ cita.ips }}
              </td>
              <td
                class="px-3 py-4 text-xs text-center text-gray-500 uppercase whitespace-normal"
              >
                {{ cita.servicio }}
              </td>
              <td
                class="px-3 py-4 text-xs text-center text-gray-500 uppercase whitespace-normal"
              >
                {{ cita.profesional }}
              </td>
              <td
                class="px-3 py-4 text-xs text-center text-gray-500 uppercase whitespace-normal"
              >
                {{ cita.valor }}
              </td>
              <td
                class="px-3 py-4 text-xs font-medium text-center uppercase whitespace-normal"
              >
                <div class="flex flex-col items-center">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">
                    <img
                      class="w-6 h-6"
                      src="~assets/icons/CurrencyDollar.svg"
                    />
                  </a>
                </div>
              </td>
              <td
                class="px-3 py-4 text-xs font-medium text-center uppercase whitespace-normal"
              >
                <div class="flex flex-col items-center">
                  <client-only><DatepickerWrapper /></client-only>
                </div>
              </td>
              <td
                class="items-center px-3 py-4 text-xs font-medium text-center uppercase whitespace-normal"
              >
                <div class="flex flex-col items-center">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">
                    <img class="w-6 h-6" src="~assets/icons/Cancel.svg" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    citas: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
