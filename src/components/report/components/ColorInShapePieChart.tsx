import { PieValueType } from "@mui/x-charts"
import { useReport } from "components/report/store/useReport"
import {
  CIRCULAR_COLOR,
  CIRCULAR_SYMBOL,
  COLORS,
  SHAPES,
  SQUARE_COLOR,
  SQUARE_SYMBOL,
} from "constants/index"
import TwoLevelPercentsPieChart from "./TwoLevelPercentsPieChart"

const ColorInShapePieChart = () => {
  const report = useReport()

  if (!report.ALL) {
    return null
  }

  const innerData: PieValueType[] = [
    {
      id: "square",
      label: SQUARE_SYMBOL,
      value: report.square.ALL,
      color: SQUARE_COLOR,
    },
    {
      id: "circular",
      label: CIRCULAR_SYMBOL,
      value: report.circular.ALL,
      color: CIRCULAR_COLOR,
    },
  ]

  const outerData: PieValueType[] = SHAPES.reduce((acc, shape) => {
    COLORS.forEach((color) =>
      acc.push({
        id: `${color}-${shape}`,
        label: "",
        value: report[shape][color],
        color,
      }),
    )
    return acc
  }, [] as PieValueType[])

  return <TwoLevelPercentsPieChart innerData={innerData} outerData={outerData} all={report.ALL} />
}

export default ColorInShapePieChart
