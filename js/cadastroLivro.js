async function cadastrarLivro() {
    //recuperar as informações do formulário e colocar em objetos JSON
    const livroDTO = {
        "titulo": document.querySelectorAll("input")[0].value,
        "autor": document.querySelectorAll("input")[1].value,
        "editora": document.querySelectorAll("input")[2].value,
        "anoPublicacao": document.querySelectorAll("input")[3].value,
        "isbn": document.querySelectorAll("input")[4].value,
        "quantTotal": document.querySelectorAll("input")[5].value,
        "quantDisponivel": document.querySelectorAll("input")[6].value,
        "valorAquisicao": document.querySelectorAll("input")[7].value,
        "statusEmprestimo": document.querySelectorAll("input")[8].value
    }

    console.log(livroDTO);

    try {
        const respostaServidor = await fetch("http://localhost:3333/novo/livro", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livroDTO)

        });

        if (!respostaServidor.ok) {
            throw new Error("Erro a enviar os dados para o servidor. Contate o administrador do sistema");
        }

        alert("Livro cadastrado com sucesso!");
    } catch (error) {
        console.log(error);
        alert(`Erro ao se comunicar com o servidor.${error}`)
    }
}