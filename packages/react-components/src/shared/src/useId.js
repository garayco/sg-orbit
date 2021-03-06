import { useId as useAutoId } from "@reach/auto-id";

/*
This utility will initially trigger a re-render.
*/
export function useId(userId, prefix) {
    const uuid = useAutoId(userId);

    return prefix ? `${prefix}-${uuid}` : uuid;
}
