'use client'

import { useEffect } from 'react'

import EmptyState from '@/app/components/EmptyState'

interface ErrorStateProps {
  error: Error
}

// eslint-disable-next-line no-undef
const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />
}

export default ErrorState
