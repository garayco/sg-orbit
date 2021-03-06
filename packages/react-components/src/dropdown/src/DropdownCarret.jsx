import { ChevronIcon, EmbeddedIcon } from "../../icons";
import { DropdownContext } from "./DropdownContext";
import { elementType } from "prop-types";
import { forwardRef, useContext } from "react";
import { mergeClasses } from "../../shared";

const propTypes = {
    iconType: elementType
};

const defaultProps = {
    iconType: ChevronIcon
};

export function InnerDropdownCarret({ iconType: IconType, forwardedRef, ...rest }) {
    const { size, upward } = useContext(DropdownContext);

    return (
        <EmbeddedIcon
            {...rest}
            size={size}
            ref={forwardedRef}
        >
            <IconType
                className={mergeClasses(
                    "carret",
                    upward && "upward"
                )}
            />
        </EmbeddedIcon>
    );
}

InnerDropdownCarret.propTypes = propTypes;
InnerDropdownCarret.defaultProps = defaultProps;

export const DropdownCarret = forwardRef((props, ref) => (
    <InnerDropdownCarret {...props} forwardedRef={ref} />
));


