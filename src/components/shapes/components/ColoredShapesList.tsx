import { Box, IconButton, List, ListItem, ListItemButton } from "@mui/material"
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  AddCircle as AddIcon,
  Visibility as ViewIcon,
} from "@mui/icons-material"
import { addColoredShape, removeColoredShape } from "@store/shapes"
import ColoredShape from "./ColoredShape"
import Link from "@components/global/Link"
import { useColoredShapes } from "@store/useShapes"
import { setSelectedId } from "@components/shapes/store/selection"

interface ButtonProps {
  id: number
}

const ViewButton = ({ id }: ButtonProps) => (
  <Link href={`/shapes/${id}`}>
    <IconButton edge="end" aria-label="view">
      <ViewIcon />
    </IconButton>
  </Link>
)

const EditButton = ({ id }: ButtonProps) => (
  <IconButton onClick={() => setSelectedId(id)} edge="end" aria-label="edit">
    <EditIcon />
  </IconButton>
)

const DeleteButton = ({ id }: ButtonProps) => (
  <IconButton onClick={() => removeColoredShape(id)} edge="end" aria-label="delete">
    <DeleteIcon />
  </IconButton>
)

const AddButton = () => (
  <IconButton onClick={() => addColoredShape()} edge="end" aria-label="add" sx={{ left: 8 }}>
    <AddIcon color="primary" sx={{ width: 36, height: 36 }} />
  </IconButton>
)

const ColoredShapesList = () => {
  const coloredShapes = useColoredShapes()

  return (
    <Box width="16rem">
      <List>
        {coloredShapes.map(({ id }) => (
          <ListItem
            key={id}
            secondaryAction={
              <Box display="flex" gap="1rem" position="relative" left={40}>
                <ViewButton id={id} />
                <EditButton id={id} />
                <DeleteButton id={id} />
              </Box>
            }
          >
            <Link href={`/shapes/${id}`}>
              <ListItemButton>
                <ColoredShape id={id} hoveredContent={<ViewIcon />} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}

        <ListItem
          secondaryAction={
            <Box position="relative" left={40} marginTop={6}>
              <AddButton />
            </Box>
          }
        />
      </List>
    </Box>
  )
}

export default ColoredShapesList
