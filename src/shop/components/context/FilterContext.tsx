import React, { createContext, useContext, useState } from 'react';

type FilterContextType = {
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  setSelectedSubcategory: (subcategory: string | null) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  return (
    <FilterContext.Provider value={{
      selectedCategory,
      selectedSubcategory,
      setSelectedCategory,
      setSelectedSubcategory
    }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};