"use client"

import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material"
import { Delete as DeleteIcon, Edit as EditIcon, AddCircle as AddIcon } from "@mui/icons-material"
import { useStore } from "@nanostores/react"
import { $coloredShapes, addColoredShape, removeColoredShape } from "@store/shapes"
import ColoredShape from "./ColoredShape"

const EditButton = () => (
  <IconButton edge="end" aria-label="edit">
    <EditIcon />
  </IconButton>
)

interface DeleteButtonProps {
  id: number
}

const DeleteButton = ({ id }: DeleteButtonProps) => (
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
  const coloredShapes = useStore($coloredShapes)

  return (
    <Box width="16rem">
      <List>
        {coloredShapes.map(({ id, color, shape }) => (
          <ListItem
            key={id}
            secondaryAction={
              <Box display="flex" gap="1rem" marginLeft="1rem">
                <EditButton />
                <DeleteButton id={id} />
              </Box>
            }
          >
            <ListItemButton component="a">
              <ListItemAvatar>
                <ColoredShape coloredShape={{ id, color, shape }} />
              </ListItemAvatar>
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem
          secondaryAction={
            <Box display="flex" gap="2rem" marginTop="2rem">
              <AddButton />
            </Box>
          }
        />
      </List>
    </Box>
  )
}

export default ColoredShapesList
