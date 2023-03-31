import Head from "next/head";
import {Stack, Text} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack>
          <Text>Hello, World</Text>
        </Stack>
      </main>
    </>
  );
}
