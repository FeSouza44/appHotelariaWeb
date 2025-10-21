export async function chekoutPedido(checkout) {
    const url = "api/pedidos/reservado";
    const body = {
        cliente_id: 20,
        pagamento: "pix",
        quartos: getTotalItems.map(it=> (
            {
                id: it.roomID,
                inicio: it.checkIn,
                fim: it.checkOut,
            }

        ))
    };
    const res = await fetch(url, {
        method: "POST", 
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
        })

        if(!res.ok){
            const message = `Erro ao enviar o pedido ${res.status}`;
            throw new Error(message);
        }
    return res.json();
}