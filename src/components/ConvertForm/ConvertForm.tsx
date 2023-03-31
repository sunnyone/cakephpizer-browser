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

export interface ConvertFormValues {
  files: File[];
  type: "cakephpize" | "soudaize";
  threshold: number;
}

export const ConvertForm: React.FC = () => {
  const {
    register,
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<ConvertFormValues>();

  const onSubmit = useCallback((values: ConvertFormValues) => {
    console.log(values);
  }, []);

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

        <FormControl isInvalid={!!errors.type}>
          <FormLabel>閾値(50〜80)</FormLabel>
          <Controller
            name="threshold"
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <NumberInput defaultValue={50}>
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
