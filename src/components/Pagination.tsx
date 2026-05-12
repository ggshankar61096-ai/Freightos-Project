interface Info {
  next: string | null;
  prev: string | null;
  pages?: number;
}

interface Props {
  info: Info;
  page: number;
  setPage: (page: number) => void;
}

// Pagination Component

function Pagination({ info, page, setPage }: Props) {
  const handlePrevious = () => {
    if (info.prev) setPage(page - 1);
  };

  const handleNext = () => {
    if (info.next) setPage(page + 1);
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePrevious}
        disabled={!info.prev}
        aria-label="Previous page"
      >
        ← Prev
      </button>

      <span className="page-number">
        Page {page}
      </span>

      <button
        onClick={handleNext}
        disabled={!info.next}
        aria-label="Next page"
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;