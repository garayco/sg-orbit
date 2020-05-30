import { DropdownItem } from "./DropdownItem";
import { elementType, func, oneOfType, string } from "prop-types";
import { forwardRef } from "react";

const propTypes = {
    /**
     * Called when a click event happens.
     */
    onClick: func.isRequired,
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType])
};

export function InnerDropdownButtonItem({ as, forwardedRef, ...rest }) {
    return (
        <DropdownItem
            {...rest}
            as={as || "button"}
            ref={forwardedRef}
        />
    );
}

InnerDropdownButtonItem.propTypes = propTypes;

export const DropdownButtonItem = forwardRef((props, ref) => (
    <InnerDropdownButtonItem {...props} forwardedRef={ref} />
));

DropdownButtonItem.name = "DropdownItem";
