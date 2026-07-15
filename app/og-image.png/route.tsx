import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f8fafc',
          color: '#0f172a',
          padding: 72,
          fontFamily: 'Inter, Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            fontSize: 34,
            fontWeight: 800,
            color: '#1e293b',
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: '#4f46e5',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 36,
            }}
          >
            FS
          </div>
          FreeScheduleMaker
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              display: 'flex',
              width: 920,
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: 0,
              fontWeight: 900,
            }}
          >
            Free Online Schedule Maker
          </div>
          <div
            style={{
              display: 'flex',
              width: 860,
              fontSize: 32,
              lineHeight: 1.35,
              color: '#475569',
            }}
          >
            Create weekly schedules, class timetables, staff rotas, and shift plans online. No signup required.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 18,
            fontSize: 24,
            fontWeight: 700,
            color: '#334155',
          }}
        >
          <span>100% Free</span>
          <span style={{ color: '#94a3b8' }}>|</span>
          <span>Printable PNG Export</span>
          <span style={{ color: '#94a3b8' }}>|</span>
          <span>Works in Your Browser</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
