<script setup>
  definePageMeta({
    middleware: ["auth"],
  });

  const supabase = useSupabaseClient();
  const user = useSupabaseUser();
  const email = ref(null);
  const password = ref(null);
  const errorLogin = ref(false);

  onMounted(async () => {
    watchEffect(async () => {
      if (user.value) {
        await navigateTo('/private');
      }
    });
  });

  async function login() {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) {
      errorLogin.value = true;
    }
  }
</script>

<template>
  <section class="bg-gray-50">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
          class="w-full max-w-sm p-4 bg-custom-black border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form class="space-y-6" v-on:submit.prevent="login">
          <h5 class="text-xl font-medium text-custom-white">Connexion</h5>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-custom-white">Email</label>
            <input type="email" name="email" id="email"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-transparent focus:ring-0 block w-full p-2.5"
                   placeholder="name@company.com" v-model="email" required>
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-custom-white">Mot de passe</label>
            <input type="password" name="password" id="password" placeholder="••••••••"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-transparent focus:ring-0 block w-full p-2.5"
                   v-model="password" required>
          </div>
          <p v-if="errorLogin" class="text-center mt-4 text-custom-red">Identifiants incorrects</p>
          <button type="submit"
                  class="w-full text-white bg-custom-red font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  </section>
</template>