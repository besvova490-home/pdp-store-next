import { IconButton } from "coax-ui-lib";
import { TiDeleteOutline } from "react-icons/ti";

//components
import ImagePlaceholder from "../../components/ImagePlaceholder";

//elements
import AddToCardButton from "../../elements/Buttons/AddToCardButton";

//styles
import styles from "../../assets/scss/components/ComparisonTable.module.scss";


const comparisonTypes = [
  { title: "Products", key: "itemName" },
  { title: "Image", key: "imageCover" },
  { title: "Price", key: "itemPrice" },
  { title: "Rating", key: "itemRating" },
  { title: "Model", key: "itemModel" },
  { title: "Brand", key: "itemBrand" },
  { title: "Short Description", key: "itemShortDescription" },
];

const comparisonProducts = [
  { itemName: "Casual men wearing cool shoe", itemPrice: "$120", itemRatig: "*****", itemModel: "Product 1", itemBrand: "Hewlett-Packard", itemShortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
  { itemName: "Casual men wearing cool shoe", itemPrice: "$122", itemRatig: "*****", itemModel: "Product 1", itemBrand: "Hewlett-Packard", itemShortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
  { itemName: "Casual men wearing cool shoe", itemPrice: "$120", itemRatig: "*****", itemModel: "Product 1", itemBrand: "Hewlett-Packard", itemShortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." }
];


function ComparisonTable(): JSX.Element {


  return (
    <table className={styles["renoshop-comparison-table"]}>
      <tbody>
        {
          comparisonTypes.map(item => (
            <tr>
              <td className={styles["renoshop-comparison-table__cell"]}>
                { item.title }
              </td>
              {
                comparisonProducts.map((product: {[key: string]: string}) => {
                  if (item.key === "imageCover") {
                    return (
                      <td className={styles["renoshop-comparison-table__cell"]}>
                        <div className={`${styles["renoshop-comparison-table__cell-img"]} ${styles["renoshop-comparison-table__cell_center"]}`}>
                          <ImagePlaceholder/>
                        </div>
                      </td>
                    );
                  }

                  return (
                    <td className={styles["renoshop-comparison-table__cell"]}>
                      <span>
                        { product[item.key] }
                      </span>
                    </td>
                  );
                })
              }
            </tr>
          ))
        }
        <tr>
          <td className={styles["renoshop-comparison-table__cell"]}/>
          {
            comparisonProducts.map(() => (
              <td className={styles["renoshop-comparison-table__cell"]}>
                <div className={styles["renoshop-comparison-table__cell-btn-group"]}>
                  <AddToCardButton onClick={() => null} size="middle"/>
                  <IconButton icon={<TiDeleteOutline className={styles["wishlist-table__action-icon"]}/>} size="middle" type="default"/>
                </div>
              </td>
            ))
          }
        </tr>
      </tbody>
    </table>
  );
}

export default ComparisonTable;
