import { useState, useEffect } from 'react';
import axios from 'axios';
import Types from '../types/Types';
import config from '../config';

interface UseGetTypesResult {
  types: Types | null;
  isLoading: boolean;
  error: Error | null;
}

export const useGetTypes = (): UseGetTypesResult => {
  const [types, setTypes] = useState<Types | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTypes = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(config.typesEndpoint);
        setTypes(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch types'));
        setTypes(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTypes();
  }, []);

  return { types, isLoading, error };
}; 