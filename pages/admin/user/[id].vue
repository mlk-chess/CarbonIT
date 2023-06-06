<script setup>
definePageMeta({
  middleware: ["auth-admin"],
});

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const supabase = useSupabaseClient();
const firstname = ref("");
const name = ref("");
const status = ref("0");
const phone = ref("");
const email = ref("");
const address = ref("");
const city = ref("");
const zip = ref("");
const rib = ref("");
const edit = ref(false);

onMounted(async() => {
  getUser();
  getUserSkills();
});

async function getUser() {
  const {data, error} = await supabase
      .from('user')
      .select()
      .eq('id', id);

  name.value = data[0].lastname;
  firstname.value = data[0].firstname;
  status.value = data[0].status;
  city.value = data[0].city;
  phone.value = data[0].phone;
  address.value = data[0].address;
  email.value = data[0].email;
  rib.value = data[0].rib;
  zip.value = data[0].zipcode;
}

async function updateUser() {
  await $fetch('/api/user/update', {
    method: 'post',
    body: {
      name: name.value,
      firstname: firstname.value,
      status: status.value,
      city: city.value,
      phone: phone.value,
      address: address.value,
      email: email.value,
      rib: rib.value,
      zip: zip.value,
      id: id
    }
  });

  await router.push('/admin/user');
}
</script>

<template>
  <section>
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <form v-on:submit.prevent="updateUser">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="w-full">
            <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prénom</label>
            <input v-model="firstname" type="text" name="firstname" id="firstname"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Prénom de l'utilisateur" required="" :disabled="!edit">
          </div>
          <div class="w-full">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
            <input v-model="name" type="text" name="name" id="name"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Nom de l'utilisateur" required="" :disabled="!edit">
          </div>
          <div>
            <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Statut</label>
            <select v-model="status" id="status" :disabled="!edit"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option selected value="0">Collaborateur</option>
              <option value="1">Administrateur</option>
            </select>
          </div>
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Téléphone</label>
            <input v-model="phone" type="tel" name="phone" id="phone"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="12" required="" :disabled="!edit">
          </div>
          <div class="sm:col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input v-model="email" type="email" name="name" id="name"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Email du collaborateur" required="" :disabled="!edit">
          </div>
          <div class="sm:col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse</label>
            <input v-model="address" type="text" name="name" id="name"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Adresse du collaborateur" required="" :disabled="!edit">
          </div>
          <div class="w-full">
            <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ville</label>
            <input v-model="city" type="text" name="firstname" id="firstname"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Ville de l'utilisateur" required="" :disabled="!edit">
          </div>
          <div class="w-full">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code Postal</label>
            <input v-model="zip" type="text" name="name" id="name"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Code postal de l'utilisateur" required="" :disabled="!edit">
          </div>
          <div class="sm:col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RIB</label>
            <input v-model="rib" type="text" name="name" id="name"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="RIB de l'utilisateur" required="" :disabled="!edit">
          </div>
        </div>
        <button v-show="!edit" type="button" @click="edit=true"
                class="mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Editer
        </button>

        <div v-show="edit">
          <button type="button" @click="edit=false"
                  class="mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Annuler
          </button>

          <button type="submit"
                  class="mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Sauvegarder
          </button>
        </div>
      </form>
    </div>
  </section>
</template>