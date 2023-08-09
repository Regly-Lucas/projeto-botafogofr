
//OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem. devemos selecioná-lo
//passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima deles

const personagens = document.querySelectorAll('.personagem')

console.log(personagens)

// passo 2 - adicionaer a classe selecionado no personagem que o usuário passar o mouse por cima

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter' , () => {
      
    if(window.innerWidth < 450){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
       // passo 3 - verificar se ja existe um personagem selecionado, se sim, devemos remover a selecao dele
       const personagemSelecionado = document.querySelector('.selecionado')
       personagemSelecionado.classList.remove('selecionado');
       personagem.classList.add('selecionado');

       // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descricao do personagem grande 

       // passo 1 - pegar  o elemento do personagem  grande para adicionar as informacoes nele
       const imagemPersonagemGrande = document.querySelector('.personagem-grande');

       // passo 2 - alterar a imagem do personagem grande
       const idPersonagem = personagem.attributes.id.value;

       imagemPersonagemGrande.src = `./src/img/${idPersonagem}.jpeg`

       //passo 3 - alterar o nome do personagem grande
       const nomePersonagem = document.getElementById('nome-personagem');

       nomePersonagem.innerText = personagem.getAttribute('data-name');

       // passo 4 - alterar a descricao do personagem grande
       const descricaoPersonagem = document.getElementById('descricao-personagem')
       descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    })

})