document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang');
    const pdfViewer = document.getElementById('pdf-viewer');

    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        
        pdfViewer.src = `docs/${selectedLang}.pdf`;
    });
});