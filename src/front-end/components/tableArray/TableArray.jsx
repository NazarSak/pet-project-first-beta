import { TableColumn } from '../Table/Table.styled';
import {
  SumaMessage,
  DescriptionMessage,
} from './TableArray.styled';

export const TableArray = ({ data }) => {
  return data.map(({ id, description, category, sum,time }) => (
    <TableColumn key={id}>
      <DescriptionMessage>{time}</DescriptionMessage>
      <DescriptionMessage>{description}</DescriptionMessage>
      <DescriptionMessage>{category}</DescriptionMessage>
      <SumaMessage>-{sum} UAH.</SumaMessage>
    </TableColumn>
  ));
};
