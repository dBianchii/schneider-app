function logar(){
    var login = document.getElementById('usuario').value
    var senha = document.getElementById('senha').value
    var erro = document.getElementById('error')

    if(login == "projetofiap" && senha == "alunofiap"){
        location.href = "pagina.html"
    } else{
        erro.textContent = 'Usuário ou senha incorreto(os)'
    }
}

