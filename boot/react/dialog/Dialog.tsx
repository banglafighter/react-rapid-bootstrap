import {BootstrapUIState, DialogProps, DialogSpec} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";

const style = {
    displayBlock: {
        display: "block"
    },
    defaultTitle: {
        paddingTop: "5px",
        paddingLeft: "12px",
        paddingRight: "12px",
        paddingBottom: "5px",
        borderBottom: "none"
    }
}

interface Props extends DialogProps {

}

class State implements BootstrapUIState {
    isShowModal?: boolean = true
}

export default class Dialog extends DialogSpec<Props, State> {

    state: State = new State();

    static defaultProps = {}

    componentDidMount() {
        if (this.props.onLoad) {
            this.props.onLoad()
        }
    }

    private closeDialog() {
        this.setState({isShowModal: false})
        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    private getHeader(){
        const _this = this;
        if (!this.props.header){
            return (
                <div className={CommonUtil.concatAttr("modal-header", _this.props.headerClassName)} style={style.defaultTitle}>
                    <h5 className="modal-title" >{_this.props.title}</h5>
                    <button onClick={()=>{_this.closeDialog()}} type="button" className="btn-close"/>
                </div>
            )
        }
        return this.props.header
    }

    getDialogBoxSize() {
        let type = String(this.props.boxSize)
        switch (type) {
            case "Small":
                return "modal-sm"
            case "Large":
                return "modal-lg"
            case "ExtraLarge":
                return "modal-xl"
            case "Fullscreen":
                return "modal-fullscreen"
            default:
                return ""
        }
    }

    render() {
        const _props = this.props;
        const _this = this;
        let className = "modal-dialog modal-dialog-centered " + _this.getDialogBoxSize()
        return (
            (!_this.state.isShowModal ? "" :
                <div className={CommonUtil.concatAttr("modal fade show", _props.className)} style={style.displayBlock}>
                    <div className={className.trim()}>
                        <div className={CommonUtil.concatAttr("modal-content", _props.containerClassName)}>
                            {_this.getHeader()}
                            {_props.children}
                        </div>
                    </div>
                </div>
            )
        );
    }

}