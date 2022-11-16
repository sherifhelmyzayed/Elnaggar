const gallery = document.getElementById('gallery');
const news = document.getElementById('news');


const showGallery = () => {
    gallery.style.opacity = 1;
    gallery.style.transform = "translateX(0px)";
    gallery.style.zIndex = 1;    
    hideNews();
}


const hideGallery = ()=> {
    gallery.style.opacity = 0;
    gallery.style.transform = "translateX(-40px)";
    gallery.style.zIndex = 0;
}

const showNews = ()=> {
    news.style.opacity = 1;
    news.style.transform = "translateX(0px)";
    news.style.zIndex = 1;
    hideGallery();
}

const hideNews = ()=> {
    news.style.opacity = 0;
    news.style.transform = "translateX(40px)";
    news.style.zIndex = -1;
}

showGallery()


const setModal = (id) => {
    console.log(id);
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
    <img class="border-reduce" src="../Assets/media/l-media-${id}.png" alt="">
    `
    return
}