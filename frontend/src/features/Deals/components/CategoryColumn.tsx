import { Deal } from "../types/Deal";
import { DealCard } from "./DealCard";

type CategoryColumnProps = {
  title: string;
  totalValue: number;
  deals: Deal[];
};

export const CategoryColumn = ({
  title,
  totalValue,
  deals,
}: CategoryColumnProps) => (
  <div className="flex-1 bg-gray-800 rounded-lg p-4 shadow-lg">
    <div className="text-white mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-lg">{title}</h3>
        <span className="text-sm px-2 py-1 bg-gray-700 rounded">
          {deals.length} deals
        </span>
      </div>
      <div className="text-sm text-gray-300">
        ${totalValue.toLocaleString()}
      </div>
    </div>
    <div className="space-y-2 max-h-96 overflow-y-auto">
      {deals.map((deal) => (
        <DealCard
          key={deal._id}
          account={deal.account.name}
          value={deal.value}
          status={deal.status}
        />
      ))}
    </div>
  </div>
);
