export function ButtonsContainer({actions,mode}){

    const nums = [7,8,9,4,5,6,1,2,3];
    let operandText, bg, operatorClass;

    if(mode === 'light'){
        bg = 'bg-lighter';
        operatorClass = 'bg-light text-darkest';
    }else{
        operandText = 'text-white';
        bg = 'bg-darker';
        operatorClass = 'bg-dark text-light';

    }

    return (
        <div className={`rounded-2xl p-5 text-center ${bg}`}>
            <div className="grid grid-cols-4 grid-rows-5 gap-5 font-bold">
                <button className={`operator-btn ${operatorClass.split(' ')[0]} text-accent`} onClick={actions.clearInput}>c</button>
                <button className={`operator-btn ${operatorClass}`} onClick={actions.setInput}>^</button>
                <button className={`operator-btn ${operatorClass}`} onClick={actions.backSpace}>&#8592;</button>
                <button className={`operator-btn ${operatorClass}`} onClick={actions.setInput}>/</button>
                
                <div className="col-span-3 row-span-3">
                    <div className="grid grid-cols-3">
                        {nums.map(num => <button className={`operand-btn ${operandText}`} 
                            onClick={actions.setInput} key={num}>{num}</button> )}
                        <button title="remiander operator" onClick={actions.setInput} className={`operator-btn ${operatorClass}`}>%</button>
                        <button className={`operand-btn ${operandText}`} onClick={actions.setInput}>0</button>
                        <button className={`operator-btn ${operatorClass}`} onClick={actions.setInput}>.</button>
                    </div>
                </div>
                <button className={`operator-btn ${operatorClass}`} onClick={actions.setInput}>x</button>
                <button className={`operator-btn ${operatorClass}`} onClick={actions.setInput}>-</button>
                <button className={`operator-btn ${operatorClass}`} onClick={actions.setInput}>+</button>
                <button className="col-span-4 bg-[#5A7BFF] text-white rounded-xl font-bold text-lg" onClick={actions.setInput}>=</button>
            </div>
        </div>
    );
}
