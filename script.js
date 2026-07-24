document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang');
    const imgPage1 = document.getElementById('img-page-1');
    const imgPage2 = document.getElementById('img-page-2');

    function updateContent() {
        const selectedLang = langSelect.value;
        imgPage1.src = `imgs/${selectedLang}1.jpg`;
        imgPage2.src = `imgs/${selectedLang}2.jpg`;
    }

    langSelect.addEventListener('change', updateContent);
});