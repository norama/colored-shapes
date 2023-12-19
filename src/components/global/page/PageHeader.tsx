import { Box } from "@mui/material"
import PageLinkButton from "./PageLinkButton"

interface PageHeaderProps {
  route: "shapes" | "report" | ""
}

const PageHeader = ({ route }: PageHeaderProps) => (
  <Box width="100%" display="flex" alignItems="center" justifyContent="center" marginBottom="2rem">
    <PageLinkButton route={route} />
  </Box>
)

export default PageHeader
