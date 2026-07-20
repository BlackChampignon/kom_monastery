document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang');
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfEmbed = document.getElementById('pdf-embed');

    function updatePDF() {
        const selectedLang = langSelect.value;
        // Cache-busting timestamp to prevent the phone from holding onto old versions
        const version = new Date().getTime();
        const fileUrl = `docs/${selectedLang}.pdf?v=${version}#toolbar=0&navpanes=0&view=FitH`;

        // Update both container properties for comprehensive cross-browser matching
        pdfViewer.data = fileUrl;
        pdfEmbed.src = fileUrl;
    }

    // Run immediately on page load
    updatePDF();

    // Run whenever the dropdown selector updates
    langSelect.addEventListener('change', updatePDF);
});