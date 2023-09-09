//Volumes types
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
