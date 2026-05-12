 // Error Alert Component

interface Props {
  error: string | null;
  onClose?: () => void;
}

function ErrorAlert({ error, onClose }: Props) {
  if (!error) return null;

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center justify-between">
      <div>
        <p className="font-bold">Error</p>
        <p className="text-sm">{error}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-red-700 hover:text-red-900 font-bold"
          aria-label="Close error"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default ErrorAlert;
