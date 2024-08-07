export function debounce<F extends (...args: never[]) => void>(fn: F, delay: number): (...args: Parameters<F>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return function (...args: Parameters<F>) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn.apply(args);
        }, delay);
    };
}
