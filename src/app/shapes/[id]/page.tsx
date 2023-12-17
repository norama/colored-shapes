import ColoredShape from "@components/shapes/ColoredShape"

interface Props {
  id: string
}

const Page = ({ params }: { params: Props }) => {
  const id = parseInt(params.id)

  return <ColoredShape id={id} />
}

export default Page
