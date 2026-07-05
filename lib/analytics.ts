export function logEvent(action: string, category: string, label?: string, value?: number): void {
  // Safe mock logging interface
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event] Action: ${action} | Category: ${category} | Label: ${label} | Value: ${value}`);
  }
}

export function logPageView(url: string): void {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics PageView] URL: ${url}`);
  }
}
