import React, { useState, memo } from 'react'
import { range } from 'lodash'

import { Event } from '../../schema'

export class NavigationState {
  skip: number = 0
  limit: number = 10
}

interface PaginationNavigationProps {
  // filteredEvents: Event[]
  // onClick: (tagValue: string) => void
  pagination: NavigationState,
  totalObjects: number,
  onChange: (newPagination: NavigationState) => void
}


export const PaginationNavigation = memo((props: PaginationNavigationProps) => {
  const { skip, limit } = props.pagination;
  const totalPages = Math.ceil(props.totalObjects / limit);
  const currentPage = Math.floor(skip / limit) + 1;
  const pageNumbers: (number | string)[] = [];

  // Always show first page
  if (totalPages > 0) pageNumbers.push(1);

  // Show left ellipsis if needed
  if (currentPage > 4) pageNumbers.push('left-ellipsis');

  // Show two pages before current
  for (let i = Math.max(2, currentPage - 2); i < currentPage; i++) {
    pageNumbers.push(i);
  }

  // Show current page (if not first/last)
  if (currentPage !== 1 && currentPage !== totalPages && totalPages > 1) {
    pageNumbers.push(currentPage);
  }

  // Show two pages after current
  for (let i = currentPage + 1; i <= Math.min(totalPages - 1, currentPage + 2); i++) {
    pageNumbers.push(i);
  }

  // Show right ellipsis if needed
  if (currentPage < totalPages - 3) pageNumbers.push('right-ellipsis');

  // Always show last page (if more than one)
  if (totalPages > 1) pageNumbers.push(totalPages);

  return (
    <div className="pagination-navigation" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>

      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => props.onChange({ skip: Math.max(0, skip - limit), limit })}
      >
        Prev
      </button>

      {pageNumbers.map((num, idx) => {
        if (typeof num === 'string' && num.includes('ellipsis')) {
          return (
            <span key={num + idx} style={{ padding: '0 4px' }}>…</span>
          );
        }
        const isCurrent = num === currentPage;
        return (
          <button
            type="button"
            key={num}
            disabled={isCurrent}
            style={isCurrent ? { fontWeight: 'bold', background: '#e0e0e0' } : {}}
            onClick={() => props.onChange({ skip: ((num as number) - 1) * limit, limit })}
          >
            {num}
          </button>
        );
      })}

      <button
        type="button"
        disabled={currentPage === totalPages || totalPages === 0}
        onClick={() => props.onChange({ skip: Math.min(skip + limit, (totalPages - 1) * limit), limit })}
      >
        Next
      </button>
    </div>
  );
});
