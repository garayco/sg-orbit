import { AddIcon } from "@react-components/icons";
import { Link } from "@react-components/link";
import { createRef } from "react";
import { render, waitFor } from "@testing-library/react";

// ***** External *****

test("when external, add target=\"_blank\"", async () => {
    const { getByTestId } = render(
        <Link external href="#" aria-label="Add" data-testid="link">
            <AddIcon />
        </Link>
    );

    const link = await waitFor(() => getByTestId("link"));

    expect(link.getAttribute("target")).toBe("_blank");
});

test("when external, add rel=\"noopener noreferrer\"", async () => {
    const { getByTestId } = render(
        <Link external href="#" aria-label="Add" data-testid="link">
            <AddIcon />
        </Link>
    );

    const link = await waitFor(() => getByTestId("link"));

    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef();

    render(
        <Link ref={ref} href="#" aria-label="Add">
            <AddIcon />
        </Link>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("A");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode = null;

    render(
        <Link
            ref={node => {
                refNode = node;
            }}
            href="#"
            aria-label="Add"
        >
            <AddIcon />
        </Link>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("A");
});

test("set ref once", async () => {
    const handler = jest.fn();

    render(
        <Link ref={handler} href="#" aria-label="Add">
            <AddIcon />
        </Link>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
