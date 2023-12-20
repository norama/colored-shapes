"use client"

import { PropsWithChildren, useEffect } from "react"
import { startTransmitter, stopTransmitter } from "transmitter"

const Initializer = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    startTransmitter()

    return () => stopTransmitter()
  }, [])

  return <>{children}</>
}

export default Initializer
