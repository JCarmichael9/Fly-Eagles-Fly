document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('roster-grid');
    const modalsContainer = document.getElementById('modals'); // make sure you have a wrapper <div id="modals"></div> in your HTML
  
    const render = list => {
      grid.innerHTML = '';
      modalsContainer.innerHTML = '';
  
      list.forEach(p => {
        const col = document.createElement('div');
        col.className = 'col-6 col-lg-2';
        const btn = document.createElement('button');
        btn.className = 'bg-transparent border-0';
        btn.innerHTML = `<img src="${p.photo}"
                           alt="${p.firstName}'s Beautiful Face"
                           class="card-img-top rounded-circle ">`;
        const modal = document.createElement('div');
        modal.className =
          'rounded w-75 display-4 bigInfo text-center mx-auto bg-transparent d-none popIn p-5';
        modal.id = p.firstName; 
  
        modal.innerHTML = `
          ${p.firstName} Fun Fact: <br>
          <span class="fs-4">${p.funFact}</span><br>
          <button class="fs-2 info bg-transparent border2 rounded text-center p-3">
            Close
          </button>
        `;
  
        btn.addEventListener('click', function () {
          modal.classList.remove('d-none');
          modal.classList.add('border1');
          document.getElementById('noHide').classList.remove('d-none');
          document.getElementById('hide').classList.add('d-none');
        });
  
        const closeBtn = modal.querySelector('button');
        closeBtn.addEventListener('click', function () {
          modal.classList.remove('border1');
          modal.classList.add('d-none');
          document.getElementById('noHide').classList.add('d-none');
          document.getElementById('hide').classList.remove('d-none');
        });
  
        col.appendChild(btn);
        grid.appendChild(col);
        modalsContainer.appendChild(modal);
      });
    };
  
    render(players);
  });
  