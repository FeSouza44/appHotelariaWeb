/* getToken() é uma função que retorna o valor do token armazenado no localStorage(), para que o usuario permaneça logado mesmo que mude 
de pagina e nao tenha "re-logar" */

// Listar os quartos disponiveis de acordo com o inicio fim e quantidade
export async function addRoom(contentForms) {
    const formData = new FormData(contentForms);
    const typeAccept = ['image/jpeg', 'image/png'];
    const inputFotos = contentForms.querySelector('#formFileMultiple');
    const imgs = inputFotos.files;
    for(let i = 0; i < imgs.length; i++){
        if(!typeAccept.include(imgs[i].type)) {
            throw new Error (`Arquivo ${imgs[i].name}"Não é suportdo.
            selecione um arquivo JPG ou png"`);
        } 
    }
    const url = `api/quartos`;
    const response = await fetch(url, {
        method: "POST", 
        body: formData
    });
    if(!response.ok) {

        throw new Error(`Erro ao enviar requisição: ${response.status}`);
    }
}

export async function listAvaibleQuartosRequest({ inicio, fim, qtd }){
    // Retorna o valor do token armazenado (que comprova a autenticação do usuario)
    const params = new URLSearchParams();

    if(inicio){ 
        params.set("inicio", inicio);
    }  

    if(fim){
        params.set("fim", fim);
    }

    if(qtd !== null && qtd !== ""){
        params.set("qtd", String(qtd));
    }
    
    const url = `api/quartos/disponivel?${params.toString()}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    });

    let data = null;

    try{
        data = await response.json();
    }catch{
        data = null;
    }
    if(!response.ok){
        const message = data?.message || "Falha ao buscar quartos disponiveis!";
        throw new Error(message);
    }
    const quartos = Array.isArray(data?.Quartos) ? data.Quartos : [];
    console.log(quartos);
    return quartos;
    
}