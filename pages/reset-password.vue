<script setup>
  const supabase = useSupabaseClient();
  const password = ref(null);
  const passwordConfirm = ref(null);
  const errorReset = ref(null);

  async function resetPassword() {
    if (password.value !== passwordConfirm.value) {
      errorReset.value = 'Les mots de passe ne correspondent pas';
    } else {
      const { data, error } = await supabase.auth.updateUser({
        password: password.value
      });

      if (error) {
        errorReset.value = 'Le lien de réinitialisation a expiré';
      }else {
        await navigateTo('/');
      }
    }
  }
</script>

<template>
  <section class="bg-custom-black">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
          class="w-full max-w-sm shadow bg-custom-grey rounded-lg p-4 sm:p-6 md:p-8">
        <form class="space-y-6" v-on:submit.prevent="resetPassword">
          <h5 class="text-xl font-medium text-custom-white text-center">Réinitialisation du mot de passe</h5>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-custom-white">Mot de passe</label>
            <input type="password" name="password" id="password" placeholder="••••••••"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-transparent focus:ring-0 block w-full p-2.5"
                   v-model="password" required>
          </div>

          <div>
            <label for="passwordConfirm" class="block mb-2 text-sm font-medium text-custom-white">Mot de passe de confirmation</label>
            <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="••••••••"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-transparent focus:ring-0 block w-full p-2.5"
                   v-model="passwordConfirm" required>
          </div>
          <p v-if="errorReset" class="text-center mt-4 text-custom-red">{{errorReset}}</p>
          <button type="submit"
                  class="w-full text-white bg-custom-red font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-custom-green hover:text-black">
            Confirmer
          </button>
          <div class="text-sm font-medium text-gray-400">
            <NuxtLink href="/">
              <span class="text-custom-white hover:underline hover:cursor-pointer">Se connecter</span>
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>