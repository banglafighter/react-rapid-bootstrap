import {BootstrapUIState, LabelProps, LabelSpec} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";


export type LabelType =
    'text'
    | 'checkbox'
    | 'radio'
    | 'switch'

interface Props extends LabelProps {
    type?: LabelType
    labelClass?: string
}

class State implements BootstrapUIState {
}

export default class Label extends LabelSpec<Props, State> {

    static defaultProps = {
        type: "text"
    }

    private getMainClass() {
        let klass = "form-label"
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
            case "switch":
                klass = "form-check-label"
                break
        }
        if (this.props.labelClass) {
            klass += " " + this.props.labelClass
        }
        return klass
    }

    render() {
        const _props = this.props;
        let klasses = (this.getMainClass() + (_props.className ? " " + _props.className : "")).trim();
        return (<label
            {...CommonUtil.removePropsItem(_props, ['type', 'labelClass'])}
            className={klasses}
        >{_props.children}</label>);
    }

}