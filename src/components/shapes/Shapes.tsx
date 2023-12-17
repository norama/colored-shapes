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

const Shapes = () => {
  const coloredShapes = useStore($coloredShapes)

  return (
    <Box width="16rem">
      <List>
        {coloredShapes.map(({ id, color, shape }) => (
          <ListItem
            key={id}
            secondaryAction={
              <Box display="flex" gap="1rem" marginLeft="1rem">
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => removeColoredShape(id)} edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Box>
            }
          >
            <ListItemButton component="a">
              <ListItemAvatar>
                <Avatar sx={{ width: 56, height: 56, background: color }} variant={shape}>
                  &nbsp;
                </Avatar>
              </ListItemAvatar>
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem
          secondaryAction={
            <Box display="flex" gap="2rem" marginTop="2rem">
              <IconButton
                onClick={() => addColoredShape()}
                edge="end"
                aria-label="add"
                sx={{ left: 8 }}
              >
                <AddIcon color="primary" sx={{ width: 36, height: 36 }} />
              </IconButton>
            </Box>
          }
        ></ListItem>
      </List>
    </Box>
  )
}

export default Shapes
