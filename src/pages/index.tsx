import Head from "next/head";
import {Box} from "@chakra-ui/react";
import React from "react";
import {Converter} from "@/components/Converter/Converter";

export default function Home() {
  return (
    <>
      <Head>
        <title>cakephpizer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box padding={10} width="container.sm">
          <Converter />
        </Box>
      </main>
    </>
  );
}
