// index = onclick no HTML

// document.getElementById('botaoLogin').addEventListener('onclick', location.href='pagina-de-login.html')
// errado: no index manda direto para pagina de login 'botaoCadastrar'

//página de login
document.getElementById("botaoEntrar").addEventListener("click", realizarLogin)


function realizarLogin(){
    if(document.getElementById("emailLogin").value == "" 
        || document.getElementById("senhaLogin").value == "" ){
        alert("Por favor, preencha todos os campos.")
    } 
    else{
        alert("Seja bem-vind@!")
    }
}

