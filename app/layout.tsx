import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cancellation Compliance Checker — Audit SaaS Flows for FTC & State Law',
  description: 'Audit your SaaS cancellation flow against FTC guidelines and state laws. Get compliance scores and actionable fixes instantly.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1adeaeb8-c95d-44be-b5cf-9bdb11d70aa1"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
