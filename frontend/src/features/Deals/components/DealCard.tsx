import { DealStatus } from "../types/Deal";

const statusColors: Record<DealStatus, { border: string; bg: string }> = {
  "Build Proposal": {
    border: "border-blue-500",
    bg: "bg-blue-50",
  },
  "Pitch Proposal": {
    border: "border-purple-500",
    bg: "bg-purple-50",
  },
  Negotiation: {
    border: "border-amber-500",
    bg: "bg-amber-50",
  },
  Active: {
    border: "border-green-500",
    bg: "bg-green-50",
  },
  Pending: {
    border: "border-yellow-500",
    bg: "bg-yellow-50",
  },
  Completed: {
    border: "border-teal-500",
    bg: "bg-teal-50",
  },
  Cancelled: {
    border: "border-red-500",
    bg: "bg-red-50",
  },
};

type DealCardProps = {
  account: string;
  value: number;
  status: DealStatus;
};

export const DealCard = ({ account, value, status }: DealCardProps) => {
  const colors = statusColors[status];

  return (
    <div
      className={`flex items-center justify-between p-2 border-l-4 ${colors.border} ${colors.bg} rounded-r mb-2 transition-colors duration-200`}
    >
      <div className="flex flex-col">
        <span className="text-gray-800 font-medium">{account}</span>
        <span className="text-xs text-gray-500">{status}</span>
      </div>
      <span className="text-gray-800 font-medium">
        ${value.toLocaleString()}
      </span>
    </div>
  );
};
