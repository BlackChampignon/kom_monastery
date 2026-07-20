pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang');
    const container = document.getElementById('pdf-render-container');

    let currentPdf = null;

    function renderPDF() {
        const selectedLang = langSelect.value;
        const fileUrl = `docs/${selectedLang}.pdf`;

        container.innerHTML = '';

        pdfjsLib.getDocument(fileUrl).promise.then(pdf => {
            currentPdf = pdf;
            
            // Pages rendering
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                renderPage(pageNum);
            }
        }).catch(error => {
            console.error('Ошибка загрузки PDF: ', error);
        });
    }

    function renderPage(pageNum) {
        currentPdf.getPage(pageNum).then(page => {
            const containerWidth = container.clientWidth > 0 ? container.clientWidth : window.innerWidth;
            // Space for padding and margins, adjust as needed
            const targetWidth = window.innerWidth < 768 ? containerWidth - 20 : Math.min(containerWidth - 60, 900);
            
            const unscaledViewport = page.getViewport({ scale: 1 });
            const scale = targetWidth / unscaledViewport.width;
            const viewport = page.getViewport({ scale: scale });

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            container.appendChild(canvas);

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);
        });
    }


    renderPDF();

    langSelect.addEventListener('change', renderPDF);

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(renderPDF, 300);
    });
});