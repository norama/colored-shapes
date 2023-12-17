import ColoredShape from "@components/shapes/ColoredShape"
import { Edit as EditIcon } from "@mui/icons-material"

interface Props {
  id: string
}

const Page = ({ params }: { params: Props }) => {
  const id = parseInt(params.id)

  return <ColoredShape id={id} hoveredContent={<EditIcon />} size={224} />
}

export default Page
