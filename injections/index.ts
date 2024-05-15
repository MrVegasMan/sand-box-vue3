import type { InjectionKey } from 'vue';
import { gsap } from 'gsap';


export const GsapInject = Symbol('Gsap') as InjectionKey<typeof gsap>;
