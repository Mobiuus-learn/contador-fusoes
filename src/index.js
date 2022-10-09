const fibraIni = document.querySelector('#fib-ini')
const fibraFim = document.querySelector('#fib-fim')
const button = document.querySelector('#btn-send')
const reset = document.querySelector('#btn-reset')
const fusionResult = document.querySelector('.fusion-result')

let span = document.createElement('span')

const  calcFusion = ()=>{
    fusionResult.appendChild(span)

    init = Number(fibraIni.value)
    end = Number(fibraFim.value)

    
    if(init !=0 && init >= 1){
        let result = end - init + 1
        span.innerHTML = `<span class="box mt-4">Quantidade total de fusões: ${result}</span>`
        console.log(result, init, end)
    }
    
    // resetV(span)
   
}

const resetV = ()=>{
    span.innerText =""
    fibraIni.value = ""
    fibraFim.value = ""
}
button.onclick = calcFusion

reset.onclick = resetV 