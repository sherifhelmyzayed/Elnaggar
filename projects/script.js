const sectorContainer = document.getElementsByClassName('project-card-sector')



const openSectorCard = (id) => {
    const hiddenEl = sectorContainer[id].getElementsByClassName('project-card-text-hidden')[0]
    hiddenEl.style.opacity = 1
    hiddenEl.style.zIndex = 50

    const TextEl = sectorContainer[id].getElementsByClassName('project-card-text')[0]
    TextEl.style.opacity = 0
    TextEl.style.zIndex = -1
}

const closeSectorCard = (id) => {
    const hiddenEl = sectorContainer[id].getElementsByClassName('project-card-text-hidden')[0]
    hiddenEl.style.opacity = 0
    hiddenEl.style.zIndex = -1

    const TextEl = sectorContainer[id].getElementsByClassName('project-card-text')[0]
    TextEl.style.opacity = 1
    TextEl.style.zIndex = 1
}