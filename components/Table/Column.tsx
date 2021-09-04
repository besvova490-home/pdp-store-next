import { useContext } from "react";

//contexts
import { TableRowContext } from "../../contexts/TableRowContext.context";

//interfaces
import { TableColumnProps } from "../../types/Components.types";

//styles
import styles from "../../assets/scss/components/Table.module.scss";


function Column({ className, dataIndex, width, render }: TableColumnProps): JSX.Element {
  const { rowValues } = useContext(TableRowContext);
  

  return (
    <td className={`${styles["renoshop-table__body-cell"]} ${className}`} style={{ width }}>
      {
        render
          ? render(rowValues)
          : dataIndex ? rowValues[dataIndex] : null
      }
    </td>
  );
}

export default Column;
