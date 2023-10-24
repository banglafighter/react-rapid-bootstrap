import CommonTask from "./common/common-task";
import InputSpec, {InputProps} from "@pfo/pf-boot-spec/boot/spec/InputSpec";
import {BootstrapUIState} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";


interface Props extends InputProps {}

class State implements BootstrapUIState {}

export default class Input extends InputSpec<Props, State> {

    static defaultProps = {
        type: "text",
    }

    private getMainClass() {
        let klass = "form-control"
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
            case "switch":
                klass = "form-check-input"
                break
        }
        return klass
    }

    render() {
        let TagName = "input";
        const _props = this.props;
        let type = this.props.type
        if (type === "switch") {
            type = "checkbox"
        } else if (type === "textarea") {
            TagName = "textarea"
        }
        let klasses = (this.getMainClass() + CommonTask.getSizeClass(_props.viewSize, " form-control-") + (_props.className ? " " + _props.className : "")).trim();
        return (<TagName
            {...CommonUtil.removePropsItem(_props, ['viewSize'])}
            className={klasses}
            type={type}
        />);
    }

}