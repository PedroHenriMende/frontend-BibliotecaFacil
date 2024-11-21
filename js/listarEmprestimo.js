async function listarEmprestimo() {
    try {
        const respostaServidor = await fetch("http://localhost:3333/lista/emprestimo", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const response = await respostaServidor.json();
        criarTabelaEmprestimos(response);

        if (!respostaServidor.ok) {
            throw new Error("Erro ao receber os dados do servidor. Contate o administrador do sistema.");
        }

    } catch (error) {
        console.log(error);
        alert(`Erro ao se comunicar com o servidor: ${error.message}`);
    }
}

async function criarTabelaEmprestimos(emprestimos) {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = ""; // Limpa a tabela antes de adicionar os novos dados

    emprestimos.forEach(emprestimo => {
        const linha = document.createElement('tr');

        // Cria as células com os dados do empréstimo
        const celulaIDAluno = document.createElement('td');
        celulaIDAluno.textContent = emprestimo.idAluno; // Campo esperado do backend
        linha.appendChild(celulaIDAluno);

        const celulaIDLivro = document.createElement('td');
        celulaIDLivro.textContent = emprestimo.idLivro; // Campo esperado do backend
        linha.appendChild(celulaIDLivro);

        const celulaDataEmprestimo = document.createElement('td');
        celulaDataEmprestimo.textContent = emprestimo.dataEmprestimo; // Campo esperado no formato "AAAA-MM-DD"
        linha.appendChild(celulaDataEmprestimo);

        const celulaDataDevolucao = document.createElement('td');
        celulaDataDevolucao.textContent = emprestimo.dataDevolucao ? emprestimo.dataDevolucao : "Pendente"; // Exibe "Pendente" se o campo estiver vazio
        linha.appendChild(celulaDataDevolucao);

        const celulaStatusEmprestimo = document.createElement('td');
        celulaStatusEmprestimo.textContent = emprestimo.statusEmprestimo ? "Ativo" : "Concluído"; // Status como "Ativo" ou "Concluído"
        linha.appendChild(celulaStatusEmprestimo);

        // Cria a célula para as ações (ícones de editar e excluir)
        const celulaAcoes = document.createElement('td');

        const iconeEditar = document.createElement('img');
        iconeEditar.src = "assets/icons/pencil-square.svg";
        iconeEditar.alt = "editar";
        iconeEditar.style.cursor = "pointer"; // Estilo do cursor para interação
        iconeEditar.title = "Editar Empréstimo";
        celulaAcoes.appendChild(iconeEditar);

        const iconeDeletar = document.createElement('img');
        iconeDeletar.src = "assets/icons/trash-fill.svg";
        iconeDeletar.alt = "excluir";
        iconeDeletar.style.cursor = "pointer";
        iconeDeletar.title = "Excluir Empréstimo";
        celulaAcoes.appendChild(iconeDeletar);

        linha.appendChild(celulaAcoes);

        // Adiciona a linha ao corpo da tabela
        tabela.appendChild(linha);
    });
}
