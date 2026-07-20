document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang');

    function displayPDF() {
        const selectedLang = langSelect.value;
        const fileUrl = `docs/${selectedLang}.pdf`;

        const isMobile = window.innerWidth <= 1024 || ('ontouchstart' in window);
        // Conf for mobile
        const options = isMobile ? {
            // Mobile parameters: Hide all toolbars, fit to horizontal width
            pdfOpenParams: { 
                toolbar: 0, 
                navpanes: 0, 
                statusbar: 0, 
                view: 'FitH' 
            }
        } : {
            // Desktop params
            pdfOpenParams: { 
                toolbar: 1, 
                navpanes: 0 
            }
        };
        // Dynamic embedding
        PDFObject.embed(fileUrl, "#pdf-container", options);
    }


    displayPDF();

    langSelect.addEventListener('change', displayPDF);

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(displayPDF, 250);
    });
});