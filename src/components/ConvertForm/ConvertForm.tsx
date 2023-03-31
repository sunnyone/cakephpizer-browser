import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React, {useCallback} from "react";
import {Controller, useForm} from "react-hook-form";
import {convertImage, ConvertType} from "@/components/ConvertForm/convertImage";

export interface ConvertFormProps {
  onConvert?: (imageData: ImageData) => void;
}

export interface ConvertFormValues {
  files: File[];
  type: ConvertType;
  threshold: number;
}

export const ConvertForm: React.FC<ConvertFormProps> = ({onConvert}) => {
  const {
    register,
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<ConvertFormValues>({
    defaultValues: {
      files: [],
      type: "cakephpize",
      threshold: 50,
    },
  });

  const onSubmit = useCallback(
    async (values: ConvertFormValues) => {
      const resultImage = await convertImage(values.files[0], values.type, values.threshold);
      onConvert?.(resultImage);
    },
    [onConvert],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <FormControl isInvalid={!!errors.files}>
          <FormLabel>画像</FormLabel>
          <Input type="file" {...register("files", {required: true})} />
        </FormControl>

        <FormControl isInvalid={!!errors.type}>
          <FormLabel>タイプ</FormLabel>
          <Controller
            name="type"
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <RadioGroup value={value} onChange={onChange} onBlur={onBlur}>
                <HStack>
                  <Radio defaultChecked value="cakephpize">
                    cakephpize
                  </Radio>
                  <Radio value="soudaize">soudaize</Radio>
                </HStack>
              </RadioGroup>
            )}
          />
        </FormControl>

        <FormControl isInvalid={!!errors.threshold}>
          <FormLabel>閾値(目安50〜80)</FormLabel>
          <Controller
            name="threshold"
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <NumberInput value={value} onChange={onChange}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            )}
          />
        </FormControl>

        <Button type="submit">変換</Button>
      </Stack>
    </form>
  );
};
