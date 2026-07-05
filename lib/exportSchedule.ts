import { toPng } from 'html-to-image';

export async function exportScheduleToPNG(elementId: string, fileName: string = 'My_Schedule.png'): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id "${elementId}" not found.`);
  }

  try {
    const dataUrl = await toPng(element, {
      pixelRatio: 2, // Double quality
      backgroundColor: '#ffffff', // Prevent transparency issues
      style: {
        margin: '0',
      },
    });

    const link = document.createElement('a');
    link.download = fileName;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Failed to render PNG schedule:', error);
    throw error;
  }
}
