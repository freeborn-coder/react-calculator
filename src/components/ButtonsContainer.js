function ButtonsContainer(props){
    return (
        <div class="h-3/5 bg-[#FBFBFB] rounded-2xl p-4 text-center">
                <div class="grid grid-cols-4 grid-rows-5 gap-5 font-bold">

                    <button class="operator-btn">c</button>
                    <button class="operator-btn">%</button>
                    <button class="operator-btn">&#8592;</button> 
                    <button class="operator-btn">&#xf7;</button> 
                    <div class="col-span-3 row-span-3">
                        <div class="grid grid-cols-3">
                            <button class="operand-btn">7</button>
                            <button class="operand-btn">8</button>
                            <button class="operand-btn">9</button>
                            <button class="operand-btn">4</button>
                            <button class="operand-btn">5</button>
                            <button class="operand-btn">6</button>
                            <button class="operand-btn">1</button>
                            <button class="operand-btn">2</button>
                            <button class="operand-btn">3</button>
                            <button class="operand-btn">+/-</button>
                            <button class="operand-btn">0</button>
                            <button class="operand-btn font-bold">.</button>

                        </div>
                    </div>
                    <button class="operator-btn">x</button>
                    <button class="operator-btn">-</button>
                    <button class="operator-btn">+</button>
                    <button class="col-span-4 bg-[#5A7BFF] text-white rounded-xl font-bold text-xl">=</button>
                </div>
            </div>
    );
}

export default ButtonsContainer;