// import { Tooltip } from "@orbit-ui/react-popup/src";
// import { createRef } from "react";
// import { render, wait } from "@testing-library/react";

// function createTooltip(props = {}) {
//     return <Tooltip
//         content="Adds users to your feed"
//         open
//         {...props}
//     />;
// }

// // ***** Refs *****

// test("ref is a DOM element", async () => {
//     const ref = createRef();

//     render(
//         createTooltip({
//             ref
//         })
//     );

//     await wait();

//     expect(ref.current).not.toBeNull();
//     expect(ref.current instanceof HTMLElement).toBeTruthy();
//     expect(ref.current.tagName).toBe("DIV");
// });

// test("when using a callback ref, ref is a DOM element", async () => {
//     let refNode = null;

//     render(
//         createTooltip({
//             ref: node => {
//                 // console.log(node);
//                 refNode = node;
//             }
//         })
//     );

//     await wait();

//     expect(refNode).not.toBeNull();
//     expect(refNode instanceof HTMLElement).toBeTruthy();
//     expect(refNode.tagName).toBe("DIV");
// });
