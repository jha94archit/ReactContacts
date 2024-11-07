import { Card } from "@chakra-ui/react"
import { Button } from "../ui/button"

export default function ContactCard(props) {
  return (
    <Card.Root width="320px">
      <Card.Body gap="2">
        <Card.Title mt="2">{props.name}</Card.Title>
        <Card.Description>
          {props.phone}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View</Button>
      </Card.Footer>
    </Card.Root>
  )
}
