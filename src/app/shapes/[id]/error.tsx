"use client" // Error components must be Client Components

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2 style={{ color: "red" }}>Something went wrong!</h2>
      <h3>{error.message}</h3>
    </div>
  )
}
