import { Button } from "@orbit-ui/react-button/src";
import { CalendarIcon, CalendarIcon24, SignoutIcon24 } from "@orbit-ui/icons";
import { Label } from "@orbit-ui/react-label/src";

export const Buttons = props => {
    return (
        <div className="flex flex-row items-start">
            <div className="flex flex-column items-start">
                <Button {...props}>Button</Button>
                <Button active {...props}>Button</Button>
                <Button disabled {...props}>Button</Button>
                <Button {...props} ghost>Button</Button>
                <Button active ghost {...props}>Button</Button>
                <Button disabled ghost {...props}>Button</Button>
                <Button {...props} basic>Button</Button>
                <Button {...props} active basic>Button</Button>
                <Button {...props} disabled basic>Button</Button>
            </div>
            {/* Layout */}
            <div className="flex flex-column items-start">
                <Button compact {...props}>Button</Button>
                <Button circular {...props}>Aa</Button>
                <Button size="tiny" {...props}>Button</Button>
                <Button size="tiny" compact {...props}>Button</Button>
                <Button size="tiny" circular {...props}>Aa</Button>
                <Button size="small" {...props}>Button</Button>
                <Button size="small" compact {...props}>Button</Button>
                <Button size="small" circular {...props}>Aa</Button>
                <Button size="large" {...props}>Button</Button>
                <Button size="large" compact {...props}>Button</Button>
                <Button size="large" circular {...props}>Aa</Button>
            </div>
            {/* skin should affect content here (icon colour) */}
            <div className="flex flex-column items-start">
                <Button icon {...props}><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon active {...props}><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon disabled {...props}><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon {...props} ghost><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon active ghost {...props}><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon disabled ghost {...props}><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon {...props} basic><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon {...props} active basic><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon {...props} disabled basic><SignoutIcon24 className="mr1" />Button</Button>
            </div>
            {/* icon + text */}
            <div className="flex flex-column items-start">
                <Button icon compact {...props}><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon circular {...props}><SignoutIcon24 className="icon" /></Button>
                <Button icon size="tiny" {...props}><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon size="tiny" compact {...props}><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon size="tiny" circular {...props}><SignoutIcon24 className="icon" /></Button>
                <Button icon size="small" {...props}><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon size="small" compact {...props}><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon size="small" circular {...props}><SignoutIcon24 className="icon" /></Button>
                <Button icon size="large" {...props}><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon size="large" compact {...props}><SignoutIcon24 className="mr1" />Button</Button>
                <Button icon size="large" circular {...props}><SignoutIcon24 className="icon" /></Button>
            </div>
            {/* icon */}
            <div className="flex flex-column items-start">
                <Button {...props}><CalendarIcon /></Button>
                <Button active {...props}><CalendarIcon /></Button>
                <Button disabled {...props}><CalendarIcon /></Button>
                <Button {...props} ghost><CalendarIcon /></Button>
                <Button active ghost {...props}><CalendarIcon /></Button>
                <Button disabled ghost {...props}><CalendarIcon /></Button>
                <Button {...props} basic><CalendarIcon /></Button>
                <Button {...props} active basic><CalendarIcon /></Button>
                <Button {...props} disabled basic><CalendarIcon /></Button>
            </div>
            {/* icon / layout */}
            <div className="flex flex-column items-start">
                <Button compact {...props}><CalendarIcon /></Button>
                <Button size="tiny" {...props}><CalendarIcon24 /></Button>
                <Button size="tiny" compact {...props}><CalendarIcon24 /></Button>
                <Button size="small" {...props}><CalendarIcon24 /></Button>
                <Button size="small" compact {...props}><CalendarIcon24 /></Button>
                <Button size="large" {...props}><CalendarIcon /></Button>
                <Button size="large" compact {...props}><CalendarIcon /></Button>
            </div>
            {/* tag + text / tag + text + icon */}
            <div className="flex flex-column items-start">
                <Button tag {...props}><Label tag circular size="mini" empty color="red" />One</Button>
                <Button tag compact {...props}><Label tag circular size="mini" empty color="red" />One</Button>
                <Button label {...props}>One<Label circular size="mini" empty color="red" /></Button>
                <Button label compact {...props}>One<Label circular size="mini" empty color="red" /></Button>
            </div>
            {/* text / loading */}
            <div className="flex flex-column items-start">
                <Button loading {...props} className="paused">Button</Button>
                <Button loading active {...props} className="paused">Button</Button>
                <Button loading disabled {...props} className="paused">Button</Button>
                <Button loading {...props} className="paused" ghost>Button</Button>
                <Button loading active ghost {...props} className="paused">Button</Button>
                <Button loading disabled ghost {...props} className="paused">Button</Button>
                <Button loading {...props} className="paused" basic>Button</Button>
                <Button loading {...props} className="paused" active basic>Button</Button>
                <Button loading {...props} className="paused" disabled basic>Button</Button>
            </div>
            {/* loading / Layout */}
            <div className="flex flex-column items-start">
                <Button loading className="paused" compact {...props}>Button</Button>
                <Button loading className="paused" circular {...props}>Aa</Button>
                <Button loading className="paused" size="tiny" {...props}>Button</Button>
                <Button loading className="paused" size="tiny" compact {...props}>Button</Button>
                <Button loading className="paused" size="tiny" circular {...props}>Aa</Button>
                <Button loading className="paused" size="small" {...props}>Button</Button>
                <Button loading className="paused" size="small" compact {...props}>Button</Button>
                <Button loading className="paused" size="small" circular {...props}>Aa</Button>
                <Button loading className="paused" size="large" {...props}>Button</Button>
                <Button loading className="paused" size="large" compact {...props}>Button</Button>
                <Button loading className="paused" size="large" circular {...props}>Aa</Button>
            </div>
            {/* icon / loading */}
            <div className="flex flex-column items-start">
                <Button loading className="paused" {...props}><CalendarIcon /></Button>
                <Button loading className="paused" active {...props}><CalendarIcon /></Button>
                <Button loading className="paused" disabled {...props}><CalendarIcon /></Button>
                <Button loading className="paused" {...props} ghost><CalendarIcon /></Button>
                <Button loading className="paused" active ghost {...props}><CalendarIcon /></Button>
                <Button loading className="paused" disabled ghost {...props}><CalendarIcon /></Button>
                <Button loading className="paused" {...props} basic><CalendarIcon /></Button>
                <Button loading className="paused" {...props} active basic><CalendarIcon /></Button>
                <Button loading className="paused" {...props} disabled basic><CalendarIcon /></Button>
            </div>
            {/* loading / layout */}
            <div className="flex flex-column items-start">
                <Button loading className="paused" compact {...props}><CalendarIcon /></Button>
                <Button loading className="paused" size="tiny" {...props}><CalendarIcon24 /></Button>
                <Button loading className="paused" size="tiny" compact {...props}><CalendarIcon24 /></Button>
                <Button loading className="paused" size="small" {...props}><CalendarIcon24 /></Button>
                <Button loading className="paused" size="small" compact {...props}><CalendarIcon24 /></Button>
                <Button loading className="paused" size="large" {...props}><CalendarIcon /></Button>
                <Button loading className="paused" size="large" compact {...props}><CalendarIcon /></Button>
            </div>
        </div>
    );
};