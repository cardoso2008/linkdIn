function enviarFormulario() {
   // alert("O botão foi selecionado")

    var cadastro = new Object();
    cadastro.nome = document.getElementById('nome').value;
    cadastro.sobrenome = document.getElementById('sobrenome').value;
    cadastro.escolaridade = document.getElementById('escolaridade').value;
    cadastro.profissao = document.getElementById('profissao').value;
    cadastro.telefone = document.getElementById('telefone').value;
    cadastro.email = document.getElementById('email').value;
    cadastro.cidade = document.getElementById('cidade').value;

    var myJSON = JSON.stringify(cadastro)

    console.log(myJSON)
    console.log(cadastro.valueOf())
} 

