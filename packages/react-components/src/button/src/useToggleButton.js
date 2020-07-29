import { isNil } from "lodash";
import { useChainedEventCallback, useControllableState } from "../../shared";

export function useToggleButton({
    checked,
    defaultChecked,
    value,
    onChange,
    onClick,
    onCheck,
    active,
    forwardedRef,
    ...rest
}) {
    const [isChecked, setIsChecked] = useControllableState(checked, defaultChecked, false);

    const handleClick = useChainedEventCallback(onClick, event => {
        setIsChecked(!isChecked);

        if (!isNil(onCheck)) {
            onCheck(event, value);
        }

        if (!isNil(onChange)) {
            onChange(event, !isChecked);
        }
    });

    return {
        isChecked,
        buttonProps: {
            ...rest,
            onClick: handleClick,
            value,
            active: active || isChecked,
            "aria-checked": isChecked,
            ref: forwardedRef
        }
    };
}
