import { useState, useEffect } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconButton, Text, classNames, Pagination, Select } from "coax-ui-lib-0";
import { toast } from "react-toastify";

//components
import Product from "../../components/Product";
import ProductFull from "../../components/Product/ProductFull";

//helpers
import wishListApi from "../../helpers/api/items/wishList";

//interfases
import { Book } from "../../types/ResponsesTypes.types";

//styles
import styles from "../../assets/scss/components/ProductsList.module.scss";

interface ProductListPtops {
  pageItemsList: Array<Book>;
  paginationPage: number;
  totalItem: number;
  onPaginationChange: (page: number) => void;
  paginatioRange: {
    start: number,
    end: number,
  }
}

const sortOptions = [
  { value: "amount", label: "Price" },
  { value: "title", label: "Title" },
  { value: "averageRating", label: "Rating" },
  { value: "pageCount", label: "Total Pages" },
];

const sortingFunc = (columnName: string, data: Array<Book>): Array<Book> => {
  switch (columnName) {
    case "pageCount":
    case "averageRating":
    case "amount":
      return data.sort((a, b) => a[columnName] - b[columnName]);
    case "title":
      return data.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return data;
  }
};


function ProductList({
  pageItemsList = [],
  onPaginationChange,
  paginationPage,
  totalItem,
  paginatioRange
}: ProductListPtops): JSX.Element {
  const [productsDisplayType, setProductsDisplayType] = useState<string>("lines");
  const [userWishList, setUserWishList] = useState<Array<number>>([]);
  const [sortColumn, setSortColumn] = useState("id");

  useEffect(() => {
    wishListApi.getUserWishListSimple()
      .then(resp => setUserWishList(resp))
      .catch(() => setUserWishList([]));
  }, []);

  const handleAddToWishList = bookId => {
    wishListApi.addToMyWishList({ bookId: bookId })
      .then(() => {
        toast.success("Book added to your wish list");
        wishListApi.getUserWishListSimple()
          .then(resp => setUserWishList(resp))
          .catch(() => setUserWishList([]));
      })
      .catch(e => toast.error(e.msg || "Something goes wrong"));
  };

  const handleDeleteFromWishList = bookId => {
    wishListApi.deleteFromWishList(bookId)
      .then(() => {
        toast.success("Book remuved from your wish list");
        wishListApi.getUserWishListSimple()
          .then(resp => setUserWishList(resp))
          .catch(() => setUserWishList([]));
      })
      .catch(e => toast.error(e.msg || "Something goes wrong"));
  };

  const productListClassNames = classNames({
    [styles["renoshop-products-list__grid-blocks"]]: productsDisplayType === "blocks",
    [styles["renoshop-products-list__grid-lines"]]: productsDisplayType === "lines",
  });

  const sortedPageItems = sortColumn !== "id"
    ? sortingFunc(sortColumn, pageItemsList).slice(paginatioRange.start, paginatioRange.end)
    : pageItemsList.slice(paginatioRange.start, paginatioRange.end);

  const getPagesNumbers = () => {
    if (totalItem < sortedPageItems.length) return;

    const lastPageNumber = Math.ceil(totalItem / 20);

    return new Array(lastPageNumber !== 2 ? lastPageNumber - 1 : 2).fill(1).map((item, index) => index + 1);
  };


  return (
    <section className={styles["renoshop-products-list"]} data-testid="category-page">
      <div className={styles["renoshop-products-list__top"]}>
        <div className={styles["renoshop-products-list__display-settings"]}>
          <Text type="secondary" size="s">Showing {paginatioRange.start + 1}-{paginatioRange.start + pageItemsList.length} of {totalItem} results</Text>
          <div className={styles["renoshop-products-list__sort-by"]}>
            <span><Text type="secondary" size="s">Sort by:</Text></span>
            <Select
              placeholder={"Sorting column"}
              onSelect={({ value }) => setSortColumn(`${value}`)}
              options={sortOptions}
            />
          </div>
        </div>
        <div className={styles["renoshop-products-list__grid-actions"]}>
          <IconButton
            icon={<CgMenuGridR/>}
            onClick={() => setProductsDisplayType("blocks")}
            type={productsDisplayType === "blocks" ? "primary" : "default"}
          />
          <IconButton
            icon={<GiHamburgerMenu/>}
            onClick={() => setProductsDisplayType("lines")}
            type={productsDisplayType === "lines" ? "primary" : "default"}
          />
        </div>
      </div>
      <div className={productListClassNames}>
        {
          sortedPageItems.map((bookItem: Book, index) => (productsDisplayType === "lines"
            ? <ProductFull
              key={index}
              inWishList={userWishList.includes(bookItem.id)}
              handleAddToWishList={handleAddToWishList}
              handleDeleteFromWishList={handleDeleteFromWishList}
              {...bookItem}
            />
            : <Product
              key={index}
              handleAddToWishList={handleAddToWishList}
              handleDeleteFromWishList={handleDeleteFromWishList}
              inWishList={userWishList.includes(bookItem.id)}
              {...bookItem}
            />))
        }
      </div>
      {
        sortedPageItems.length && totalItem > sortedPageItems.length && <div className={styles["renoshop-products-list__pagination"]}>
          <Pagination
            pagesList={getPagesNumbers() || []}
            current={paginationPage}
            onChange={page => onPaginationChange(page)}
          />
        </div>
      }
    </section>
  );
}

export default ProductList;
