import React, { PureComponent } from "react";
import { FOO } from "@sharegate/react-components-shared";

export class DateRangePicker extends PureComponent {
    render() {
        return (
            <>
                <div className="calendar-test">
                    <style jsx>{`
                        .calendar-test {
                            color: pink;
                        }
                    `}</style>
                    Date Range Picker3 {FOO}
                </div>
            </>
        );

    }
}