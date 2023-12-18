import { $coloredShapes } from "@store/shapes"
import { atom, computed } from "nanostores"

export const $selectedId = atom<number | null>(null)

export const $selectedColoredShape = computed(
  [$coloredShapes, $selectedId],
  (coloredShapes, selectedId) =>
    selectedId ? coloredShapes.find((x) => x.id === selectedId) : null,
)

export const setSelectedId = (id: number | null) => $selectedId.set(id)
