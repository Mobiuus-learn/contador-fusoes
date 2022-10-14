import { cores } from './cores.mjs'

const fibraIni = document.querySelector('#fib-ini')
const fibraFim = document.querySelector('#fib-fim')
const button = document.querySelector('#btn-send')
const alimentador = document.querySelector("#cable-ali")
const reset = document.querySelector('#btn-reset')
const fusionResult = document.querySelector('.fusion-result')
let span = document.createElement('span')


// opçoes  de cabos comumente usados
const validInput = [ 12, 24, 36, 48, 72, 144]


// grupos
const calcGroups = (res)=>{
    let lenghtGroup = res
    let colors = []
    colors.lenght = lenghtGroup
    
    console.log(colors)
    for(let i = 0; i <= colors.length; i++){
        cores.length = colors.length
        console.log(cores[i].cor)
    }
}   
console.log(cores[4].cor)

const  calcFusion = () =>{
    let init = parseInt(fibraIni.value)
    let end = parseInt(fibraFim.value)   
    let result
    fusionResult.appendChild(span)

    if(checkValidate()){
            calc()
    }    

    function calc() {
        if (init != 0 && init >= 1) {
            result = end - init + 1
            show(result)
            calcGroups(result)

          
        }
    }

   
}
const show = (res) => {
    return span.innerHTML = `<span class="box mt-4 has-text-success">Quantidade total de fusões: ${res}</span>`
}

const checkValidate = () =>{
           
    let ali = parseInt(alimentador.value)   
    const valid = validInput.includes(ali)
       
        if(!valid || 0){
            return alert("Informe uma das opções válidas")
        }
        if(!ali){
            return alert("Por favor, informe o cabo alimentador")
            
        }
    
        
        return true
}

const resetV = ()=>{
    span.innerText =""
    fibraIni.value = ""
    fibraFim.value = ""
    alimentador.value = ""
}
button.onclick = calcFusion

reset.onclick = resetV 