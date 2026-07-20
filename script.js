document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang');
    const pdfViewer = document.getElementById('pdf-viewer');

    function getPdfUrl(lang) {
        // check if the device is mobile based on window width or touch capability
        const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window);
        
        if (isMobile) {
            // FitH for mobile devices
            return `docs/${lang}.pdf#toolbar=0&navpanes=0&view=FitH`;
        } else {
            // For desktop
            return `docs/${lang}.pdf`;
        }
    }

    function updatePDF() {
        const selectedLang = langSelect.value;
        pdfViewer.src = getPdfUrl(selectedLang);
    }
    updatePDF();
    langSelect.addEventListener('change', updatePDF);

    // If desktop resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updatePDF, 250);
    });
});