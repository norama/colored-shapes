"use client"

import NextLink from "next/link"
import styled from "@emotion/styled"
import { PropsWithChildren } from "react"

const StyledLink = styled(NextLink)`
  text-decoration: none;
  color: inherit;
`

interface LinkProps extends PropsWithChildren {
  href: string
  replace?: boolean
  scroll?: boolean
  prefetch?: boolean
  target?: string
  rel?: string
}

const Link = ({ children, ...props }: LinkProps) => <StyledLink {...props}>{children}</StyledLink>

export default Link
