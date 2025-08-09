fetch('premios.json')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById('premios-list');
    data.forEach(cat => {
      const div = document.createElement('div');
      div.classList.add('categoria');

      const titulo = document.createElement('h2');
      titulo.textContent = `Premios de ${cat.puntos} punto${cat.puntos > 1 ? 's' : ''}`;
      div.appendChild(titulo);

      const ul = document.createElement('ul');
      cat.premios.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p;
        ul.appendChild(li);
      });

      div.appendChild(ul);
      contenedor.appendChild(div);
    });
  });