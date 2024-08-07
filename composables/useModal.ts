import { onMounted, type Ref, watch, type WritableComputedRef } from 'vue';
import useClickOutside from '@/composables/useClickOutside';

export default function useModal(
    computedModelValue: WritableComputedRef<boolean>,
    refModalBody: Ref<HTMLElement | null | HTMLDivElement>,
    showClose: boolean
) {
    const noSsr = process.client && typeof window !== 'undefined';
    const setBodyStyle = (property: string) => {
        if (noSsr) {
            document.body.style.overflow = property;
        }
    };

    const toggleBodyScroll = (disable: boolean) => {
        const property = disable ? 'hidden' : 'auto';
        setBodyStyle(property);
    };

    const toggleFocusTrap = (trap: boolean) => {
        if (noSsr) {
            const focusableOutsideElements = Array.from(
                document?.querySelectorAll(
                    'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
                )
            );
            focusableOutsideElements.forEach((el: Element) => {
                if (trap) {
                    el.setAttribute('tabindex', '-1');
                } else {
                    el.removeAttribute('tabindex');
                }
            });
        }
    };

    watch(
        computedModelValue,
        newValue => {
            toggleBodyScroll(newValue);
            if (newValue) {
                // toggleBodyScroll(newValue);
                toggleFocusTrap(newValue);
            }
        },
        { immediate: true }
    );

    const closedPopUp = () => {
        computedModelValue.value = false;
    };

    onMounted(() => {
        if (showClose && computedModelValue.value && refModalBody.value) {
            useClickOutside(refModalBody, closedPopUp);
        }
    });

    return { closedPopUp };
}
