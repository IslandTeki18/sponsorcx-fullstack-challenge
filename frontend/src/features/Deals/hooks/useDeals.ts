import { useState, useEffect } from "react";
import { getDeals } from "../api/getDeals";
import { Deal } from "../types/Deal";

export const useDeals = () => {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const data = await getDeals();
        const transformedDeals = data.map((deal) => ({
          ...deal,
          startDate: new Date(deal.startDate),
          endDate: new Date(deal.endDate),
        }));
        setDeals(transformedDeals);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch deals")
        );
        console.error("Error fetching deals:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  return { deals, loading, error };
};
