import { TableColumn } from '../Table/Table.styled';
import { SumaMessage, DescriptionMessage } from './TableArray.styled';
import trash from '../../../assets/svgImage/trash.svg';

export const TableArray = ({ data, handleDelete }) => {
  return data.map(({ id, description, category, sum, time }) => (
    <TableColumn key={id}>
      <DescriptionMessage>{time}</DescriptionMessage>
      <DescriptionMessage>{description}</DescriptionMessage>
      <DescriptionMessage>{category}</DescriptionMessage>
      <SumaMessage>-{sum} UAH.</SumaMessage>

      <div onClick={() => handleDelete(id)}>
        <img src={trash} alt="trash" />
      </div>
    </TableColumn>
  ));
};
