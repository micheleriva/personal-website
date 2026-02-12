import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get('title') || 'Untitled'
    const date = searchParams.get('date') || ''
    const abstract = searchParams.get('abstract') || ''
    const keywords = searchParams.get('keywords') || ''
    const hasAuthorship = searchParams.get('authorship') === 'true'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            padding: '60px 80px',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '40px' }}>
            <div style={{
              display: 'flex',
              fontSize: '28px',
              fontWeight: 700,
              color: '#0a0a0a',
              marginBottom: '8px',
            }}>
              Michele Riva
            </div>
            <div style={{
              display: 'flex',
              fontSize: '16px',
              color: '#737373',
              fontWeight: 400,
            }}>
              Philosophy · Research · Graph Algorithms
            </div>
          </div>

          {/* Title */}
          <div style={{
            fontSize: '56px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#0a0a0a',
            marginBottom: '24px',
            display: 'flex',
            flexWrap: 'wrap',
          }}>
            {title}
          </div>

          {/* Metadata */}
          <div style={{
            display: 'flex',
            fontSize: '18px',
            fontWeight: 400,
            color: '#737373',
            marginBottom: '32px',
          }}>
            Riva, M. ({date}).
          </div>

          {/* Abstract */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fafafa',
            border: '1px solid #e5e5e5',
            borderRadius: '4px',
            padding: '24px',
            marginBottom: '20px',
            flex: 1,
          }}>
            <div style={{
              display: 'flex',
              fontSize: '14px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#737373',
              marginBottom: '12px',
            }}>
              Abstract
            </div>
            <div style={{
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#404040',
              display: 'flex',
            }}>
              {abstract.length > 280 ? abstract.slice(0, 280) + '...' : abstract}
            </div>
            {keywords && (
              <div style={{
                fontSize: '13px',
                fontWeight: 400,
                color: '#737373',
                marginTop: '16px',
                display: 'flex',
              }}>
                Keywords: {keywords}
              </div>
            )}
          </div>

          {/* Authorship Badge */}
          {hasAuthorship && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(21, 128, 61, 0.05)',
              border: '1px solid rgba(21, 128, 61, 0.3)',
              borderRadius: '4px',
              padding: '16px 24px',
            }}>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#15803d',
                display: 'flex',
              }}>
                AUTHENTICALLY HUMAN WRITTEN
              </div>
            </div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(e.message)
    return new Response('Failed to generate OG image', { status: 500 })
  }
}
