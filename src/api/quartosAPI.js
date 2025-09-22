import { getToken } from "./authAPI";

export async function listAllRoomsRequest() {
    
    const token = getToken();
    
    /*A FUNÇÃO PARA LISTAR TODOS OS QUARTOS PRECISA SER ASSINCRONA POIS ESPERA-SE UMA "PROMISE" DE QUE AO CHAMAR
    O ENDPOINT "api/quartos" (QUE EXECUTA O ARQUIVO "quartos.php") NO QUAL CONTÉM TODAS AS REQUISIÇÕES POSSIVEIS,
    ESTE ARQUIVO CONVERSA COM A CONTROLLER, QUE POR SUA VEZ, CONVERSA COM A MODEL (ONDE ESTÁ A QUERY SELECT)
    */
    const respose = await fetch("api/quartos", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    
}