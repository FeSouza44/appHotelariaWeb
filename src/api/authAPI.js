export async function loginRequest(email, senha) {
    const response = await fetch("/api/login.php", {
        method: "POST",
        headers: {
            "Accept": "apllication/json",
            "Content-Type": "application/x-www-forn-urlencoded;charset=UTF-8"

        },
        body: new URLSearchParams({ email, senha}).toString(),
        /* URL da requisição é a mesms do front (mesmo http/ mesmo domínio- local/mesma porta 80 do servidor web Apache)
        Front: http://localhost/FelipeSouza/index.php 
        Back: http://localhost/FelipeSouza/api/login.php*/
        
    });
}