import { useMediaQuery } from "react-responsive";

const isMobileOrTablet = () => {
  return useMediaQuery({ query: "(max-width: 1024px)" });
};

export default isMobileOrTablet;
