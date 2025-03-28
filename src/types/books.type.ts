export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors?: string[];
    canonicalVolumeLink: string;
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
    pageCount: number;
    printType: string;
    categories: string[];
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
    };
    previewLink?: string;
    infoLink: string;
  };
  accessInfo: {
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    webReaderLink: string;
    accessViewStatus: string;
  };
}
