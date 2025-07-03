import React from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

interface SortSelectorProps {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  onSortChange: (sortBy: string, sortOrder: 'asc' | 'desc') => void;
}

export const SortSelector: React.FC<SortSelectorProps> = ({
  sortBy,
  sortOrder,
  onSortChange
}) => {
  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'cookingTime', label: 'Cooking Time' },
    { value: 'category', label: 'Category' }
  ];

  const handleSortChange = (newSortBy: string) => {
    if (newSortBy === sortBy) {
      // Toggle sort order if same field
      onSortChange(sortBy, sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Change field with default asc order
      onSortChange(newSortBy, 'asc');
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">Sort by:</span>
      {sortOptions.map(option => (
        <button
          key={option.value}
          onClick={() => handleSortChange(option.value)}
          className={`flex items-center space-x-1 px-3 py-2 rounded-lg border transition-all duration-200 ${
            sortBy === option.value
              ? 'bg-orange-500 text-white border-orange-500'
              : 'border-gray-200 hover:bg-gray-50'
          }`}
        >
          <span className="text-sm">{option.label}</span>
          {sortBy === option.value && (
            sortOrder === 'asc' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />
          )}
        </button>
      ))}
    </div>
  );
};