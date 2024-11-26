async function listarAlunos() {
    try {
        const respostaServidor = await fetch("http://localhost:3333/lista/alunos    ", {
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
        const response = await respostaServidor.json();
        criarTabelaAlunos(response);

        if(!respostaServidor.ok) {
            throw new  Error("Erro a receber os dados para o servidor. Contate o administrador do sistema");
        }

    } catch (error) {
        console.log(error);
        alert(`Erro ao se comunicar com o servidor.${error}`)
    } 
}

async function criarTabelaAlunos(alunos) {
    const tabela = document.querySelector('tbody');

    // Cria as linhas da tabela com os dados do array
    alunos.forEach(aluno => {
        const linhas = document.createElement('tr');

        // Cria cada célula com os dados do carro
        const celulaID = document.createElement('td');
        celulaID.textContent = aluno.idAluno;
        linhas.appendChild(celulaID);

        const celulaRA = document.createElement('td');
        celulaRA.textContent = aluno.raAluno;
        linhas.appendChild(celulaRA);

        const celulaNome = document.createElement('td');
        celulaNome.textContent = aluno.nome;
        linhas.appendChild(celulaNome);

        const celulaSobrenome = document.createElement('td');
        celulaSobrenome.textContent = aluno.sobrenome;
        linhas.appendChild(celulaSobrenome);

        const celulaData = document.createElement('td');
        celulaData.textContent = new Date(aluno.dataNascimento).toLocaleDateString('pt-br');
        linhas.appendChild(celulaData);

        const celulaEndereco = document.createElement('td');
        celulaEndereco.textContent = aluno.endereco;
        linhas.appendChild(celulaEndereco);
        
        const celulaEmail = document.createElement('td');
        celulaEmail.textContent = aluno.email;
        linhas.appendChild(celulaEmail);

        const celulaCelular = document.createElement('td');
        celulaCelular.textContent = aluno.celular;
        linhas.appendChild(celulaCelular);

        // Cria a célula para ações (ícones de editar e excluir)
        const celulaAcoes = document.createElement('td');

        const iconeEditar = document.createElement('img');
        iconeEditar.src = "assets/icons/pencil-square.svg";
        iconeEditar.alt = "editar";
        celulaAcoes.appendChild(iconeEditar);

        const iconeDeletar = document.createElement('img');
        iconeDeletar.src = "assets/icons/trash-fill.svg";
        iconeDeletar.alt = "excluir";
        celulaAcoes.appendChild(iconeDeletar);

        linhas.appendChild(celulaAcoes);

        // Adiciona a linha ao corpo da tabela
        tabela.appendChild(linhas);
    });
}