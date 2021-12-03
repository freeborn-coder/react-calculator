function OutputScreen({ data }){
    const color = data.mode === 'dark' ? 'text-light':'text-dark';
    return (
        <div className="h-full p-5 flex flex-col justify-between items-end">
            <div className="w-full flex justify-start">
                <div className="w-1/3 flex justify-between items-center">
                    <i className={`fas fa-sun ${data.mode === 'light'?'text-accent': color}`}></i>
                    <label className="switch">
                        <input type="checkbox" checked={data.mode === 'dark'} onChange={data.changeMode} />
                        <span className="slider round"></span>
                    </label>
                    <i className={`${data.mode === 'dark'?'text-accent':'color'} fas fa-moon`}></i>
                </div>
            </div>
            <div className="w-full">
                <p className={`${color} text-lg text-right font-semibold overflow-x-auto`}>{data.input}</p>
                <p className={`${color} text-4xl text-right font-bold overflow-x-auto overflow-y-hidden w-full`}>
                    {formatOutput(data.output)}
                </p>
            </div>
        </div>
    );
}

const formatOutput = (val) => {
    return Number.isInteger(val) ? val : Number(val).toFixed(4);
}
export default OutputScreen;