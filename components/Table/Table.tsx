import { Children, isValidElement } from "react";

//interfaces
import { TableProps } from "../../types/Components.types";

//context
import TableRowContextProvider from "../../contexts/TableRowContext.context";

//styles
import styles from "../../assets/scss/components/Table.module.scss";


function Table({ children, dataSource }: TableProps): JSX.Element {


  return (
    <table className={styles["renoshop-table"]}>
      <thead className={styles["renoshop-table__header"]}>
        <tr className={styles["renoshop-table__header-row"]}>
          {
            Children.map((children), child => {
              if (!isValidElement(child)) return;

              return (
                <th className={styles["renoshop-table__header-cell"]} style={{ width: child.props.width }}>
                  { child.props.title }
                </th>
              );
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          dataSource.map(row => (
            <TableRowContextProvider rowValues={row}>
              <tr className={styles["renoshop-table__body-row"]}>
                { children }
              </tr>
            </TableRowContextProvider>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
