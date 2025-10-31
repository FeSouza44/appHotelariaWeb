import { finishedOrder } from "../api/pedidosAPI.js";
import Navbar from "../components/Navbar.js";
import { clearHotelCart, getCart, getTotalItems } from "../store/carrinhoStore.js";
//Importar componente Footer

export default function renderCartPage() {
    //Navbar
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = Navbar();
    nav.appendChild(navbar);

    //Root (corpo da página)
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const reservations = getCart();
    const total = getTotalItems();

    const container = document.createElement('div');
    container.className = "container my-4";

    const header = document.createElement('div');
    header.className = "d-flex align-items-center justify-content-between mb-3";

    //Cabeçalho da tabela
    header.innerHTML =
    `
        <h3 class="mb-0">Reservas</h3>
        <div>
            <button id="btnClear" class="btn btn-outline-danger btn-sm">Limpar carrinho</button>
        </div>
    `
    //Tabela
    const table = document.createElement('div');
    if (reservations.length === 0) {
        table.innerHTML = `<div class="alert alert-info">Nenhuma reserva no carrinho.</div>`
    }
    else {
        table.innerHTML =
        `
            <div class="table-responsive">
                <table class="table table-striped table-hover align-middle">
                    <thead class="table-success">
                        <!-- Colunas da tabelas -->
                        <tr>
                            <th>Nome do quarto</th>
                            <th>Data de check-in</th>
                            <th>Data de check-out</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${reservations.map(item =>
                            `
                            <tr>
                                <td>${item.nome}</td> 
                                <td>${item.checkIn}</td>
                                <td>${item.checkOut}</td>
                                <td>R$ ${item.subtotal}</td>
                            </tr>
                            `).join("")}
                    </tbody>
                    <tfoot>
                            <tr>
                                <th><th>
                                <th>
                                    <h3 style="font-size: 19px;">Total: R$ ${total}</h3>
                                </th>
                                <th>
                                    <button id="btnFinalizar" class="btn btn-outline-success btn-sm"> Finalizar compra</button>
                                </th>
                            </tr>
                    </tfoot>
                </table>    
            </div>
        `
    }    
    container.appendChild(header);
    container.appendChild(table);
    divRoot.appendChild(container);

    const btnClear = document.getElementById("btnClear");
        if (btnClear) {
            btnClear.addEventListener("click", () => {
                clearHotelCart();
                renderCartPage();
            });
        }

    const btnEscolherPag = document.getElementById('btnEscolherPag');
    btnEscolherPag.addEventListener("click", () => {
        const modalPage = document.createElement('div');
        modalPage.innerHTML = 
        `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>

                    <div class="mb-3">

                    <label for="message-text" class="col-form-label">Message:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                    </div>
            
                    </form>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Send message</button>
                </div>
            </div>
        </div>
    </div>
        `;
    })
    
    const btnFinalizar = document.getElementById("btnFinalizar");
    if (btnFinalizar) {
        btnFinalizar.addEventListener("click", async () => {
            const metodoPagamento = "pix"; //Por enquanto! Assim que testado, colocamos um modal
            try {
                const result = await finishedOrder(metodoPagamento, reservations);
                if (result.ok) {
                    //Modal de compra efetuado com sucesso!
                    alert("Compra efetuada com sucesso!");
                    clearHotelCart();
                    renderCartPage();
                } else {
                    alert(result.message || "Erro ao realizar reserva.");
                }
            }
            catch (error) {
                alert(error?.message || "Falha na comunicação com o servidor");
            }
        });
    }
}