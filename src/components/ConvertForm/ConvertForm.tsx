import {
  Button,
  Checkbox,
  CheckboxGroup,
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
import React from "react";

export const ConvertForm: React.FC = () => {
  return (
    <Stack>
      <FormControl>
        <FormLabel>画像</FormLabel>
        <Input type="file" />
      </FormControl>

      <FormControl>
        <FormLabel>タイプ</FormLabel>
        <RadioGroup>
          <HStack>
            <Radio defaultChecked value="cakephpize">
              cakephpize
            </Radio>
            <Radio value="soudaize">soudaize</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>閾値(50〜80)</FormLabel>
        <NumberInput defaultValue={50}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <Button>変換</Button>
    </Stack>
  );
};
