import { Box, Grid } from "@mui/material"
import CountsBarChart from "./CountsBarChart"

const ChartsBoard = () => (
  <Grid container spacing={3} columns={2}>
    <Grid item xs={2} key="bar">
      <Box display="flex" justifyContent="center">
        <CountsBarChart />
      </Box>
    </Grid>
  </Grid>
)

export default ChartsBoard
