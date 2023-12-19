import { BarChart } from "@mui/x-charts/BarChart"
import { useReport } from "components/report/store/useReport"
import { CIRCULAR_SYMBOL, COLORS, SQUARE_SYMBOL } from "constants/index"

const CountsBarChart = () => {
  const report = useReport()

  if (!report.ALL) {
    return null
  }

  return (
    <BarChart
      xAxis={[
        {
          axisId: "shape",
          scaleType: "band",
          data: [SQUARE_SYMBOL, CIRCULAR_SYMBOL],
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
      width={400}
      height={300}
    />
  )
}

export default CountsBarChart
