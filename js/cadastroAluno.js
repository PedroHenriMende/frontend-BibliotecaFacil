async function cadastrarAluno() {
    //recuperar as informações do formulário e colocar em objetos JSON
    const alunoDTO = {
        "nome": document.querySelectorAll("input")[0].value,
        "sobrenome": document.querySelectorAll("input")[1].value,
        "dataNascimento": document.querySelectorAll("input")[2].value,
        "endereco": document.querySelectorAll("input")[3].value,
        "email": document.querySelectorAll("input")[4].value,
        "celular": document.querySelectorAll("input")[5].value
    }

    console.log(alunoDTO    );

    try {
        const respostaServidor = await fetch("http://localhost:3333/novo/aluno", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alunoDTO)

        });

        if (!respostaServidor.ok) {
            throw new Error("Erro a enviar os dados para o servidor. Contate o administrador do sistema");
        }

        alert("Aluno cadastrado com sucesso!");
    } catch (error) {
        console.log(error);
        alert(`Erro ao se comunicar com o servidor.${error}`)
    }
}