import Head from "next/head";
import {Heading, Stack} from "@chakra-ui/react";
import React from "react";
import {ConvertForm} from "@/components/ConvertForm/ConvertForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>cakephpizer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack padding={10} width="container.sm">
          <Heading>cakephpizer</Heading>
          <ConvertForm />
        </Stack>
      </main>
    </>
  );
}
