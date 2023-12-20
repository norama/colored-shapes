import { createNanoEvents } from "nanoevents"
import { TColoredShapeTemplate } from "types"

interface Events {
  add: () => void
  remove: (id: number) => void
  update: (id: number, coloredShape: TColoredShapeTemplate) => void
}

export const emitter = createNanoEvents<Events>()

export const startTransmitter = () => {
  console.log("START TRANSMITTER")

  import(`store/transmitters/${process.env.NEXT_PUBLIC_STORE}Transmitter`).then((module) =>
    module.startTransmitter(),
  )
}

export const stopTransmitter = () => {
  console.log("STOP TRANSMITTER")

  emitter.events = {}
}

export const emitAdd = () => {
  emitter.emit("add")
}

export const emitRemove = (id: number) => {
  emitter.emit("remove", id)
}

export const emitUpdate = (id: number, coloredShape: TColoredShapeTemplate) => {
  emitter.emit("update", id, coloredShape)
}
