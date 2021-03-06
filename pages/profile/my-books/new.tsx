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

//helpers
import { getCategoriesList } from "../../../helpers/api/categories";
import { getAuthorsList } from "../../../helpers/api/authors";
import booksApi from "../../../helpers/api/items/item";

//styles
import styles from "../../../assets/scss/pages/ProfileMyBook.module.scss";

const initialValues = {
  title: "",
  amount: "0",
  description: "",
  shortDescription: "",
  thumbnailLink: "",
  categories: "",
  authors: "",
  pageCount: "",
};

const validationShema = Yup.object().shape({
  title: Yup.string().required("Can't be empty"),
  amount: Yup.string().required("Can't be empty"),
  description: Yup.string().required("Can't be empty"),
  shortDescription: Yup.string().required("Can't be empty"),
});


function CrateNewBookPage({ categories = [], authors = [] }): JSX.Element {
  const router = useRouter();

  return (
    <BaseLayout>
      <section className={`base-container ${styles["my-boooks-page"]}`}>
        <Formik
          onSubmit={data => {
            booksApi.createNewBook(data)
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
                <span>Create New Book</span>
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
                      placeholder="Title"
                      onChange={e => setFieldValue("title", e.target.value)}
                      fullWidth
                      error={errors.title}
                    />
                    <Input
                      fullWidth
                      placeholder="Amount"
                      onChange={e => setFieldValue("amount", +e.target.value)}
                      error={errors.amount}
                    />
                    <Input
                      fullWidth
                      placeholder="Total Pages"
                      onChange={e => setFieldValue("pageCount", +e.target.value)}
                      error={errors.amount}
                    />
                  </div>
                </div>
                <div className={styles["my-boooks__row-grid-2"]}>
                  <Input
                    fullWidth
                    placeholder="Short Description"
                    onChange={e => setFieldValue("shortDescription", e.target.value)}
                    error={errors.shortDescription}
                  />
                  <Input
                    fullWidth
                    placeholder="Description"
                    onChange={e => setFieldValue("description", e.target.value)}
                    error={errors.description}
                  />
                </div>
                <div className={styles["my-boooks__row-grid-3"]}>
                  <Select
                    errro={errors.categories}
                    fullWidth
                    placeholder="Categories"
                    onSelect={({ label }) => setFieldValue("categories", [label])}
                    options={categories.map(item => ({ label: item.title, value: item.id }))}
                  />
                  <Select
                    errro={errors.categories}
                    fullWidth
                    placeholder="Authors"
                    onSelect={({ label }) => setFieldValue("authors", [label])}
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
 
export default CrateNewBookPage;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req } = context;

  if (!req.cookies.accessToken) {
    return {
      notFound: !req.cookies.accessToken,
      props: {}
    };
  }

  const { categories } = await getCategoriesList();
  const { authorsList } = await getAuthorsList();

  return {
    props: {
      categories,
      authors: authorsList,
    }
  };
};
