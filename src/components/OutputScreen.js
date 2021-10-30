function OutputScreen(props){

    return (
        <div className="h-full p-6 flex flex-col justify-between items-end">
            <div className="w-full flex justify-start">
                {/* <label>
                    <input type='checkbox' /> Day mode
                </label> */}
            </div>
            <div className="">
                <p className="text-lg text-right font-semibold">{props.input}</p>
                <p className="text-4xl text-right font-bold">{props.output}</p>
            </div>
        </div>
    );
}

export default OutputScreen;