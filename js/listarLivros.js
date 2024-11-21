async function listarLivros() {
    try {
        const respostaServidor = await fetch("http://localhost:3333/lista/livros", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!respostaServidor.ok) {
            throw new Error("Erro ao receber os dados do servidor. Contate o administrador do sistema.");
        }

        const livros = await respostaServidor.json();
        criarTabelaLivros(livros);

    } catch (error) {
        console.error(error);
        alert(`Erro ao se comunicar com o servidor: ${error.message}`);
    }
}

async function criarTabelaLivros(livros) {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = ""; // Limpa a tabela antes de adicionar novos dados

    // Cria as linhas da tabela com os dados dos livros
    livros.forEach(livro => {
        const linha = document.createElement('tr');

        // Cria as células da tabela com base nos dados do livro
        const celulaID = document.createElement('td');
        celulaID.textContent = livro.id; // Propriedade 'id'
        linha.appendChild(celulaID);

        const celulaTitulo = document.createElement('td');
        celulaTitulo.textContent = livro.titulo; // Propriedade 'titulo'
        linha.appendChild(celulaTitulo);

        const celulaAutor = document.createElement('td');
        celulaAutor.textContent = livro.autor; // Propriedade 'autor'
        linha.appendChild(celulaAutor);

        const celulaEditora = document.createElement('td');
        celulaEditora.textContent = livro.editora; // Propriedade 'editora'
        linha.appendChild(celulaEditora);

        const celulaAno = document.createElement('td');
        celulaAno.textContent = livro.anoPublicacao; // Propriedade 'anoPublicacao'
        linha.appendChild(celulaAno);

        const celulaISBN = document.createElement('td');
        celulaISBN.textContent = livro.isbn; // Propriedade 'isbn'
        linha.appendChild(celulaISBN);

        const celulaQuantidadeTotal = document.createElement('td');
        celulaQuantidadeTotal.textContent = livro.quantidadeTotal; // Propriedade 'quantidadeTotal'
        linha.appendChild(celulaQuantidadeTotal);

        const celulaQuantidadeDisponivel = document.createElement('td');
        celulaQuantidadeDisponivel.textContent = livro.quantidadeDisponivel; // Propriedade 'quantidadeDisponivel'
        linha.appendChild(celulaQuantidadeDisponivel);

        const celulaStatusEmprestimo = document.createElement('td');
        celulaStatusEmprestimo.textContent = livro.statusEmprestimo ? "Emprestado" : "Disponível"; // Exibe status do livro
        linha.appendChild(celulaStatusEmprestimo);

        // Cria a célula para as opções (ícones de editar e excluir)
        const celulaOpcoes = document.createElement('td');

        const iconeEditar = document.createElement('img');
        iconeEditar.src = "assets/icons/pencil-square.svg";
        iconeEditar.alt = "editar";
        iconeEditar.style.cursor = "pointer"; // Adiciona estilo de cursor
        iconeEditar.title = "Editar Livro";
        celulaOpcoes.appendChild(iconeEditar);

        const iconeDeletar = document.createElement('img');
        iconeDeletar.src = "assets/icons/trash-fill.svg";
        iconeDeletar.alt = "excluir";
        iconeDeletar.style.cursor = "pointer";
        iconeDeletar.title = "Excluir Livro";
        celulaOpcoes.appendChild(iconeDeletar);

        linha.appendChild(celulaOpcoes);

        // Adiciona a linha ao corpo da tabela
        tabela.appendChild(linha);
    });
}
