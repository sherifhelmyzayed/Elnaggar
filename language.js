
const langButtom = document.getElementById('lang');

const host = "5500/"


const toggleLang = () => {
    const localStore = localStorage.getItem('lang');
    const language = localStore ? localStore : 'eng';
    const url = window.location.href;

    console.log(language);

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

    console.log(language);
    if (language === "ar") {
        console.log("language is Arabic");
        langButtom.innerText = "Eng"
    } else {
        console.log("language is English");
        langButtom.innerText = "Ar"
    }
    return
};

if (localStorage.getItem('lang') === undefined) {
    localStorage.setItem('lang', 'eng');
}

addLanguageText();