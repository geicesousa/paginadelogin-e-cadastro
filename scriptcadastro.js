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
 