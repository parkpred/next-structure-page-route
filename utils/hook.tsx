import { useCallback, useEffect, useState } from "react";

import type { EffectCallback } from "react";

/**
 * Use internal effect
 * (Skip first render)
 *
 * @param effect
 * @param deps
 */
export const useInternalEffect = (effect: EffectCallback, deps: any[] = []) => {
    const [isFirstRender, setIsFirstRender] = useState(true);
    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }

        return effect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFirstRender, ...deps]);
};

/**
 * Hook to run a callback on mount
 *
 * @param effect
 */
export const useOnMount = (effect: EffectCallback) => {
    useInternalEffect(effect, []);
};

/**
 * Queue up a list of callbacks to run in order
 * (useful for when you need to wait for a component to mount before running a callback)
 *
 * @returns
 */
export const useQueue = () => {
    const [queues, setQueue] = useState<any[]>([]);

    const addQueue = useCallback(
        (handler: any) => {
            setQueue((queues) => [...queues, handler]);
        },
        [setQueue]
    );

    useEffect(() => {
        if (queues.length === 0) {
            return;
        }

        const handler = queues[0];
        handler();

        setQueue((queues) => queues.slice(1));
    }, [queues]);

    return {
        queues,
        addQueue,
    };
};

export const useIsMobile = () => {
    const [widthSize, setWidthSize] = useState(0);
    useOnMount(() => {
        setWidthSize(window.innerWidth)
    })

    return widthSize <= 768
}
