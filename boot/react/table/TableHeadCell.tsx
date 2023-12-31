import {BootstrapUIState, SortDirection, TableHeadCellProps, TableHeadCellSpec} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";


interface Props extends TableHeadCellProps {

}

class State implements BootstrapUIState {
    sortDirection?: SortDirection
}

export default class TableHeadCell extends TableHeadCellSpec<Props, State> {

    static defaultProps = {}

    state: State = new State();

    constructor(props: Props) {
        super(props);
        this.state.sortDirection = this.props.sortDirection
    }

    getSortingOrder() {
        const _this = this
        const {currentSortFieldName, fieldName} = _this.props
        let order = <i className="bi bi-arrow-down-up me-1"/>
        if (_this.props.isSortAble) {
            if (currentSortFieldName && fieldName && fieldName !== currentSortFieldName) {
                return order
            }
            switch (_this.state.sortDirection) {
                case "asc":
                    _this.state.sortDirection = "asc"
                    return (<i className="bi bi-arrow-down me-1"/>)
                case "desc":
                    _this.state.sortDirection = "desc"
                    return (<i className="bi bi-arrow-up me-1"/>)
                default:
                    return order
            }
        }
        return ""
    }

    handleOnClickSort(event: any) {
        let direction: any = this.state.sortDirection
        if (direction === "asc") {
            direction = "desc"
        } else {
            direction = "asc"
        }
        this.setState({sortDirection: direction})
        if (this.props.onClickSort) {
            this.props.onClickSort(event, direction, this.props.fieldName)
        }
    }

    getTHAttributes() {
        let attributes: any = {}
        if (this.props.isSortAble) {
            attributes.style = {cursor: "pointer"}
            attributes.onClick = (event: any) => {
                this.handleOnClickSort(event)
            }
        }
        if (this.props.style) {
            attributes.style = {...attributes.style, ...this.props.style}
        }
        return attributes
    }

    render() {
        const _props = this.props;
        return (
            <th {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "")} {...this.getTHAttributes()}>
                {this.getSortingOrder()} {_props.children}
            </th>
        );
    }

}