import { Button, Input, Select } from "coax-ui-lib-0";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useRouter } from "next/router";


//elemets
import { Upload } from "../../../elements/Upload";

//layouts
import BaseLayout from "../../../layouts/BaseLayout";

//interfacec
import { Book } from "../../../types/ResponsesTypes.types";

//helpers
import { getCategoriesList } from "../../../helpers/api/categories";
import { getAuthorsList } from "../../../helpers/api/authors";
import { getProductsById } from "../../../helpers/api/product";
import booksApi from "../../../helpers/api/items/item";

//styles
import styles from "../../../assets/scss/pages/ProfileMyBook.module.scss";


const validationShema = Yup.object().shape({
  title: Yup.string().required("Can't be empty"),
  amount: Yup.string().required("Can't be empty"),
  description: Yup.string().required("Can't be empty"),
  shortDescription: Yup.string().required("Can't be empty"),
});

interface EditBookPage {
  categories: Array<Record<string, string | number>>,
  authors: Array<Record<string, string | number>>,
  book: Book & { categories: Array<Record<string, string | number>>, authors: Array<Record<string, string | number>> }
}


function EditBookPage({ categories = [], authors = [], book }: EditBookPage): JSX.Element {
  const router = useRouter();

  const initialValues = {
    title: book.title,
    amount: book.amount,
    description: book.description,
    shortDescription: book.shortDescription,
    thumbnailLink: book.thumbnailLink,
    categories: book.categories[0],
    authors: book.authors[0],
    pageCount: book.pageCount,
  };

  return (
    <BaseLayout>
      <section className={`base-container ${styles["my-boooks-page"]}`}>
        <Formik
          onSubmit={data => {
            booksApi.updateMyBook(`${book.id}`, data)
              .then(() => {
                toast.success("New book has been created");
                router.replace("/profile?tab=my-books");
              })
              .catch(() => toast.error("Something gos wrong"));
          }}
          initialValues={initialValues}
          validationSchema={validationShema}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ errors, setFieldValue, values }) => (
            <Form>
              <div className={styles["my-boooks__header"]}>
                <span>Edit Book</span>
                <Button label="Create" size="large" type="default" htmlType="submit"/>
              </div>
              <div className={styles["my-boooks__content"]}>
                <div className={styles["my-boooks__row-grid"]}>
                  <Upload
                    previewImage={values.thumbnailLink}
                    onUpload={image => setFieldValue("thumbnailLink", image.url)}
                  />
                  <div className={styles["my-boooks__inputs-group"]}>
                    <Input
                      value={values.title}
                      placeholder="Title"
                      onChange={e => setFieldValue("title", e.target.value)}
                      fullWidth
                      error={errors.title}
                    />
                    <Input
                      fullWidth
                      value={`${values.amount}`}
                      placeholder="Amount"
                      onChange={e => setFieldValue("amount", +e.target.value)}
                      error={errors.amount}
                    />
                    <Input
                      fullWidth
                      placeholder="Total Pages"
                      value={`${values.pageCount}`}
                      onChange={e => setFieldValue("pageCount", +e.target.value)}
                      error={errors.amount}
                    />
                  </div>
                </div>
                <div className={styles["my-boooks__row-grid-2"]}>
                  <Input
                    fullWidth
                    value={values.shortDescription}
                    placeholder="Short Description"
                    onChange={e => setFieldValue("shortDescription", e.target.value)}
                    error={errors.shortDescription}
                  />
                  <Input
                    fullWidth
                    placeholder="Description"
                    value={values.description}
                    onChange={e => setFieldValue("description", e.target.value)}
                    error={errors.description}
                  />
                </div>
                <div className={styles["my-boooks__row-grid-3"]}>
                  <Select
                    value={{ value: `${values.categories}`, label: `${values.categories}` }}
                    errro={errors.categories}
                    fullWidth
                    placeholder="Categories"
                    onSelect={({ label }) => setFieldValue("categories", [`${label}`])}
                    options={categories.map(item => ({ label: item.title, value: item.id }))}
                  />
                  <Select
                    value={{ value: `${values.authors}`, label: `${values.authors}` }}
                    errro={errors.authors}
                    fullWidth
                    placeholder="Authors"
                    onSelect={({ label }) => setFieldValue("authors", [`${label}`])}
                    options={authors.map(item => ({ label: item.name, value: item.id }))}
                  />
                  <Input placeholder="Published" fullWidth/>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </BaseLayout>
  );
}
 
export default EditBookPage;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req } = context;

  if (!req.cookies.accessToken) {
    return {
      notFound: !req.cookies.accessToken,
      props: {}
    };
  }
  const book = await getProductsById(`${context.params.id}`);
  const { categories } = await getCategoriesList();
  const { authorsList } = await getAuthorsList();

  return {
    props: {
      book,
      categories,
      authors: authorsList,
    }
  };
};
