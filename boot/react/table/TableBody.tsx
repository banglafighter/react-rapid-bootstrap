import {BootstrapUIState, TableBodyProps, TableBodySpec} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";


interface Props extends TableBodyProps {

}

class State implements BootstrapUIState {
}

export default class TableBody extends TableBodySpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<tbody {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "")}>{_props.children}</tbody>);
    }

}