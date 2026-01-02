import { Suspense } from 'react'

import { Redirector } from '@/components/redirector'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Redirector />
    </Suspense>
  )
}