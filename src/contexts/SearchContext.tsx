
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface SearchFilters {
  location: string;
  language: string;
  category: string;
  followersRange: string;
  engagementRate: string;
  contentType: string;
}

export interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
  isSearchActive: boolean;
  setIsSearchActive: (active: boolean) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    language: '',
    category: '',
    followersRange: '',
    engagementRate: '',
    contentType: ''
  });

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      filters,
      setFilters,
      isSearchActive,
      setIsSearchActive
    }}>
      {children}
    </SearchContext.Provider>
  );
};
