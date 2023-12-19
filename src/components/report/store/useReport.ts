import { useStore } from "@nanostores/react"
import { $report } from "./report"

export const useReport = () => useStore($report)
