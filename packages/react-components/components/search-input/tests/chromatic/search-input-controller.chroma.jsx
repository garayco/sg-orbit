import { DEFAULT_RESULTS, LAURIE_VALUE } from "@react-components/search-input/stories/data";
import { SearchInputController } from "@orbit-ui/react-search-input/src";
import { createChromaticSection, paramsBuilder, storiesOfBuilder } from "@utils";
import { noop } from "lodash";

function stories(segment) {
    return storiesOfBuilder(module, createChromaticSection("Search Input/controller"))
        .segment(segment)
        .parameters(paramsBuilder()
            .canvasLayout({ width: "80%" })
            .chromaticDelay(100)
            .build())
        .build();
}

function createSearchInputController({ results = DEFAULT_RESULTS, ...otherProps } = {}) {
    return <SearchInputController
        results={results}
        onValueChange={noop}
        onSearch={noop}
        {...otherProps}
    />;
}

stories()
    .add("closed",
         () =>
             createSearchInputController()
    )
    .add("opened",
         () =>
             createSearchInputController({
                 open: true
             })
    )
    .add("autofocus",
         () =>
             createSearchInputController({
                 autofocus: true
             })
    )
    .add("fluid",
         () =>
             createSearchInputController({
                 fluid: true
             })
    )
    .add("size",
         () =>
             <div className="flex flex-column">
                 <div className="flex" style={{ marginBottom: "150px" }}>
                     { createSearchInputController({
                         size: "small",
                         results: DEFAULT_RESULTS.slice(0, 2),
                         className: "mr5"
                     })}
                     { createSearchInputController({
                         size: "small",
                         defaultValue: LAURIE_VALUE,
                         results: DEFAULT_RESULTS.slice(0, 2),
                         className: "mr5"
                     })}
                     { createSearchInputController({
                         size: "small",
                         results: DEFAULT_RESULTS.slice(0, 2),
                         open: true
                     })}
                 </div>
                 <div className="flex" style={{ marginBottom: "150px" }}>
                     { createSearchInputController({
                         results: DEFAULT_RESULTS.slice(0, 2),
                         className: "mr5"
                     })}
                     { createSearchInputController({
                         results: DEFAULT_RESULTS.slice(0, 2),
                         defaultValue: LAURIE_VALUE,
                         className: "mr5"
                     })}
                     { createSearchInputController({
                         results: DEFAULT_RESULTS.slice(0, 2),
                         open: true
                     })}
                 </div>
                 <div className="flex">
                     { createSearchInputController({
                         size: "large",
                         defaultValue: LAURIE_VALUE,
                         results: DEFAULT_RESULTS.slice(0, 2),
                         className: "mr5"
                     })}
                     { createSearchInputController({
                         results: DEFAULT_RESULTS.slice(0, 2),
                         size: "large",
                         className: "mr5"
                     })}
                     { createSearchInputController({
                         results: DEFAULT_RESULTS.slice(0, 2),
                         size: "large",
                         open: true
                     })}
                 </div>
             </div>
    );

stories("/loading/closed")
    .add("value selected",
         () =>
             createSearchInputController({
                 value: LAURIE_VALUE,
                 loading: true
             })
    )
    .add("no selection",
         () =>
             createSearchInputController({
                 loading: true
             })
    );

stories("/loading/opened")
    .add("value selected",
         () =>
             createSearchInputController({
                 open: true,
                 value: LAURIE_VALUE,
                 loading: true
             })
    )
    .add("no selection",
         () =>
             createSearchInputController({
                 open: true,
                 loading: true
             })
    );

stories("/disabled")
    .add("value selected",
         () =>
             createSearchInputController({
                 value: LAURIE_VALUE,
                 disabled: true
             })
    )
    .add("no selection",
         () =>
             createSearchInputController({
                 disabled: true
             })
    )
    .add("cannot be opened",
         () =>
             createSearchInputController({
                 open: true,
                 disabled: true
             })
    )
    .add("cannot show loading spinner",
         () =>
             createSearchInputController({
                 loading: true,
                 disabled: true
             })
    );

stories("/results")
    .add("with results",
         () =>
             createSearchInputController({
                 open: true
             })
    )
    .add("no results",
         () =>
             createSearchInputController({
                 open: true,
                 results: []
             })
    );

stories("/selected value/closed")
    .add("no selection",
         () =>
             createSearchInputController()
    )
    .add("value selected",
         () =>
             createSearchInputController({
                 value: LAURIE_VALUE
             })
    );

stories("/selected value/closed/clear button")
    .add("cannot clear when no selection",
         () =>
             createSearchInputController()
    )
    .add("can clear when value selected",
         () =>
             createSearchInputController({
                 value: LAURIE_VALUE
             })
    );

stories("/selected value/opened")
    .add("no selection",
         () =>
             createSearchInputController({
                 open: true
             })
    )
    .add("value selected",
         () =>
             createSearchInputController({
                 open: true,
                 value: LAURIE_VALUE
             })
    );

stories("/selected value/opened/clear button")
    .add("cannot clear when no selection",
         () =>
             createSearchInputController({
                 open: true
             })
    )
    .add("can clear when value selected",
         () =>
             createSearchInputController({
                 open: true,
                 value: LAURIE_VALUE
             })
    );

stories("/default value/closed")
    .add("value selected",
         () =>
             createSearchInputController({
                 defaultValue: LAURIE_VALUE
             })
    );

stories("/default value/opened")
    .add("value selected",
         () =>
             createSearchInputController({
                 open: true,
                 defaultValue: LAURIE_VALUE
             })
    );

stories("/customization")
    .add("no results message",
         () =>
             createSearchInputController({
                 open: true,
                 results: [],
                 noResultsMessage: "Custom no results message"
             })
    )
    .add("placeholder",
         () =>
             createSearchInputController({
                 results: [],
                 placeholder: "Custom placeholder"
             })
    )
    .add("result renderer",
         () =>
             createSearchInputController({
                 open: true,
                 resultRenderer: ({ text }) => {
                     return <div className="bg-red">{text}</div>;
                 }
             })
    )
    .add("styling", () =>
        <div className="flex">
            {createSearchInputController({
                className: "border-red mr5"
            })}
            {createSearchInputController({
                style: { border: "1px solid red" }
            })}
        </div>
    );

