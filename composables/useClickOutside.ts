import { onMounted, onUnmounted, type Ref } from 'vue';

export default function useClickOutside(
    el: Ref<HTMLElement | null>,
    callback: (event: Event) => void
): void {
    const handleClickOutside = (event: Event) => {
        if (el.value) {
            if (!(el.value == event.target || el.value.contains(event.target as Node))) {
                callback(event);
            }
        }
    };
    if (process.client && typeof window !== 'undefined') {
        onMounted(() => document.addEventListener('click', handleClickOutside));
        onUnmounted(() => document.removeEventListener('click', handleClickOutside));
    }
}
