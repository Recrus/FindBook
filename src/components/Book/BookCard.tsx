import { FC } from "react";
import bookMock from "../../assets/book.svg";

interface BookCardProps {
  title: string;
  authors: string[];
  image?: {
    smallThumbnail: string;
    thumbnail: string;
  };
  categories?: string[];
}

const BookCard: FC<BookCardProps> = ({ title, authors, image, categories }) => {
  return (
    <div className="w-80 p-4 flex flex-col bg-primary rounded shadow-md">
      {image ? (
        <div
          className="bg-contain bg-no-repeat bg-center h-96"
          style={{
            backgroundImage: `url(${image.thumbnail})`,
          }}
        ></div>
      ) : (
        <div className="flex-center">
          <img className="h-96 w-40" src={bookMock} />
        </div>
      )}
      <div className="opacity-40 mt-4">
        {categories ? (
          <div>{categories}</div>
        ) : (
          <div>This book doesn't have category</div>
        )}
      </div>
      <div className="my-4 h-14 font-bold">{title}</div>
      <div className="opacity-60">
        {authors ? (
          authors.map((author) => <div>By {author}</div>)
        ) : (
          <div>Author is unknown</div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
