export default function DateSelector(){
    const DivRoot = document.getElementById('root');
    DivRoot.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'DateSelector';
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.gap = '10px';


    const inputDataCheck = document.createElement('input');
    inputDataCheck.type = 'label';
    inputDataCheck.placeholder = 'Data de check-out';
    inputDataCheck.className = 'DataCheck';
    
    
    const inputDataCheckIn = document.createElement('input');
    inputDataCheckIn.type = 'label';
    inputDataCheckIn.placeholder = 'Data de check-in';
    inputDataCheckIn.className = 'DataCheck';

    const hospedes = document.createElement('input');
    hospedes.type = 'label';
    hospedes.placeholder = 'Hospedes';
    hospedes.className = 'DataCheck';

    const pesquisar = document.createElement('button');
    pesquisar.type = 'button';
    pesquisar.placeholder = 'Pesquisar';
    pesquisar.className = 'pesquisarButton';


    container.appendChild(inputDataCheck);
    container.appendChild(inputDataCheckIn);
    container.appendChild(hospedes);
    container.appendChild(pesquisar);

    return container;
}