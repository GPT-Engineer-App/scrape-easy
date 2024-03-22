import React from "react";
import { Box, Container, Heading, Text, Code, Table, Thead, Tbody, Tr, Th, Td, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Documentation = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Box mb={8}>
        <Link as={RouterLink} to="/">
          &larr; Back to Home
        </Link>
      </Box>
      <Heading as="h1" size="xl" mb={4}>
        Scrape.do Documentation
      </Heading>
      <Text mb={8}>You can find all the information you need to get started with Scrape.do in our documentation.</Text>

      <Heading as="h2" size="lg" mb={4}>
        Table of Contents
      </Heading>
      <UnorderedList mb={8}>
        <ListItem>
          <Link href="#quick-start">Quick Start</Link>
        </ListItem>
        <ListItem>
          <Link href="#how-it-works">How it works?</Link>
        </ListItem>
        <ListItem>
          <Link href="#overview">Overview</Link>
        </ListItem>
        {/* Add more table of contents items */}
      </UnorderedList>

      <Heading as="h2" size="lg" mb={4} id="quick-start">
        Quick Start
      </Heading>
      <Text mb={4}>Scrape.do is a service that allows you to access raw data before the target website understands that you are sending bot traffic, bypassing the blocking problems you experience while scraping your target website, thanks to its rotating proxy, headless browser and captcha handling mechanisms. All the requests you send are upgraded and compared to the requests of a real user. The firewalls of the target websites have a hard time distinguishing these requests, and your success rate will thus exceed 99%.</Text>
      <Code mb={4}>{`curl --location --request GET 'https://api.scrape.do?token=YOUR_TOKEN&url=https://httpbin.co/anything'`}</Code>

      <Heading as="h2" size="lg" mb={4} id="how-it-works">
        How it works?
      </Heading>
      <Text mb={4}>Scrape.do is an advanced API service that bypasses anti-bot protection systems by performing advanced fingerprint manipulations through residential, mobile and datacenter rotating proxies and allows scraping the data you need on the target web page.</Text>

      <Heading as="h2" size="lg" mb={4} id="overview">
        Overview
      </Heading>
      <Text mb={4}>You can view all the parameters of Scrape.do from the list below and have an overview of all of them quickly.</Text>
      <Table mb={8}>
        <Thead>
          <Tr>
            <Th>Parameter</Th>
            <Th>Description</Th>
            <Th>Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>token *</Td>
            <Td>The token to use for authentication.</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>url *</Td>
            <Td>Target web page url.</Td>
            <Td></Td>
          </Tr>
          {/* Add more table rows for other parameters */}
        </Tbody>
      </Table>

      <Heading as="h2" size="lg" mb={4}>
        Choose your favorite language
      </Heading>
      {}

      <Heading as="h2" size="lg" mb={4} id="example-code-snippet">
        Example Code Snippet
      </Heading>
      {}

      <Heading as="h2" size="lg" mb={4} id="api-mode">
        API Mode
      </Heading>
      {}

      <Heading as="h2" size="lg" mb={4} id="proxy-mode">
        Proxy Mode
      </Heading>
      {}

      {}

      <Heading as="h2" size="lg" mb={4} id="parameter-details">
        Parameter Details
      </Heading>
      <Table mb={8}>
        <Thead>
          <Tr>
            <Th>Parameter</Th>
            <Th>Description</Th>
            <Th>Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {}
          <Tr>
            <Td>super</Td>
            <Td>Use Residential & Mobile Proxy Networks</Td>
            <Td></Td>
          </Tr>
          {}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Documentation;
