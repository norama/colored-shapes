import ColoredShapeScreen from "components/shapes/ColoredShapeScreen"

interface Props {
  id: string
}

const Page = ({ params }: { params: Props }) => {
  const id = parseInt(params.id)

  return <ColoredShapeScreen id={id} />
}

export default Page
