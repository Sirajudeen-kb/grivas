interface Variants {
  title: string;
  paragraphs: string[];
  heading: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface Product {
  id: number;
  name: string;
  img: string;
  description: string;
  primaryFeatures?: {
    title: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  primarySpecifications?: {
    title: string;
    specs: {
      label: string;
      value: string;
    }[];
  };
  secondaryFeatures?: {
    title: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  secondarySpecifications?: {
    title: string;
    specs: {
      label: string;
      value: string;
    }[];
  };
  primaryDescription?: {
    title: string;
    paragraphs: string[];
  };
  secondaryDescription?: {
    title: string;
    paragraphs: string[];
  };
  variants?: Variants[];
}
