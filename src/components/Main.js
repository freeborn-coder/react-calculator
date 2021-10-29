import OutputScreen from "./OutputScreen";
import { ButtonsContainer } from "./ButtonsContainer";
import { useState } from "react";

export function Main(props){

    const [input, setInput] = useState('');
    const [output, setOutput] = useState(0);
    const [lastInput,setLastInput] = useState(0);


    const actions = {
        setInput(e){
            let prev = input ?? '';

            let val = e.target.innerText;
            let newInput;
            let res;

            if(lastInput === '=') return;

            if(isNaN(lastInput) && isNaN(val) && ! ['-','+'].includes(val)) return;

            if(isNaN(val) || isNaN(lastInput)){
                if(val === '='){
                    // compute answer
                    let stmt = prev.split(' ');
                    stmt = stmt.filter(elem => elem.trim().length > 0);
                    stmt = stmt.map(elem => isNaN(elem) ? elem : Number(elem));
                    
                    console.log(stmt.join(' '));

                    let [num1,operator,num2] = stmt;

                    switch(operator){
                        case '+': res = num1 + num2; break;
                        case 'x': res = num1 * num2; break;
                        case '-': res = num1 - num2; break;
                        case '/': res = num1 / num2; break;
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
    
    return (
        <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
            <div className='w-[450px] bg-white rounded-xl h-[650px]'>
                <OutputScreen input={input} output={output} />
                <ButtonsContainer actions={actions} />

                <br />
                <div className="text-center text-xs">
                    <span className='text-gray-500'>React Calculator by <a target="_blank" rel="noreferrer" 
                            className='text-gray-300' href="https://freeborniwarri.netlify.app">Freeborn Iwarri</a></span>
                    {/* <span className="mt-2 text-sm">UI Designed by <a className="text-gray-500" 
                            href="https://www.behance.net/mohammadwajahat">Mohammad Wajahat</a></span> */}
                </div>
            </div>
        </div>
    );
}