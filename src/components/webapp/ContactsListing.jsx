import useFetch from "../../hooks/useFetch";
import ContactCard from "./ContactCard";
import { Grid, Box } from "@chakra-ui/react";

export default function ContactsListing() {
  const { data: contacts, isLoading, error } = useFetch(
    "https://api.jsonbin.io/v3/b/672b50f3acd3cb34a8a3a5e1/latest"
  );

  return (
    <>
    {
        isLoading ? <h1>Loading ....</h1> :
        (
            <Box overflowX="auto" width="100%" maxWidth="100vw" px="4">
                <Grid templateColumns="repeat(10, 1fr)" gap="6" width="max-content">
                    {
                    contacts.map((contact) => (
                        <ContactCard key={contact.id} name={contact.name} phone={contact.phone} />
                    ))
                    }
                </Grid>
            </Box>
        )
    }
    </>
  );
}
