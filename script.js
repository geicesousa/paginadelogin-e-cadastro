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

// página de cadastro 
function realizarCadastro(){
   if(document.getElementById("emailCadastro").value == "" 
    || document.getElementById("senhaCadastro").value == "" 
        || document.getElementById("nome").value == "" 
            || document.getElementById("senhaConfirme").value == "" 
                || document.getElementById("cpf").value == "" ){ 
        alert("Por favor, preencha todos os campos para finalizar seu cadastro .")
    }
    else{
        alert("Parabéns! Seu cadastro foi finalizado com sucesso. Você já pode realizar seu login")
    } 
}

document.getElementById("botaoFinalizarCadastro").addEventListener("click", realizarCadastro)
