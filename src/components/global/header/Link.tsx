"use client"

import NextLink from "next/link"
import styled from "@emotion/styled"
import { PropsWithChildren } from "react"

const StyledLink = styled(NextLink)`
  text-decoration: none;
  color: inherit;
`

interface Props extends PropsWithChildren {
  href: string
  replace?: boolean
  scroll?: boolean
  prefetch?: boolean
}

const Link = ({ children, ...props }: Props) => <StyledLink {...props}>{children}</StyledLink>

export default Link
