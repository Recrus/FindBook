const Filters = () => {
  return (
    <div>
      <div className="flex-center p-4">
        <input
          type="text"
          placeholder="Search"
          className="placeholder:text-neutral placeholder:opacity-60 placeholder:pl-2 p-2 rounded shadow-md"
        />
      </div>
      <div className="text-center">Filters</div>
    </div>
  );
};

export default Filters;
