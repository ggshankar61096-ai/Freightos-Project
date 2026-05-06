/**
 * Empty State Component
 * Reusable component for displaying empty state messages
 */
interface Props {
  message?: string;
}

function EmptyState({
  message = "No items found. Try adjusting your filters.",
}: Props) {
  return (
    <div className="text-center py-12">
      <div className="mb-4 text-4xl">📭</div>
      <p className="text-gray-400 text-lg">{message}</p>
    </div>
  );
}

export default EmptyState;
