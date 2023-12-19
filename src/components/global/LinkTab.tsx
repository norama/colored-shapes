import { PropsWithChildren } from "react"
import Link from "./Link"

interface LinkTabProps extends PropsWithChildren {
  href: string
}

const LinkTab = ({ href, children }: LinkTabProps) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
)

export default LinkTab
