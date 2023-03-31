import colorize from "image-filter-colorize";
import thresholdFn from "image-filter-threshold";

export type ConvertType = "cakephpize" | "soudaize";

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve) => {
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      resolve(fileReader.result as string);
    });
    fileReader.readAsDataURL(file);
  });
}

export async function convertImage(file: File, type: ConvertType, threshold: number) {
  const dataUrl = await fileToDataUrl(file);

  const imgEl = document.createElement("img");
  imgEl.src = dataUrl;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  context.drawImage(imgEl, 0, 0);
  const imageData = context.getImageData(0, 0, imgEl.width, imgEl.height);

  const thresolded = await thresholdFn(imageData, {threshold}, 1);
  const result = await colorize(thresolded, {color: "#0000ff", level: threshold}, 1);

  return result;
}
