import { BarChart } from "@mui/x-charts/BarChart"
import { useIsEmpty, useReport } from "components/report/store/useReport"
import { COLORS } from "constants/index"

const SQUARE = "\u25A2"
const CIRCULAR = "\u2D54"

const CountsBarChart = () => {
  const report = useReport()
  const isEmpty = useIsEmpty()

  if (isEmpty) {
    return null
  }

  return (
    <BarChart
      xAxis={[
        {
          axisId: "shape",
          scaleType: "band",
          data: [SQUARE, CIRCULAR],
          tickLabelStyle: { fontSize: "2rem", opacity: 0.8 },
        },
      ]}
      yAxis={[
        {
          axisId: "count",
          tickMinStep: 1,
        },
      ]}
      series={COLORS.map((color) => ({
        data: [report.square[color], report.circular[color]],
      }))}
      colors={COLORS}
      width={600}
      height={300}
    />
  )
}

export default CountsBarChart