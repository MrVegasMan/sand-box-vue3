import { inject } from 'vue';
import { GsapInject } from '@/injections';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
// import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
// import { Flip } from 'gsap/dist/Flip';

interface UseGsapReturn {
    gsap: GSAP | undefined;
    // flip: typeof Flip
}

export default function (): UseGsapReturn {
    const gsap: GSAP | undefined = inject(GsapInject);
    // gsap?.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, Flip);
    return {
        gsap
        // flip: Flip
    };
}
