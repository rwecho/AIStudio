export const getPrimaryColor = (image: string) => {
  const context = document.createElement("canvas").getContext("2d")!;
  const src = image;
  const img = new Image();
  img.setAttribute("crossOrigin", "");
  img.src = src;
  context.imageSmoothingEnabled = true;
  context.drawImage(img, 0, 0, 1, 1);
  return context.getImageData(0, 0, 1, 1).data.slice(0, 3);
};
