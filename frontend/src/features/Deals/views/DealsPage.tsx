import { useDeals } from "../hooks/useDeals";
import { DealsBoard } from "../components/DealsBoard";
import { Spinner } from "../../../components";

export const DealsPage: React.FC = () => {
  const { deals, loading, error } = useDeals();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <Spinner size="lg" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-red-500 bg-red-100 p-4 rounded-lg shadow">
          Error loading deals: {error.message}
        </div>
      </div>
    );
  }

  if (!deals || deals.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-white bg-gray-800 p-4 rounded-lg shadow">
          No deals found
        </div>
      </div>
    );
  }

  const netValue = deals.reduce((sum, deal) => sum + deal.value, 0);

  return (
    <div className="min-h-screen bg-gray-200">
      <DealsBoard deals={deals} netValue={netValue} />
    </div>
  );
};
