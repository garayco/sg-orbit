import { Button, ButtonGroup } from "@react-components/button";
import { Checkbox } from "@react-components/checkbox";
import { ErrorMessage, Field, GroupField, HelpMessage, Label } from "@react-components/field";
import { Form, Row } from "@react-components/form";
import { Inline } from "@react-components/layout";
import { Radio, RadioGroup } from "@react-components/radio";
import { TextArea, TextInput } from "@react-components/input";
import { TextLink } from "@react-components/link";
import { createChromaticSection, paramsBuilder, storiesOfBuilder } from "@utils";

function stories(segment) {
    return storiesOfBuilder(module, createChromaticSection("Form"))
        .segment(segment)
        .parameters(paramsBuilder()
            .canvasLayout({ width: "80%" })
            .build())
        .build();
}

stories()
    .add("default", () =>
        <Inline verticalAlign="end" gap={13}>
            <Form>
                <Field>
                    <Label>FullName</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Where to?</Label>
                    <TextArea />
                    <HelpMessage>Trips to Andromeda galaxy are available every 2 months.</HelpMessage>
                </Field>
                <Button>Submit</Button>
            </Form>
            <Form>
                <Field>
                    <Label>FullName</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Where to?</Label>
                    <TextArea />
                    <HelpMessage>Trips to Andromeda galaxy are available every 2 months.</HelpMessage>
                </Field>
                <TextLink as="button">Submit</TextLink>
            </Form>
        </Inline>
    )
    .add("fluid", () =>
        <Inline gap={13}>
            <Form fluid>
                <Field>
                    <Label>FullName</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Where to?</Label>
                    <TextArea />
                    <HelpMessage>Trips to Andromeda galaxy are available every 2 months.</HelpMessage>
                </Field>
                <Button>Submit</Button>
            </Form>
            <Form fluid>
                <Field>
                    <Label>FullName</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Where to?</Label>
                    <TextArea />
                    <HelpMessage>Trips to Andromeda galaxy are available every 2 months.</HelpMessage>
                </Field>
                <TextLink as="button">Submit</TextLink>
            </Form>
        </Inline>
    )
    .add("disabled", () =>
        <Inline gap={13}>
            <Form disabled>
                <Field>
                    <Label>FullName</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Where to?</Label>
                    <TextArea />
                    <HelpMessage>Trips to Andromeda galaxy are available every 2 months.</HelpMessage>
                </Field>
                <Button>Submit</Button>
            </Form>
            <Form disabled>
                <Field>
                    <Label>FullName</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Where to?</Label>
                    <TextArea />
                    <HelpMessage>Trips to Andromeda galaxy are available every 2 months.</HelpMessage>
                </Field>
                <TextLink as="button">Submit</TextLink>
            </Form>
        </Inline>
    )
    .add("with fieldset", () =>
        <Form>
            <Field>
                <Label>FullName</Label>
                <TextInput />
            </Field>
            <fieldset>
                <legend>Trip</legend>
                <Field>
                    <Label>Departure date</Label>
                    <TextInput placeholder="AAAA/MM/DD" />
                </Field>
                <Field>
                    <Label>Where to?</Label>
                    <TextArea />
                    <HelpMessage>Trips to Andromeda galaxy are available every 2 months.</HelpMessage>
                </Field>
            </fieldset>
            <Button>Submit</Button>
        </Form>
    )
    .add("with nested div", () =>
        <Form>
            <Field>
                <Label>FullName</Label>
                <TextInput />
            </Field>
            <div>
                <Field>
                    <Label>Departure date</Label>
                    <TextInput placeholder="AAAA/MM/DD" />
                </Field>
                <div>
                    <Field>
                        <Label>Where to?</Label>
                        <TextArea />
                        <HelpMessage>Trips to Andromeda galaxy are available every 2 months.</HelpMessage>
                    </Field>
                </div>
            </div>
            <Button>Submit</Button>
        </Form>
    )
    .add("with group field", () =>
        <Form>
            <Field>
                <Label>FullName</Label>
                <TextInput />
            </Field>
            <GroupField>
                <Label>Where to?</Label>
                <RadioGroup>
                    <Radio value="mars">Mars</Radio>
                    <Radio value="jupiter">Jupiter</Radio>
                    <Radio value="pluto">Pluto</Radio>
                </RadioGroup>
                <HelpMessage>Trips to Andromeda galaxy are available every 2 months.</HelpMessage>
            </GroupField>
            <GroupField>
                <Label>Which package?</Label>
                <RadioGroup orientation="horizontal">
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">3</Radio>
                </RadioGroup>
            </GroupField>
            <Button>Submit</Button>
        </Form>
    )
    .add("button alignment", () =>
        <Inline>
            <Form>
                <Field>
                    <Label>FullName</Label>
                    <TextInput />
                </Field>
                <ButtonGroup align="start">
                    <Button variant="ghost">Reset</Button>
                    <Button>Submit</Button>
                </ButtonGroup>
            </Form>
            <Form>
                <Field>
                    <Label>FullName</Label>
                    <TextInput />
                </Field>
                <ButtonGroup align="center">
                    <Button variant="ghost">Reset</Button>
                    <Button>Submit</Button>
                </ButtonGroup>
            </Form>
            <Form>
                <Field>
                    <Label>FullName</Label>
                    <TextInput />
                </Field>
                <ButtonGroup align="end">
                    <Button variant="ghost">Reset</Button>
                    <Button>Submit</Button>
                </ButtonGroup>
            </Form>
        </Inline>
    )
    .add("styling", () =>
        <Inline>
            <Form className="border-red">
                <Field>
                    <TextInput />
                </Field>
            </Form>
            <Form style={{ border: "1px solid red" }}>
                <Field>
                    <TextInput />
                </Field>
            </Form>
        </Inline>
    );

stories("/inline")
    .add("default", () =>
        <Form>
            <Row>
                <Field>
                    <Label>First name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Last name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Username</Label>
                    <TextInput />
                </Field>
            </Row>
            <Row>
                <Field>
                    <Label>City</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>State</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Zip</Label>
                    <TextInput />
                </Field>
            </Row>
            <Field>
                <Checkbox>Agree to terms and conditions</Checkbox>
            </Field>
            <ButtonGroup>
                <TextLink as="button" type="reset">Reset</TextLink>
                <Button type="submit">Submit</Button>
            </ButtonGroup>
        </Form>
    )
    .add("fluid", () =>
        <Form fluid>
            <Row>
                <Field>
                    <Label>First name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Last name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Username</Label>
                    <TextInput />
                </Field>
            </Row>
            <Row>
                <Field className="w-50">
                    <Label>City</Label>
                    <TextInput />
                </Field>
                <Field className="w-25">
                    <Label>State</Label>
                    <TextInput />
                </Field>
                <Field className="w-25">
                    <Label>Zip</Label>
                    <TextInput />
                </Field>
            </Row>
            <Field>
                <Checkbox>Agree to terms and conditions</Checkbox>
            </Field>
            <ButtonGroup>
                <TextLink as="button" type="reset">Reset</TextLink>
                <Button type="submit">Submit</Button>
            </ButtonGroup>
        </Form>
    )
    .add("fluid with fix width container", () =>
        <div style={{ width: "700px" }}>
            <Form fluid>
                <Row>
                    <Field>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Username</Label>
                        <TextInput />
                    </Field>
                </Row>
                <Row>
                    <Field className="w-50">
                        <Label>City</Label>
                        <TextInput />
                    </Field>
                    <Field className="w-25">
                        <Label>State</Label>
                        <TextInput />
                    </Field>
                    <Field className="w-25">
                        <Label>Zip</Label>
                        <TextInput />
                    </Field>
                </Row>
                <Field>
                    <Checkbox>Agree to terms and conditions</Checkbox>
                </Field>
                <ButtonGroup>
                    <TextLink as="button" type="reset">Reset</TextLink>
                    <Button type="submit">Submit</Button>
                </ButtonGroup>
            </Form>
        </div>
    )
    .add("messages", () =>
        <Form>
            <Row>
                <Field>
                    <Label>First name</Label>
                    <TextInput />
                    <HelpMessage>Non helpfull message!</HelpMessage>
                </Field>
                <Field>
                    <Label>Last name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Username</Label>
                    <TextInput />
                </Field>
            </Row>
            <Row>
                <Field>
                    <Label>City</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>State</Label>
                    <TextInput />
                </Field>
                <Field validationState="invalid">
                    <Label>Zip</Label>
                    <TextInput />
                    <ErrorMessage>Invalid Zip code!</ErrorMessage>
                </Field>
            </Row>
            <Field>
                <Checkbox>Agree to terms and conditions</Checkbox>
            </Field>
            <ButtonGroup>
                <TextLink as="button" type="reset">Reset</TextLink>
                <Button type="submit">Submit</Button>
            </ButtonGroup>
        </Form>
    );
