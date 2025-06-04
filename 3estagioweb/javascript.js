function adicionarEndereco() {
  const input = document.getElementById('novoEndereco');
  const valor = input.value.trim();
  if (valor === '') return;
  const lista = document.getElementById('enderecos-lista');
  const div = document.createElement('div');
  div.className = 'border p-3 mb-3 rounded bg-dark';
  div.innerHTML = `<p><strong>Endereço:</strong> ${valor}</p>
    <button class='btn btn-sm btn-danger' onclick='this.parentElement.remove()'>Excluir</button>`;
  lista.appendChild(div);
  input.value = '';
}
