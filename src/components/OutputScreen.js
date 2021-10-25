function OutputScreen(props){

    return (
        <div className="h-2/5 p-6 flex flex-col justify-end items-end">
            <p className="text-lg font-semibold">{props.input}</p>
            <p className="text-3xl font-bold">{props.output}</p>
        </div>
    );
}

export default OutputScreen;