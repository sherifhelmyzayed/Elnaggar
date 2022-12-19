
const langButtom = document.getElementById('lang');

const host = window.location.href.includes(".com") ? ".com/" : "5500/"

console.log(window.location.href.includes(".com"));


const toggleLang = () => {
    const localStore = localStorage.getItem('lang');
    const language = localStore ? localStore : 'eng';
    const url = window.location.href;

    if (language === "eng") {
        localStorage.setItem('lang', "ar");
        const splittedUrl = url.split(host);
        const location = splittedUrl[0] + host + 'ar/' + splittedUrl[1];
        window.location.href = location;
    } else {
        localStorage.setItem('lang', "eng");
        const splittedUrl = url.split('ar/');
        const location = splittedUrl[0] + splittedUrl[1];
        window.location.href = location;
    };
    return
};

const addLanguageText = () => {
    const language = localStorage.getItem('lang');

    if (language === "ar") {
        langButtom.innerText = "Eng"
    } else {
        langButtom.innerText = "Ar"
    }
    return
};

if (localStorage.getItem('lang') === undefined) {
    localStorage.setItem('lang', 'eng');
}

addLanguageText();