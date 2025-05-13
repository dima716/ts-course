type RGB = readonly [number, number, number];

function invertColor([r, g, b]: RGB): RGB {
  return [255 - r, 255 - g, 255 - b];
}

export {};
