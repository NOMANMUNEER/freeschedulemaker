import { toPng } from 'html-to-image';

async function renderScheduleToPNG(elementId: string): Promise<string> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id "${elementId}" not found.`);
  }

  return toPng(element, {
    pixelRatio: 2,
    backgroundColor: '#ffffff',
    style: {
      margin: '0',
    },
  });
}

export async function exportScheduleToPNG(elementId: string, fileName: string = 'My_Schedule.png'): Promise<void> {
  try {
    const dataUrl = await renderScheduleToPNG(elementId);
    const link = document.createElement('a');
    link.download = fileName;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Failed to render PNG schedule:', error);
    throw error;
  }
}

export async function exportScheduleToPDF(elementId: string, title: string = 'My Schedule'): Promise<void> {
  try {
    const dataUrl = await renderScheduleToPNG(elementId);
    const printWindow = window.open('', '_blank', 'noopener,noreferrer,width=1200,height=800');

    if (!printWindow) {
      throw new Error('The print window was blocked by the browser.');
    }

    printWindow.document.write(`
      <!doctype html>
      <html>
        <head>
          <title>${title}</title>
          <style>
            * { box-sizing: border-box; }
            body {
              margin: 0;
              padding: 24px;
              font-family: Arial, Helvetica, sans-serif;
              background: #ffffff;
              color: #0f172a;
            }
            .page {
              width: 100%;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              gap: 16px;
              align-items: center;
              justify-content: flex-start;
            }
            h1 {
              width: 100%;
              max-width: 1100px;
              margin: 0;
              font-size: 18px;
              line-height: 1.3;
            }
            img {
              width: 100%;
              max-width: 1100px;
              height: auto;
              border: 1px solid #e2e8f0;
            }
            .hint {
              width: 100%;
              max-width: 1100px;
              margin: 0;
              color: #64748b;
              font-size: 12px;
            }
            @page {
              size: landscape;
              margin: 12mm;
            }
            @media print {
              body { padding: 0; }
              .hint { display: none; }
              img { border: 0; max-width: 100%; }
            }
          </style>
        </head>
        <body>
          <main class="page">
            <h1>${title}</h1>
            <p class="hint">Choose "Save as PDF" in the print dialog to download this schedule as a PDF.</p>
            <img src="${dataUrl}" alt="${title}" />
          </main>
          <script>
            window.addEventListener('load', () => {
              window.focus();
              window.print();
            });
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  } catch (error) {
    console.error('Failed to render PDF schedule:', error);
    throw error;
  }
}
