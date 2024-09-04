export const responsive = {
  mobile: {
    breakpoint: {
      max: 768,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 35,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 768,
    },
    items: 2,
    partialVisibilityGutter: 40,
  },
  laptop: {
    breakpoint: {
      max: 1440,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 0,
  },
  desktop: {
    breakpoint: {
      max: Infinity,
      min: 1440,
    },
    items: 4,
    partialVisibilityGutter: -12,
  },
};
