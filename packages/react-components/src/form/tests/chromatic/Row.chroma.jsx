import { Field } from "@react-components/field";
import { Inline } from "@react-components/layout";
import { Row } from "@react-components/form";
import { TextInput } from "@react-components/input";
import { createChromaticSection, paramsBuilder, storiesOfBuilder } from "@utils";

function stories(segment) {
    return storiesOfBuilder(module, createChromaticSection("Row"))
        .segment(segment)
        .parameters(paramsBuilder()
            .canvasLayout({ width: "80%" })
            .build())
        .build();
}

stories()
    .add("default", () =>
        <Row>
            <Field>
                <TextInput />
            </Field>
            <Field>
                <TextInput />
            </Field>
            <Field>
                <TextInput />
            </Field>
        </Row>
    )
    .add("fluid", () =>
        <Row fluid>
            <Field>
                <TextInput />
            </Field>
            <Field>
                <TextInput />
            </Field>
            <Field>
                <TextInput />
            </Field>
        </Row>
    )
    .add("styling", () =>
        <Inline>
            <Row className="border-red">
                <Field>
                    <TextInput />
                </Field>
            </Row>
            <Row style={{ border: "1px solid red" }}>
                <Field>
                    <TextInput />
                </Field>
            </Row>
        </Inline>
    );
