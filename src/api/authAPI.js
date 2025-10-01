export async function loginRequest(email, senha) {
    const dados = {email, password: senha}
    const response = await fetch("api/clientes", {
        method: "POST",
        headers: {
            "Accept": "apllication/json",
            "Content-Type": "application/json"

        },
        body: JSON.stringify(dados),

        // body: new URLSearchParams({ email, senha}).toString(),
        /* URL da requisição é a mesms do front (mesmo http/ mesmo domínio- local/mesma porta 80 do servidor web Apache)
        Front: http://localhost/FelipeSouza/index.php 
        Back: http://localhost/FelipeSouza/api/login.php*/
            credentials: "same-origin"
        
    });

    let data = null;
    try{
        data = await response.json();
    
    }catch{
        data = null;
    }

    if(!data || !data.token){
        const message = "resposta inválida do servidor. Token Ausente";
        return {ok: false, token: null, raw: data, message};
    }
    
    return {
        ok: true,
        token: data.token,
        raw: data
    }
    /*Funcao p salvar a chave token após autenticação
    confirmada ao salvar no local storage, o usuario pode mudar de pagina,
    fechar o site e ainda sim vai permancer
    logado enquanto o token não expirar
    */
}
    export function saveToken(token){
        return localStorage.setItem("auth_token", token);
    }

    export function getToken(token){
        return localStorage.getItem("auth_token", token);
    }

    /*Função para remover a chave token quando o usuário deslogar*/
    export function clearToken(){
        return localStorage.removeItem("auth_token");
    }
    