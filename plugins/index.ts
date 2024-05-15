import { defineNuxtPlugin } from '#app';
import { GsapInject } from '@/injections';
import { gsap } from 'gsap';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.provide(GsapInject, gsap);
});
