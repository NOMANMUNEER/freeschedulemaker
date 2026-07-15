declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      actionOrId: string | Date,
      params?: Record<string, string | number | boolean | undefined>
    ) => void;
  }
}

export function logEvent(action: string, category: string, label?: string, value?: number): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event] Action: ${action} | Category: ${category} | Label: ${label} | Value: ${value}`);
  }
}

export function logPageView(url: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-3S809LVBBB', {
      page_path: url,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics PageView] URL: ${url}`);
  }
}
