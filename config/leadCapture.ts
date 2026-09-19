export const LEAD_CAPTURE_CONFIG = {
  storageKey: 'fsm_tool_lead_capture_v1',
  trigger: 'successful_export',
  source: 'schedule_tool_popup',
} as const;

export const LEAD_INTENTS = [
  'For my school/university',
  'For my business/team',
  'For personal use',
  'I need something custom',
  'I want an automated/AI solution',
  'I just have a question',
] as const;
