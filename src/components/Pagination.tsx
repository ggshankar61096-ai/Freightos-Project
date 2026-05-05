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

function Pagination({ info, page, setPage }: Props) {
  return (
    <div className="pagination">
      <button
        disabled={!info.prev}
        onClick={() => setPage(page - 1)}
      >
        ← Prev
      </button>

      <span className="page-number">Page {page}</span>

      <button
        disabled={!info.next}
        onClick={() => setPage(page + 1)}
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;