const form = document.getElementById('produto-form');
const codigoInput = document.getElementById('codigo');
const alturaInput = document.getElementById('altura');
const larguraInput = document.getElementById('largura');
const profundidadeInput = document.getElementById('profundidade');
const comentarioInput = document.getElementById('comentario');
const listaProdutos = document.getElementById('lista-produtos');
const listaBtn = document.getElementById('lista-btn');
let proximoCodigo = 1; 
const produtos = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  let codigo = codigoInput.value;
  const altura = alturaInput.value;
  const largura = larguraInput.value;
  const profundidade = profundidadeInput.value;
  const comentario = comentarioInput.value;
  
  if (codigo.trim() === '') {
    codigo = proximoCodigo.toString();
    proximoCodigo++; 
  } else {
    proximoCodigo= parseInt(codigo) + 1;
    
  }
  
  if (altura === '' || largura === '' || profundidade === '') {
    alert('Por favor, preencha todos os campos.');
    
  }

  
  if (!isNumeric(altura) || !isNumeric(largura) || !isNumeric(profundidade)) {
    alert('Por favor, insira somente números nos campos de altura, largura e profundidade.');
    return;
  }
  
  if (produtos.find(produto => produto.codigo === codigo)) {
    alert('Já existe um produto cadastrado com esse código.');
    return;
  }
  
  produtos.push({ codigo, altura, largura, profundidade, comentarios: [comentario] });
  
  codigoInput.value = '';
  alturaInput.value = '';
  larguraInput.value = '';
  profundidadeInput.value = '';
  comentarioInput.value = '';
  
  renderListaProdutos();
});

function renderListaProdutos() {
  listaProdutos.innerHTML = '';
  
  produtos.forEach(produto => {
    const produtoDiv = document.createElement('div');
    produtoDiv.innerHTML = `
      <h3>Código: ${produto.codigo}</h3>
      <p>Altura: ${produto.altura}</p>
      <p>Largura: ${produto.largura}<p> 
      <p>Profundidade: ${produto.profundidade}<p>
      <h4>Comentários:</h4>
      <ul>
        ${produto.comentarios.map(comentario => `<li>${comentario}</li>`).join('')}
      </ul>
      <hr>
    `;
    listaProdutos.appendChild(produtoDiv);
  });
}

listaBtn.addEventListener('click', function() {
  renderListaProdutos();
});


function isNumeric(str) {
  if (typeof str != "string") return false 
  return !isNaN(str) && !isNaN(parseFloat(str));
}

console.log(produtos.push)