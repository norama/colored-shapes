import { AppBar, Box, Toolbar } from "@mui/material"
import Title from "./Title"
import Navigator from "./Navigator"

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Navigator />
          <Title />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
