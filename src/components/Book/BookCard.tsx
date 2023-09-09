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
    <>
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
      <div className="mt-4 text-sm flex items-center">
        {categories ? (
          <div className="truncate text-ellipsis max-w-36 bg-blue p-2 rounded">
            {categories[0]}
          </div>
        ) : (
          <div className="max-w-36 bg-grey p-2 rounded">
            This book doesn't have category
          </div>
        )}
      </div>
      <div className="truncate text-ellipsis max-w- 36 my-4 h-14 font-bold">
        {title}
      </div>
      <div className="opacity-60">
        {authors && authors.length > 0 ? (
          <div className="truncate text-ellipsis">
            By {authors[0]}
            {authors.length > 1 && <span> and {authors.length - 1} more</span>}
          </div>
        ) : (
          <div>Author is unknown</div>
        )}
      </div>
    </>
  );
};

export default BookCard;
