import CommonTask from "./common/common-task";
import {BootstrapUIState, ButtonProps, ButtonSpec} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";


interface Props extends ButtonProps {
    outline?: boolean
}

class State implements BootstrapUIState {}

export default class Button extends ButtonSpec<Props, State> {

    static defaultProps = {
        type: "button",
        variant: "primary",
        viewSize: "medium",
    }


    render() {
        const _props = this.props;
        let buttonClass = "btn-" + (_props.outline ? "outline-" : "") + _props.variant
        let klasses = ("btn " + buttonClass + " " + CommonTask.getSizeClass(_props.viewSize) + (_props.className ? " " + _props.className : "")).trim();
        return (<button
            {...CommonUtil.removePropsItem(_props, ['viewSize'])}
            className={klasses}
            type={_props.type}
        >{_props.children}</button>);
    }

}