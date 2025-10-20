export default function FormRoom() {
    const DivRoot = document.getElementById('root');
    DivRoot.innerHTML = '';
    DivRoot.style.height = '100vh';

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg d-flex flex-row';
    container.style.width = '100%';
    container.style.maxWidth = '900px';
    container.style.height = '500px';
    container.style.border = 'none';
    container.style.backgroundColor = '#ffffff';
    container.style.backdropFilter = 'blur(10px) brightness(0.8)';
    container.style.margin = '0 auto';

    const leftSide = document.createElement('div');
    leftSide.className = 'left-side d-flex align-items-center justify-content-center';
    leftSide.style.width = '57%';
    leftSide.style.backgroundImage = 'url("public/assets/imgs/LeftSide.jpg")';
    leftSide.style.backgroundSize = 'cover';
    leftSide.style.backgroundPosition = 'center';
    leftSide.style.borderRadius = '10px 0 0 10px';

    const rightSide = document.createElement('div');
    rightSide.className = 'right-side p-4 d-flex flex-column justify-content-center';
    rightSide.style.width = '50%';

    const titulo = document.createElement('h1');
    titulo.textContent = 'Cadastro de Quartos';
    titulo.className = 'titulo mb-4';
    titulo.style.color = 'black';
    titulo.style.textAlign = 'center';

    const formulario = document.createElement('form');
    formulario.className = 'd-flex flex-column';

    const nome = document.createElement('input');
    nome.type = 'text';
    nome.style.textAlign = 'left';
    nome.max = '50';
    nome.placeholder = "Digite o nome do quarto";
    nome.className = 'inputs';
    formulario.appendChild(nome);

    const numero = document.createElement('input');
    numero.type = 'text';
    numero.style.textAlign = 'left';
    numero.placeholder = "Digite o numero";
    numero.className = 'inputs';
    formulario.appendChild(numero);
    const qtd_cama_casal = document.createElement('input');
    qtd_cama_casal.type = 'number';
    qtd_cama_casal.style.textAlign = 'left';

    qtd_cama_casal.placeholder = 'Quantidade cama casal';
    qtd_cama_casal.className = 'inputs';
    formulario.appendChild(qtd_cama_casal);
    const qtd_cama_solteiro = document.createElement('input');
    qtd_cama_solteiro.type = 'number';
    qtd_cama_solteiro.style.textAlign = 'left';

    qtd_cama_solteiro.placeholder = 'Quantidade cama solteiro';
    qtd_cama_solteiro.className = 'inputs';
    formulario.appendChild(qtd_cama_solteiro);

    const preco = document.createElement('input');
    preco.type = 'number';
    preco.style.textAlign = 'left';
    preco.placeholder = 'Digite o preço do quarto';
    preco.className = 'inputs';
    formulario.appendChild(preco);

    const disponibilidadeContainer = document.createElement('div');
    disponibilidadeContainer.className = 'd-flex align-items-center mt-3';
    disponibilidadeContainer.style.gap = '10px';
    disponibilidadeContainer.style.justifyContent = 'center';

    const perguntaDisponivel = document.createElement('h2');
    perguntaDisponivel.textContent = 'O quarto está disponível?';
    perguntaDisponivel.style.fontSize = '18px';
    perguntaDisponivel.style.margin = '0';
    perguntaDisponivel.style.color = '#000';

    const disponivelSim = document.createElement('input');
    disponivelSim.type = 'radio';
    disponivelSim.name = 'disponivel';
    disponivelSim.value = 'true';

    const labelSim = document.createElement('label');
    labelSim.textContent = 'Sim';
    labelSim.style.marginRight = '10px';

    const disponivelNao = document.createElement('input');
    disponivelNao.type = 'radio';
    disponivelNao.name = 'disponivel';
    disponivelNao.value = 'false';

    const labelNao = document.createElement('label');
    labelNao.textContent = 'Não';

    disponibilidadeContainer.appendChild(perguntaDisponivel);
    disponibilidadeContainer.appendChild(disponivelSim);
    disponibilidadeContainer.appendChild(labelSim);
    disponibilidadeContainer.appendChild(disponivelNao);
    disponibilidadeContainer.appendChild(labelNao);
    formulario.appendChild(disponibilidadeContainer);

    const btnSubmit = document.createElement('button');
    btnSubmit.type = 'submit';
    btnSubmit.textContent = 'Cadastrar Quarto';
    btnSubmit.className = 'btn btn-primary mt-4';
    formulario.appendChild(btnSubmit);

    rightSide.appendChild(titulo);
    rightSide.appendChild(formulario);
    container.appendChild(leftSide);
    container.appendChild(rightSide);
    DivRoot.appendChild(container);

}