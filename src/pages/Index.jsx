import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text, Image, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaScrewdriver } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [scrapedData, setScrapedData] = useState(null);

  const handleScrape = async () => {
    try {
      const response = await fetch(`/api/scrape?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      setScrapedData(data);
    } catch (error) {
      console.error("Failed to scrape the URL:", error);
    }
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Data Scraper <FaScrewdriver />
      </Heading>
      <Stack spacing={4}>
        <Input placeholder="Paste URL here" value={url} onChange={(e) => setUrl(e.target.value)} />
        <Button colorScheme="blue" onClick={handleScrape}>
          Scrape Data
        </Button>
      </Stack>

      {scrapedData && (
        <Box mt={8}>
          <Heading as="h2" size="lg" mb={4}>
            {scrapedData.title}
          </Heading>
          <Text mb={4}>{scrapedData.description}</Text>
          <Image src={scrapedData.image} alt="Scraped Image" mb={4} />
          <Heading as="h3" size="md" mb={2}>
            Links:
          </Heading>
          <UnorderedList>
            {scrapedData.links.map((link, index) => (
              <ListItem key={index}>
                <Link href={link.url} isExternal>
                  {link.text}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      )}
    </Container>
  );
};

export default Index;
