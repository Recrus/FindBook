const BookCardSkeleton = () => {
  return (
    <div className="w-72 xl:w-80 p-4 flex flex-col bg-primary rounded shadow-md">
      <div className="h-96 flex-center items-center">
        <div className="h-80 w-60 animate-pulse bg-accent"></div>
      </div>
      <div className="h-6 opacity-40 mt-4 bg-accent animate-pulse"></div>
      <div className="my-4 h-14 opacity-40 font-bold bg-accent animate-pulse"></div>
      <div className="h-6 opacity-40 bg-accent animate-pulse"></div>
    </div>
  );
};

export default BookCardSkeleton;
