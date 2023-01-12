const fibraIni = document.querySelector("#fib-ini");
const fibraFim = document.querySelector("#fib-fim");
const button = document.querySelector("#btn-send");
const alimentador = document.querySelector("#cable-ali");
const reset = document.querySelector("#btn-reset");
const fusionResult = document.querySelector(".fusion-result");
let span = document.createElement("span");

// opçoes  de cabos comumente usados
const validInput = [12, 24, 36, 48, 72, 144];

// grupos
const calcGroups = (res) => {
  let groupM = parseInt(alimentador.value);
  groupM;
  let fiberPerGroup;

  let groups;
  switch (groupM) {
    case 12: {
      fiberPerGroup = 12;

      groups = Math.ceil(res / fiberPerGroup);
      break;
    }
    case 24: {
      fiberPerGroup = 6;
      groups = Math.ceil(res / fiberPerGroup);
      break;
    }

    case 36: {
      fiberPerGroup = 6;
      groups = Math.ceil(res / fiberPerGroup);
      break;
    }
    case 48: {
      fiberPerGroup = 12;
      groups = Math.ceil(res / fiberPerGroup);
      break;
    }
    case 72: {
      fiberPerGroup = 12;
      groups = Math.ceil(res / fiberPerGroup);
      break;
    }
    case 144: {
      fiberPerGroup = 12;
      groups = Math.ceil(res / fiberPerGroup);
      break;
    }
  }
  return groups;
};

const calcFusion = () => {
  let init = parseInt(fibraIni.value);
  let end = parseInt(fibraFim.value);
  let result;
  fusionResult.appendChild(span);

  if (checkValidate()) {
    calc();
  }

  function calc() {
    if (init != 0 && init >= 1) {
      result = end - init + 1;
      show(result);
      calcGroups(result);
    }
  }
};
const show = (res) => {
  if (res > alimentador.value) {
    return (span.innerHTML = `<span class="box mt-4 has-text-danger">Error: A quantidade de fusões é maior que a quantidade de fibras presentes no cabo </span>`);
  }

  return (span.innerHTML = `<span class="box mt-4 " style="color:red">Quantidade total de fusões: ${res};<br>
		<span style="color:red">Quantidade de grupos: ${calcGroups(res)}</span>
	</span>`);
};

const checkValidate = () => {
  let ali = parseInt(alimentador.value);
  const valid = validInput.includes(ali);

  if (!valid || 0) {
    return alert(`Informe uma das opções válidas correspondente ao cabo alimentador: ${validInput}`)
  }
  if (!ali) {
    return alert("Por favor, informe o cabo alimentador");
  }

  return true;
};

const resetV = () => {
  span.innerText = "";
  fibraIni.value = "";
  fibraFim.value = "";
  alimentador.value = "";
};
button.onclick = calcFusion;

reset.onclick = resetV;
