import { useEffect, useState } from 'react';

/**
 * Data structure for active users
 */
export interface ActiveUsersData {
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
 * Custom hook for fetching active users data from the API
 */
export function useActiveUsers() {
  const [data, setData] = useState<ActiveUsersData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const response = await fetch('/api/stats/active-users');
        
        if (!response.ok) {
          throw new Error(`Error fetching active users: ${response.status}`);
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