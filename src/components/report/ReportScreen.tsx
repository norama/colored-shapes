"use client"

import { Grid } from "@mui/material"
import PageHeader from "components/global/page/PageHeader"
import CountsBarChart from "./components/CountsBarChart"

const ReportScreen = () => {
  return (
    <>
      <PageHeader route="shapes" />
      <Grid container spacing={3} columns={2}>
        <Grid item xs={2} key="bar">
          <CountsBarChart />
        </Grid>
      </Grid>
    </>
  )
}

export default ReportScreen
