declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      actionOrId: string | Date,
      params?: Record<string, string | number | boolean | undefined>
    ) => void;
  }
}

type AnalyticsParameters = Record<string, string | number | boolean | undefined>;

export type FunnelContext = {
  builderVariant?: string;
  pagePath?: string;
  intentSegment?: string;
  presetId?: string;
  templateId?: string;
  exportFormat?: 'png' | 'pdf';
};

function currentPagePath(): string | undefined {
  return typeof window === 'undefined' ? undefined : window.location.pathname;
}

export function eventCountBucket(eventCount: number): '1' | '2_3' | '4_5' | '6_plus' | '0' {
  if (eventCount <= 0) return '0';
  if (eventCount === 1) return '1';
  if (eventCount <= 3) return '2_3';
  if (eventCount <= 5) return '4_5';
  return '6_plus';
}

export function logEvent(action: string, category: string, label?: string, value?: number, parameters?: AnalyticsParameters): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
      ...parameters,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event] Action: ${action} | Category: ${category} | Label: ${label} | Value: ${value}`);
  }
}

/** Sends only pre-defined, privacy-safe funnel metadata to GA4. */
export function trackFunnelEvent(action: string, context: FunnelContext = {}, parameters: AnalyticsParameters = {}): void {
  logEvent(action, 'funnel', undefined, undefined, {
    page_path: context.pagePath || currentPagePath(),
    builder_variant: context.builderVariant,
    intent_segment: context.intentSegment,
    preset_id: context.presetId,
    template_id: context.templateId,
    export_format: context.exportFormat,
    ...parameters,
  });
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
