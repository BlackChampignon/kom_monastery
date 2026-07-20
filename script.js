document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang');
    const pdfViewer = document.getElementById('pdf-viewer');

    function updatePDF() {
        const selectedLang = langSelect.value;
        const isMobile = window.innerWidth <= 1320 || ('ontouchstart' in window);
        
        if (isMobile) {
            // Для мобильных — чистим тулбары и фиксируем по ширине экрана
            pdfViewer.src = `docs/${selectedLang}.pdf#toolbar=0&navpanes=0&view=FitH`;
        } else {
            // Для ПК — десктопный стандартный вид
            pdfViewer.src = `docs/${selectedLang}.pdf`;
        }
    }

    // Загрузка при старте
    updateContent();

    // Следим за выбором языка
    langSelect.addEventListener('change', updatePDF);

    // Следим за поворотом экрана/изменением размера окна
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updatePDF, 250);
    });
});