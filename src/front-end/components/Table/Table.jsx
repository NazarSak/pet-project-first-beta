import React from 'react'
import { TableCategory, TableColumn, TableColumnContainer, TableDate, TableDescription, TableHeader, TableSum } from './Table.styled'

export const Table = () => {
  return (
    <div>
      <TableHeader>
        <TableDate>Date</TableDate>
        <TableDescription>Description</TableDescription>
        <TableCategory>Category</TableCategory>
        <TableSum>Sum</TableSum>
      </TableHeader>
      <TableColumnContainer>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
      </TableColumnContainer>
    </div>
  );
}