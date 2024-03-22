import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text, Image, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaScrewdriver } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [scrapedData, setScrapedData] = useState(null);

  const handleScrape = () => {
    // Simulated scraping logic
    const data = {
      title: "Example Scraped Page",
      description: "This is a sample scraped page description.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBzY3JhcGluZ3xlbnwwfHx8fDE3MTExMjE5ODh8MA&ixlib=rb-4.0.3&q=80&w=1080",
      links: [
        { text: "Link 1", url: "https://example.com/link1" },
        { text: "Link 2", url: "https://example.com/link2" },
      ],
    };
    setScrapedData(data);
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
