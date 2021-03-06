import { Box } from "../../box";
import { Button } from "./Button";
import { any, bool, elementType, func, number, oneOf, oneOfType, string } from "prop-types";
import { forwardRef } from "react";
import { mergeProps, resolveChildren, slot, useCheckableProps } from "../../shared";
import { useToggleButton } from "./useToggleButton";

const propTypes = {
    /**
     * A controlled checked value.
     */
    checked: bool,
    /**
     * The initial value of `checked` when uncontrolled.
     */
    defaultChecked: bool,
    /**
     * 	The value to associate with when in a group.
     */
    value: oneOfType([string, number]),
    /**
     * Called when the button checked state change.
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {bool} isChecked - Whether the button is checked.
     * @returns {void}
     */
    onChange: func,
    /**
     * The style to use.
     */
    variant: oneOf(["solid", "outline", "ghost"]),
    /**
     * The color accent.
     */
    color: oneOf(["primary", "secondary"]),
    /**
     * The button shape.
     */
    shape: oneOf(["pill", "rounded", "circular"]),
    /**
     * Whether the button should autoFocus on render.
     */
    autoFocus: bool,
    /**
     * The delay before trying to autofocus.
     */
    autoFocusDelay: number,
    /**
     * A button can vary in size.
     */
    size: oneOf(["sm", "md"]),
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * Component children.
     */
    children: oneOfType([any, func]).isRequired
};

export function InnerToggleButton(props) {
    const [checkableProps] = useCheckableProps(props);

    const {
        variant = "solid",
        shape = "pill",
        checked,
        defaultChecked,
        value,
        onChange,
        onClick,
        onCheck,
        active,
        as = Button,
        children,
        forwardedRef,
        ...rest
    } = mergeProps(
        props,
        checkableProps
    );

    const { isChecked, buttonProps } = useToggleButton({
        variant,
        shape,
        checked,
        defaultChecked,
        value,
        onChange,
        onClick,
        onCheck,
        active,
        forwardedRef
    });

    const content = resolveChildren(children, { isChecked });

    return (
        <Box
            {...rest}
            {...buttonProps}
            as={as}
        >
            {content}
        </Box>
    );
}

InnerToggleButton.propTypes = propTypes;

export const ToggleButton = slot("button", forwardRef((props, ref) => (
    <InnerToggleButton {...props} forwardedRef={ref} />
)));


