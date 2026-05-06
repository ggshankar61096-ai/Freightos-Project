/**
 * Loader Component
 * Displays skeleton loading cards while data is being fetched
 */
function Loader() {
  const skeletonCards = Array.from({ length: 4 });

  return (
    <div className="grid">
      {skeletonCards.map((_, index) => (
        <div
          key={index}
          className="flex bg-dark-700 rounded-lg overflow-hidden min-h-[180px] animate-pulse shadow-lg"
        >
          {/* Skeleton Image */}
          <div className="w-[180px] h-[180px] bg-dark-600 flex-shrink-0" />

          {/* Skeleton Content */}
          <div className="flex-1 p-4 flex flex-col justify-center space-y-3">
            <div className="bg-dark-600 rounded h-6 w-2/3" />
            <div className="bg-dark-600 rounded h-4 w-1/3" />
            <div className="bg-dark-600 rounded h-4 w-full" />
            <div className="bg-dark-600 rounded h-4 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Loader;