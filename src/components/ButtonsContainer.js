export function ButtonsContainer(props){

    const nums = [7,8,9,4,5,6,1,2,3];

    return (
        <div className="bg-[#FBFBFB] rounded-2xl p-6 text-center">
            <div className="grid grid-cols-4 grid-rows-5 gap-5 font-bold">
                <button className="operator-btn" onClick={props.actions.clearInput}>c</button>
                <button className="operator-btn" onClick={props.actions.setInput}>^</button>
                <button className="operator-btn" onClick={props.actions.backSpace}>&#8592;</button>
                <button className="operator-btn" onClick={props.actions.setInput}>/</button>
                
                <div className="col-span-3 row-span-3">
                    <div className="grid grid-cols-3">
                        {nums.map(num => <button className="operand-btn" 
                            onClick={props.actions.setInput} key={num}>{num}</button> )}
                        <button className="operator-btn">+/-</button>
                        <button className="operand-btn" onClick={props.actions.setInput}>0</button>
                        <button className="operator-btn" onClick={props.actions.setInput}>.</button>
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
