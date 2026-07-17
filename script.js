document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang');
    const pdfViewer = document.getElementById('pdf-viewer');

    // Отслеживаем изменение выбранного языка
    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        
        // Меняем путь к PDF файлу в зависимости от выбранного value (например, docs/srb.pdf)
        pdfViewer.src = `docs/${selectedLang}.pdf`;
    });
});