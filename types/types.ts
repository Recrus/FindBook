//Volumes types
import { ChangeEvent } from "react";

interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  accessViewStatus: string;
  epub: { isAvailable: boolean };
  pdf: {
    isAvailable: boolean;
    acsTokenLink: string;
  };
  quoteSharingAllowed: string;
  webReaderLink: string;
}

interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  buyLink: string;
  listPrice: { amount: number; currencyCode: string };
  offers: [
    {
      finskyOfferType: number;
      giftable: boolean;
      listPrice: { amountInMicros: number; currencyCode: string };
      retailPrice: { amountInMicros: number; currencyCode: string };
    },
  ];
  retailPrice: { amount: number; currencyCode: string };
}

interface VolumeInfo {
  title: string;
  subtitle?: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  allowAnonLogging: boolean;
  canonicalVolumeLink: string;
  categories?: string[];
  contentVersion: string;
  description: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
  industryIdentifiers: [
    {
      type: string;
      identifier: string;
    },
  ];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  previewLink: string;
  printType: string;
  readingModes: { text: boolean; image: boolean };
}

interface SearchInfo {
  textSnippet: string;
}

export interface Volume {
  accessInfo: AccessInfo;
  etag: string;
  id: string;
  kind: string;
  saleInfo: SaleInfo;
  searchInfo: SearchInfo;
  volumeInfo: VolumeInfo;
}
export interface VolumesSliceState {
  volumes: Volume[];
  totalItems: number | null;
  searchKey: string;
  category: string;
  order: string;
  startIndex: number;
  loading: boolean;
  error: string | null;
}

//api.ts types

export interface FetchVolumesParams {
  searchKey: string;
  startIndex: number;
  category: string;
  order: string;
}

//breadcrumbsSlice types

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface BreadcrumbState {
  breadcrumbs: Breadcrumb[];
}

//AxiosError types

export interface ErrorResponse {
  error: {
    message: string;
  };
}

//ErrorView types

export interface ViewErrorProps {
  title: string;
  text?: string;
}

//BookCard types

export interface BookCardProps {
  title: string;
  authors: string[];
  image?: {
    smallThumbnail: string;
    thumbnail: string;
  };
  categories?: string[];
}

//TheAlert types

export interface TheAlertProps {
  message: string | null;
  type?: "success" | "info" | "warning" | "error";
  onClose?: () => void;
}

//TheButton types

export interface TheButtonProps {
  text: string;
  handler: () => void;
}

//CategorySelect types

export type Category =
  | ""
  | "Art"
  | "Biography"
  | "Computers"
  | "History"
  | "Medical"
  | "Poetry";

//OrderSelect types

export type Order = "Relevance" | "Newest";

//TheSelect types

export interface SelectProps {
  selector: (state: { volumes: VolumesSliceState }) => string;
  options: string[];
  label: string;
  handler: (e: ChangeEvent<HTMLSelectElement>) => void;
}
