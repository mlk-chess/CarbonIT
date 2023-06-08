<script setup>
definePageMeta({
  middleware: ["auth"],
  layout: "user"
});

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

const route = useRoute();
const router = useRouter();
const supabase = useSupabaseClient();

const user = useSupabaseUser();

const firstname = ref("");
const name = ref("");
const phone = ref("");
const email = ref("");
const address = ref("");
const city = ref("");
const zip = ref("");
const rib = ref("");


onMounted(async() => {
 getUser();
});

async function getUser() {
  const {data, error} = await supabase
      .from('user')
      .select()
      .eq('auth_id', user.value.id);

  name.value = data[0].lastname;
  firstname.value = data[0].firstname;
  city.value = data[0].city;
  phone.value = data[0].phone;
  address.value = data[0].address;
  email.value = data[0].email;
  rib.value = data[0].rib;
  zip.value = data[0].zipcode;
}


async function updateUser() {
  await $fetch('/api/user/update-me', {
    method: 'post',
    body: {
      name: name.value,
      firstname: firstname.value,
      city: city.value,
      phone: phone.value,
      address: address.value,
      email: email.value,
      rib: rib.value,
      zip: zip.value
    }
  });
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
                   placeholder="Prénom de l'utilisateur" required="" >
          </div>
          <div class="w-full">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
            <input v-model="name" type="text" name="name" id="name"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Nom de l'utilisateur" required="">
          </div>
          
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Téléphone</label>
            <input v-model="phone" type="tel" name="phone" id="phone"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="12" required="" >
          </div>
          <div class="sm:col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input v-model="email" type="email" name="name" id="name"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Email du collaborateur" required="" >
          </div>
          <div class="sm:col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse</label>
            <input v-model="address" type="text" name="name" id="name"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Adresse du collaborateur" required="" >
          </div>
          <div class="w-full">
            <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ville</label>
            <input v-model="city" type="text" name="firstname" id="firstname"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Ville de l'utilisateur" required="" >
          </div>
          <div class="w-full">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code Postal</label>
            <input v-model="zip" type="text" name="name" id="name"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Code postal de l'utilisateur" required="" >
          </div>
          <div class="sm:col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RIB</label>
            <input v-model="rib" type="text" name="name" id="name"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="RIB de l'utilisateur" required="" >
          </div>
        </div>
      

        <div>
         

          <button type="submit"
                  class="mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Sauvegarder
          </button>
        </div>
      </form>
    </div>
  </section>
</template>