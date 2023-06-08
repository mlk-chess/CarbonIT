<template>
    <section class="">
        <ol class="flex items-center w-full mb-4 sm:mb-5 bg-custom-white p-4 rounded shadow">
            <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block">
                <div class="flex items-center justify-center w-10 h-10 bg-custom-black rounded-full lg:h-12 lg:w-12  shrink-0">
                     <img class="mx-auto" src="@/assets/icons/creature-step1.svg">
                </div>
            </li>
            <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                      <img class="mx-auto" src="@/assets/icons/creature-step2.svg">
                </div>
            </li>
            <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                     <img class="mx-auto" src="@/assets/icons/creature-step3.svg">
                </div>
            </li>

             <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                     <img class="mx-auto" src="@/assets/icons/creature-step4.svg">
                </div>
            </li>
            <li class="flex items-center w-full">
                <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                    <img class="mx-auto" src="@/assets/icons/creature-step5.svg">
                </div>
            </li>
        </ol>

        <div class="container mx-auto">
            <div class="mx-auto w-1/2 mb-5 mt-5">
                <img class="mx-auto" src="@/assets/icons/creature-step1.svg">
            </div>
        </div>
    </section>
</template>

<script setup>

import {initFlowbite} from 'flowbite';

useHead({
  bodyAttrs: {
    class: 'bg-[#F1F8FF]'
  }
});

definePageMeta({
  middleware: ["auth"],
  layout: "user"
});
</script>