declare module "image-filter-colorize" {
  export default function (
    data: ImageData,
    options: {
      color: string;
      level: number;
    },
    nWorkers: number,
  ): Promise<ImageData>;
}

declare module "image-filter-threshold" {
  export default function (
    data: ImageData,
    options: {
      threshold: number;
    },
    nWorkers: number,
  ): Promise<ImageData>;
}
