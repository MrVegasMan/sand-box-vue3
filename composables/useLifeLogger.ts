import { onMounted, onUnmounted, onUpdated } from 'vue';

export function useLifeLogger(payload: {
    name: string;
    typeLife?: 'onMounted' | 'onUpdated' | 'onUnmounted' | 'all';
}) {
    const debug = false;
    if (!debug) {
        return;
    }
    const Style = {
        base: [
            'color: #fff',
            'background-color: #444',
            'padding: 2px 4px',
            'border-radius: 2px'
        ],
        warning: ['color: #eee', 'background-color: red'],
        success: ['background-color: green']
    };

    const log = (text: string, extra: unknown[] = []) => {
        let style = Style.base.join(';') + ';';
        style += extra.join(';');
        //eslint-disable-next-line no-console
        console.log(`%c${text}`, style);
    };

    onMounted(() => {
        if (!payload.typeLife || payload.typeLife === 'onMounted')
            log(`${payload.name}: onMounted`, Style.success);
    });

    onUpdated(() => {
        if (!payload.typeLife || payload.typeLife === 'onUpdated')
            log(`${payload.name}:onUpdated`);
    });

    onUnmounted(() => {
        if (!payload.typeLife || payload.typeLife === 'onUnmounted')
            log(`${payload.name}: onUnmounted`, Style.success);
    });
}
