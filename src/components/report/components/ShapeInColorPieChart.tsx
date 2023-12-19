import { PieValueType } from "@mui/x-charts"
import { useReport } from "components/report/store/useReport"
import {
  CIRCULAR_COLOR,
  CIRCULAR_SYMBOL,
  COLORS,
  SQUARE_COLOR,
  SQUARE_SYMBOL,
} from "constants/index"
import TwoLevelPercentsPieChart from "./TwoLevelPercentsPieChart"

const ShapeInColorPieChart = () => {
  const report = useReport()

  if (!report.ALL) {
    return null
  }

  const innerData: PieValueType[] = COLORS.map((color) => ({
    id: color,
    label: "",
    value: report[color].ALL,
    color,
  }))

  const outerData: PieValueType[] = COLORS.reduce((acc, color) => {
    acc.push({
      id: `${color}-square`,
      label: SQUARE_SYMBOL,
      value: report[color].square,
      color: SQUARE_COLOR,
    })
    acc.push({
      id: `${color}-circular`,
      label: CIRCULAR_SYMBOL,
      value: report[color].circular,
      color: CIRCULAR_COLOR,
    })
    return acc
  }, [] as PieValueType[])

  return <TwoLevelPercentsPieChart innerData={innerData} outerData={outerData} all={report.ALL} />
}

export default ShapeInColorPieChart
