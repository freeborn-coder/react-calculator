export function OperandButton(props){
    return (
        <button className="operand-btn" onClick={props.onClick}>{props.value}</button>
    );
}

export function OperatorButton(props){
    return (
        <button className="operator-btn" onClick={props.onClick}>{props.value}</button>
    );
}
