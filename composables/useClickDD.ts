import { onUnmounted, ref, type Ref, type UnwrapRef, watch } from 'vue';

interface ClickDD {
    callback: (flag: boolean) => void,
    refOutsideElement: Ref<HTMLElement | null | undefined>,
}

export default function useClickDD(config: ClickDD): {
    openDD: () => void;
    closedDD: () => void;
    toggleDD: () => void;
    ddMenuOpen: Ref<UnwrapRef<boolean>>
} {
    const {
        callback,
        refOutsideElement
    } = config;
    const noSsr = process.client && typeof window !== 'undefined';
    const isHandlerAttached = ref<boolean>(false);
    const ddMenuOpen = ref<boolean>(false);

    function clickOutside(event: Event) {
        if (!event.composedPath().includes(refOutsideElement.value as Node)) {
            ddMenuOpen.value = false;
            callback(true);
        }
    }

    const setListener = (setRemove: boolean) => {
        if (noSsr) {
            window[
                setRemove
                    ? 'addEventListener'
                    : 'removeEventListener'
            ]('click', clickOutside);
        }
    };

    const openDD = () => {
        ddMenuOpen.value = true;
        callback(false);
    };

    const closedDD = () => {
        ddMenuOpen.value = false;
        callback(true);
    };

    const toggleDD = () => {
        if (ddMenuOpen.value) {
            closedDD();
        } else {
            openDD();
        }
    };

    watch(ddMenuOpen, open => {
        if (open && !isHandlerAttached.value) {
            setListener(true);
            isHandlerAttached.value = true;
        } else if (!open && isHandlerAttached.value) {
            setListener(false);
            isHandlerAttached.value = false;
        }
    });

    onUnmounted(() => {
        refOutsideElement.value = null;
        setListener(false);
    });

    return {
        openDD,
        closedDD,
        toggleDD,
        ddMenuOpen
    };
}



