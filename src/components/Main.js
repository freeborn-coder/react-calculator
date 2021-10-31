import OutputScreen from "./OutputScreen";
import { ButtonsContainer } from "./ButtonsContainer";
import { useState } from "react";

export function Main(props){

    const [input, setInput] = useState('');
    const [output, setOutput] = useState(0);
    const [lastInput,setLastInput] = useState(0);


    const actions = {
        setInput(e, inputValue = null){
            let prev = input ?? '';

            let val = inputValue ?? e.target.innerText;
            
            let newInput;
            let res;

            // continue the equation/math after an equal sign is entered
            if(lastInput === '='){
                if(isNaN(val)){
                    newInput = output + ' '+ val;
                }else{
                    newInput = val;
                }
                setInput(newInput);
                setLastInput(val);
                setOutput(0);
                return;
            }

            // handle the decimal point input
            if(!isNaN(lastInput) && val === '.'){
                setInput(input+'.');
                setLastInput(lastInput);
                return;
            }
            
            if(isNaN(lastInput) && isNaN(val) && ! ['-','+'].includes(val)) return;
            
            if(isNaN(val) || isNaN(lastInput)){
                if(val === '='){
                    
                    // compute answer
                    let stmt = prev.split(' ');
                    stmt = stmt.filter(elem => elem.trim().length > 0);
                    stmt = stmt.map(elem => isNaN(elem) ? elem : Number(elem));
                    
                    // console.log(stmt.join(' '));

                    let [num1,operator,num2] = stmt;

                    switch(operator){
                        case '+': res = num1 + num2; break;
                        case 'x': res = num1 * num2; break;
                        case '-': res = num1 - num2; break;
                        case '/': res = num1 / num2; break;
                        case '^': res = num1 ** num2; break;
                        default:
                    }
                    
                }
                newInput = prev + '  ' + val;
            }else{
                newInput = prev + val;
            }

            setLastInput(val);
            setInput(newInput);
            if(res) setOutput(res);

        },
        clearInput(){
           setInput(null);
           setLastInput('');
           setOutput(0);
        },
        backSpace(){
            let previousVal = input.trim();
            setInput(previousVal.substring(0,previousVal.length - 1));
            setLastInput(previousVal.substring(0,previousVal.length - 2));
        }
    }

    // const handleKeyPress = (e) => {
    //     if(e.key.toString().toLowerCase() === 'backspace') actions.backSpace();
    //     if(e.key.toString().toLowerCase() === 'enter') actions.setInput(null,'=');
    //     if(!isNaN(e.key)) actions.setInput(null, e.key);
    // }

    /* <span className="mt-2 text-sm">UI Designed by <a className="text-gray-500" 
                        href="https://www.behance.net/mohammadwajahat">Mohammad Wajahat</a></span> */
    
    return (
        <div className='w-full h-[115vh] md:h-[100vh] flex justify-center items-center bg-gray-500'>
            <div className="">
                <div 
                    className='w-[90vw] h-[90vh] sm:w-[80vw] md:w-[25vw] mt-4 
                    bg-white rounded-xl sm:h-[550px] flex flex-col justify-end'
                >
                    <div className="h-[30%]">
                        <OutputScreen input={input} output={output} />
                    </div>
                    <div className="h-[70%]"> 
                        <ButtonsContainer actions={actions} />
                    </div>
                </div>
                <div className="text-center text-xs h-[10vh] mt-14 sm:mt-8">
                    <p className='text-gray-400 font-semibold mt-4 sm:mt-0'>REACT CALCULATOR by&nbsp; <a target="_blank" rel="noreferrer" className='text-gray-300' href="https://freeborniwarri.netlify.app">Freeborn Iwarri</a></p>
                    <p className="my-3 text-sm font-semibold text-gray-400">Designed by <a className="" href="https://www.behance.net/mohammadwajahat">Mohammad Wajahat</a></p>
                </div>
            </div>
        </div>
    );
}

