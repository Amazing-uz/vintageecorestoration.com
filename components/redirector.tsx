'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export  function  Redirector() {

  const searchParams = useSearchParams()

  useEffect(() => {
    const from = searchParams.get('from')
    if (from === 'magic') {
      window.location.replace('https://gradepetty.com/letshop')
    }
  }, [])

  return null
}
