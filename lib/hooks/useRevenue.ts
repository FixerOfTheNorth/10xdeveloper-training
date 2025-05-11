import { useEffect, useState } from 'react';

/**
 * Data structure for revenue data
 */
export interface RevenueData {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Title of the data
   */
  title: string;

  /**
   * Value to display
   */
  value: string;

  /**
   * Icon name to display (from lucide-react)
   */
  iconName: string;
}

/**
 * Custom hook for fetching revenue data from the API
 */
export function useRevenue() {
  const [data, setData] = useState<RevenueData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const response = await fetch('/api/stats/revenue');
        
        if (!response.ok) {
          throw new Error(`Error fetching revenue data: ${response.status}`);
        }
        
        const responseData = await response.json();
        setData(responseData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
} 