import {Box, Heading, Stack} from "@chakra-ui/react";
import {ConvertForm} from "@/components/ConvertForm/ConvertForm";
import React, {useCallback, useRef} from "react";

export const Converter: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  const onConvert = useCallback((imageData: ImageData) => {
    const imgEl = imgRef.current;
    if (!imgEl) {
      return;
    }

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    context.putImageData(imageData, 0, 0);

    imgEl.src = canvas.toDataURL();
  }, []);

  return (
    <Stack>
      <Heading>cakephpizer</Heading>
      <ConvertForm onConvert={onConvert} />

      <Box>
        <img ref={imgRef} />
      </Box>
    </Stack>
  );
};
