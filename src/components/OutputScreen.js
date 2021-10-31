function OutputScreen(props){

    return (
        <div className="h-full p-6 flex flex-col justify-between items-end">
            <div className="w-full flex justify-start">
                {/* <label>
                    <input type='checkbox' /> Day mode
                </label> */}
            </div>
            <div className="w-full">
                <p className="text-lg text-right font-semibold overflow-x-auto">{props.input}</p>
                <p className="text-4xl text-right font-bold overflow-x-auto overflow-y-hidden w-full">{props.output}</p>
            </div>
        </div>
    );
}

export default OutputScreen;