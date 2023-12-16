"use client"

import { Typography } from "@mui/material"
import { usePathname } from "next/navigation"

const capitalize = (str: string) => (str.length ? str.charAt(0).toUpperCase() + str.slice(1) : "")

const Title = () => {
  const path = usePathname()

  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      {capitalize(path.substring(1))}
    </Typography>
  )
}

export default Title
