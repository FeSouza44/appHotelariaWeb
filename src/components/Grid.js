
import { removerItemCart } from "../store/carrinhoStore.js"; 

export default function Grid(cartItems = []) {

    const Grid = document.createElement('div');
    Grid.className = "grid";

    const items = Array.isArray(cartItems) ? cartItems : [];

    if (items.length === 0) {
        Grid.innerHTML = `
            <div class="alert alert-info text-center mt-4">
                <h4>🛒 Seu carrinho está vazio!</h4>
                <p>Adicione quartos para visualizar o resumo da sua reserva.</p>
            </div>
        `;
        return Grid;
    }

    const totalGeral = items.reduce((total, item) => total + (item.subtotal || 0), 0);
    const totalFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalGeral);

    const linhasQuartos = items.map((item, index) => `
        <tr data-item-index="${index}">
            <td class="border-right d-flex justify-content-between align-items-start">
                <div class="d-flex flex-column">
                    <h6 class="mb-1">${item.nome || 'Quarto Sem Nome'}</h6>
                    <small class="text-muted">
                        ${item.checkIn || 'Data?'} a ${item.checkOur || 'Data?'} | ${item.daily || 0} diária(s)
                    </small>
                </div>
                <button 
                    class="btn btn-sm btn-outline-danger ms-3 remove-item" 
                    data-item-index="${index}"
                    title="Remover item"
                >
                    <i class="bi bi-trash"></i> 
                </button>
            </td>
            <td class="border-right align-middle">
                ${item.guest || 1} ${item.guest === 1 ? 'hóspede' : 'hóspedes'}
            </td>
            <td class="border-right text-center align-middle">
                ${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.subtotal || 0)}
            </td>
        </tr>
    `).join('');

    Grid.innerHTML = 
    `
    <table class="table">
        <thead>
            <tr class="table-danger">
            <th scope="col" class="border-right w-50">Categoria do Quarto</th>
            <th scope="col" class="border-right w-25">Hóspedes</th>
            <th scope="col" class="border-right w-25">Preço Total</th>
            </tr>
        </thead>
        <tbody>
            ${linhasQuartos}
            
            <tr>
                <td></td>
                <td class="text-end border-right">
                    <button type="submit" class="btn btn-primary">Reservar agora</button>
                </td>
                <td class="border-right text-center total" >
                    ${totalFormatado}
                </td>
            </tr>
        </tbody>
    </table>
    `;

    Grid.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (event) => {
            const itemIndex = parseInt(event.currentTarget.getAttribute('data-item-index'));
            removerItemCart(itemIndex); 
            
            if (typeof renderCarPage !== 'undefined') {
                 renderCarPage();
            } else {
                 window.location.reload(); 
            }
        });
    });

    return Grid;
}