import { act, waitFor } from "@testing-library/react";
import { searchInputResult } from "@react-components/search-input";
import userEvent from "@utils/user-event";

export const RESULT_ID = "search-input-result";
export const CLEAR_BUTTON_ID = "search-input-clear-button";

export const GEORGE_VALUE = "George";
export const LAURIE_VALUE = "Laurie";
export const CLARA_VALUE = "Clara";
export const FELIX_VALUE = "Felix";
export const AUDREY_VALUE = "Audrey";
export const ALEXANDRE_VALUE = "Alexandre";
export const ALYSON_VALUE = "Alyson";

export const ALEXANDRE_RESULT = searchInputResult("6", ALEXANDRE_VALUE);

export const DEFAULT_RESULTS = [
    searchInputResult("1", GEORGE_VALUE),
    searchInputResult("2", LAURIE_VALUE),
    searchInputResult("3", CLARA_VALUE),
    searchInputResult("4", FELIX_VALUE),
    searchInputResult("5", AUDREY_VALUE),
    ALEXANDRE_RESULT,
    searchInputResult("7", ALYSON_VALUE)
];

export const NUMBER_OF_RESULTS_BEGINNING_WITH_A = 3;

export function getInput(getByTestId) {
    return getByTestId("search-input-textbox");
}

export function getResultsMenu(container) {
    return container.querySelector("div.results.visible");
}

export function getNoResults(container) {
    return container.querySelector("div.message.empty");
}

export async function search(text, { getByTestId, getAllByTestId, queryAllByTestId, container }) {
    const inputNode = getInput(getByTestId);

    act(() => {
        userEvent.type(inputNode, text);
    });

    await waitFor(() => getResultsMenu(container));

    return {
        inputNode,
        queries: {
            getResultsMenu: () => {
                return getResultsMenu(container);
            },
            getNoResults: () => {
                return getNoResults(container);
            },
            getResults: () => {
                return getAllByTestId(RESULT_ID);
            },
            queryResults: () => {
                return queryAllByTestId(RESULT_ID);
            }
        }
    };
}
