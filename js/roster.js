document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('roster-grid')
    const render = list => {
        grid.innerHTML = ''
        list.forEach(p => {
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-2'
            col.innerHTML = `
                    <img src="${p.photo}" alt="${p.firstName}'s Beautiful Face" class="card-img-top rounded-circle border1">
             `
             grid.appendChild(col)
        })
    }

    render(players)
})