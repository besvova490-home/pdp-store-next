import { Table, Column, IconButton } from "coax-ui-lib-0";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

//components
import ImagePlaceholder from "../../components/ImagePlaceholder";

//styles
import styles from "../../assets/scss/pages/ProfilePage.module.scss";


function UserBooks(): JSX.Element {
  const userBooksList = [
    { id: 1, title: "Lorem 1", thubneil: "http://books.google.com/books/content?id=fZ-LL5h-rW4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
    { id: 2, title: "Lorem 2", thubneil: "http://books.google.com/books/content?id=fZ-LL5h-rW4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
    { id: 3, title: "Lorem 3", thubneil: "http://books.google.com/books/content?id=fZ-LL5h-rW4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
  ];

  return (
    <div className={`${styles["renoshop-profile__form-content"]} ${styles["renoshop-profile__form-content_one-column"]}`}>
      <Table dataSource={userBooksList}>
        <Column title="Book name" dataIndex="title"/>
        <Column
          title="Book image"
          render={({ thubneil }) => (
            <div className={styles["renoshop-profile-my-books__table-cell-center"]}>
              <ImagePlaceholder url={thubneil as string} className={styles["renoshop-profile-my-books__image-column"]}/>
            </div>
          )}
        />
        <Column title="Categories" dataIndex="title"/>
        <Column
          title="Action"
          render={() => (
            <div className={styles["renoshop-profile-my-books__btn-group"]}>
              <IconButton icon={<BiEdit/>} type={"default"}/>
              <IconButton icon={<AiFillDelete/>} type={"default"} className={styles["renoshop-profile-my-books__btn-danger"]}/>
            </div>
          )}
        />
      </Table>
    </div>
  );
}

export default UserBooks;
