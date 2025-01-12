import { Deal } from "../types/Deal";
import { CategoryColumn } from "./CategoryColumn";

type DealsBoardProps = {
  deals: Deal[];
  netValue: number;
};

export const DealsBoard = ({ deals, netValue }: DealsBoardProps) => {
  const categories = deals.reduce((acc, deal) => {
    if (!acc[deal.status]) {
      acc[deal.status] = {
        title: deal.status,
        totalValue: 0,
        deals: [],
      };
    }
    acc[deal.status].deals.push(deal);
    acc[deal.status].totalValue += deal.value;
    return acc;
  }, {} as Record<string, { title: string; totalValue: number; deals: Deal[] }>);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Deals</h1>
        <hr className="my-4 border-gray-900" />
        <div className="bg-gray-700 p-3 rounded-lg inline-block">
          <span className="text-white">
            Total Value: ${netValue.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Object.entries(categories)
          .sort(([statusA], [statusB]) => statusA.localeCompare(statusB))
          .map(([status, category]) => (
            <CategoryColumn
              key={status}
              title={category.title}
              totalValue={category.totalValue}
              deals={category.deals}
            />
          ))}
      </div>
    </div>
  );
};
