function show(name) {
    const ppl = document.getElementById(name)
    ppl.classList.add("d-block")
    ppl.classList.remove("d-none")
    document.getElementById("noHide").classList.remove("d-none")
    document.getElementById("hide").classList.add("d-none")

}

function close(name) {
    const ppl = document.getElementById(name)
    ppl.classList.remove("d-block")
    ppl.classList.add("d-none")
    document.getElementById("noHide").classList.add("d-none")
    document.getElementById("hide").classList.remove("d-none")
}


document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('roster-grid')
    const render = list => {
        grid.innerHTML = ''
        list.forEach(p => {
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-2'
            col.innerHTML = `
                    <button onclick="show('${p.firstName}')" class='bg-transparent border-0'><img src="${p.photo}" alt="${p.firstName}'s Beautiful Face" class="card-img-top rounded-circle border1"></button>
             `
            grid.appendChild(col)
            const modal = document.createElement('div')
            modal.className = 'rounded w-75 display-4 text-white text-center mx-auto border border-1 border-white bg-transparent d-none popIn p-5'
            modal.id = p.firstName
            modal.innerHTML = `
    ${p.firstName} Fun Fact: <br> 
    <span class="fs-4">${p.funFact}</span> <br> 
    <button class="fs-2 text-white bg-transparent border border-1 border-white rounded text-center p-3">Close</button>
    `;

            const button = modal.querySelector("button");
            button.addEventListener("click", () => close(p.idName));
            modals.appendChild(modal);
        })
    }
    render(players)
})