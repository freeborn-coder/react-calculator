import { OperandButton, OperatorButton } from "./Buttons";

function ButtonsContainer(props){

    const nums = [7,8,9,4,5,6,1,2,3];

    return (
        <div className="h-3/5 bg-[#FBFBFB] rounded-2xl p-4 text-center">
                <div className="grid grid-cols-4 grid-rows-5 gap-5 font-bold">
                    <OperatorButton onClick={props.actions.clearInput} value="c"/>
                    <OperatorButton value="%"/>
                    <OperatorButton value="&#8592;"/>
                    <OperatorButton value="&#xf7;"/>
                    <div className="col-span-3 row-span-3">
                        <div className="grid grid-cols-3">
                            {nums.map(num => <OperandButton onClick={props.actions.setInput} value={num} key={num} />)}
                            <OperatorButton value="+/-"/>
                            <OperandButton onClick={props.actions.setInput} value={0} />
                            <OperandButton value='.' onClick={props.actions.setInput} />
                        </div>
                    </div>
                    <button className="operator-btn" onClick={props.actions.setInput}>x</button>
                    <button className="operator-btn" onClick={props.actions.setInput}>-</button>
                    <button className="operator-btn" onClick={props.actions.setInput}>+</button>
                    <button className="col-span-4 bg-[#5A7BFF] text-white rounded-xl font-bold text-xl" onClick={props.actions.setInput}>=</button>
                </div>
            </div>
    );
}

export default ButtonsContainer;