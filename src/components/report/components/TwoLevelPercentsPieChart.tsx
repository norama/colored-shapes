import { Box } from "@mui/material"
import { DefaultizedPieValueType, PieValueType } from "@mui/x-charts"
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart"
import ColoredShapeImage from "components/global/page/ColoredShapeImage"
import { CIRCULAR_COLOR, SQUARE_COLOR } from "constants/index"

interface TwoLevelPercentsPieChartProps {
  innerData: PieValueType[]
  outerData: PieValueType[]
  all: number
}

const TwoLevelPercentsPieChart = ({ innerData, outerData, all }: TwoLevelPercentsPieChartProps) => {
  const getArcLabel = (params: DefaultizedPieValueType) => {
    if (params.value === 0) {
      return ""
    }
    const percent = params.value / all
    return `${(percent * 100).toFixed(0)}%`
  }

  return (
    <Box>
      <PieChart
        series={[
          {
            innerRadius: 0,
            outerRadius: 80,
            data: innerData,
            arcLabel: getArcLabel,
          },
          {
            innerRadius: 100,
            outerRadius: 130,
            data: outerData,
            arcLabel: getArcLabel,
          },
        ]}
        width={450}
        height={350}
        slotProps={{
          legend: { hidden: true },
        }}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontSize: 14,
          },
        }}
      />
      <Box display="flex" justifyContent="center" gap={3} marginRight="5.5rem">
        <ColoredShapeImage coloredShape={{ shape: "square", color: SQUARE_COLOR }} size={28} />
        <ColoredShapeImage coloredShape={{ shape: "circular", color: CIRCULAR_COLOR }} size={28} />
      </Box>
    </Box>
  )
}

export default TwoLevelPercentsPieChart
