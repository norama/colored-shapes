import { AppBar, Box } from "@mui/material"
import { GitHub as GitHubIcon } from "@mui/icons-material"
import Breadcrumbs from "./Breadcrumbs"
import NavigatorMenu from "./NavigatorMenu"
import LinkTab from "components/global/LinkTab"
import { GITHUB_URL } from "constants/index"

const Header = () => (
  <AppBar sx={{ padding: "0.5rem 1.5rem 0.5rem 1rem" }}>
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <NavigatorMenu />
        <Breadcrumbs />
      </Box>
      <LinkTab href={GITHUB_URL}>
        <GitHubIcon />
      </LinkTab>
    </Box>
  </AppBar>
)

export default Header
