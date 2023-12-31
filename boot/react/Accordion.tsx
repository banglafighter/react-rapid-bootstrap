import {AccordionProps, AccordionSpec, BootstrapUIState} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";


interface Props extends AccordionProps {

}

class State implements BootstrapUIState {
}

export default class Accordion extends AccordionSpec<Props, State> {

    static defaultProps = {
        isSingleExpand: true,
        isFlush: false,
    }


    render() {
        const _props = this.props;
        let randomId = "-" + Date.now()
        let defaultClass: any = "accordion"
        if (_props.isFlush) {
            defaultClass += " accordion-flush"
        }
        let singleExpandId = ""
        let bodyAttr = {}
        if (_props.isSingleExpand) {
            singleExpandId = "top" + randomId
            bodyAttr = {"data-bs-parent": "#" + singleExpandId}
        }
        return (
            <div key={"key" + randomId}
                {...CommonUtil.addId(_props, singleExpandId)}
                 className={CommonUtil.addClassName(_props, defaultClass)}>
                {_props.items.map((accordion: any, index: any) => (
                    <div key={index} className="accordion-item">
                        <div className="accordion-header cursor-pointer">
                            <div
                                {...CommonUtil.addId(accordion.header)}
                                className={CommonUtil.addClassName(accordion.header, "accordion-button" + (accordion.isOpen ? "" : " collapsed"))}
                                data-bs-toggle="collapse" data-bs-target={"#toggle" + index + randomId}
                            >
                                {accordion.header.content}
                            </div>
                        </div>
                        <div
                            className={CommonUtil.addClassName(accordion.body, "accordion-collapse collapse" + (accordion.isOpen ? " show" : "") )}
                            {...CommonUtil.addId(accordion.body, "toggle" + index + randomId)}
                            {...bodyAttr}
                        >
                            <div className="accordion-body">
                                {accordion.body.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

}