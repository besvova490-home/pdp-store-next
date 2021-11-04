import { useState, useEffect } from "react";
import { Table, Column, IconButton, NoResults } from "coax-ui-lib-0";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

//components
import ImagePlaceholder from "../../components/ImagePlaceholder";

//interfacec
import { Book } from "../../types/ResponsesTypes.types";

//helpers
import booksApi from "../../helpers/api/items/item";

//styles
import styles from "../../assets/scss/pages/ProfilePage.module.scss";
import router from "next/router";


function UserBooks(): JSX.Element {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    booksApi.getMyBooks()
      .then(({ booksList: booksListResp }: { booksList: Array<Book> }) => setBooksList(booksListResp));
  }, []);

  return (
    <div className={`${styles["renoshop-profile__form-content"]} ${styles["renoshop-profile__form-content_one-column"]}`}>
      <Table dataSource={booksList}>
        <Column title="Book name" dataIndex="title"/>
        <Column
          title="Book image"
          render={({ thumbnailLink }) => (
            <div className={styles["renoshop-profile-my-books__table-cell-center"]}>
              <ImagePlaceholder url={thumbnailLink as string} className={styles["renoshop-profile-my-books__image-column"]}/>
            </div>
          )}
        />
        <Column title="Main Info" render={({ pageCount, createdAt, updatedAt }) => (
          <div>
            <p>Total pages: { pageCount }</p>
            <p>Created At: { createdAt }</p>
            <p>Updated At: { updatedAt }</p>
          </div>
        )}/>
        <Column
          title="Action"
          render={({ id }) => (
            <div className={styles["renoshop-profile-my-books__btn-group"]}>
              <IconButton icon={<BiEdit/>} type={"default"} onClick={() => router.replace(`/profile/my-books/${id}`)}/>
              <IconButton
                icon={<AiFillDelete/>}
                type={"default"}
                onClick={() => booksApi.deleteBook(`${id}`)}
                className={styles["renoshop-profile-my-books__btn-danger"]}
              />
            </div>
          )}
        />
      </Table>
    </div>
  );
}

export default UserBooks;
