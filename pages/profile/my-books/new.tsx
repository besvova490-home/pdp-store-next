import { Button, Input, Select, TextArea } from "coax-ui-lib-0";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Formik, Form } from "formik";
import * as Yup from "yup";

//elemets
import { Upload } from "../../../elements/Upload";

//layouts
import BaseLayout from "../../../layouts/BaseLayout";

//helpers
import { getCategoriesList } from "../../../helpers/api/categories";
import { getAuthorsList } from "../../../helpers/api/authors";

//styles
import styles from "../../../assets/scss/pages/ProfileMyBook.module.scss";

const initialValues = {
  title: "",
  amount: 0,
  description: "",
  shortDescription: "",
  thumbnailLink: "",
  categories: "",
  authors: "",
};


function CrateNewBookPage({ categories = [], authors = [] }): JSX.Element {

  return (
    <BaseLayout>
      <section className={`base-container ${styles["my-boooks-page"]}`}>
        <Formik
          onSubmit={data => console.log(data)}
          initialValues={initialValues}
        >
          {({ errors, setFieldValue }) => (
            <Form>
              <div className={styles["my-boooks__header"]}>
                <span>Create New Book</span>
                <Button label="Create" size="large" type="default" htmlType="submit"/>
              </div>
              <div className={styles["my-boooks__content"]}>
                <div className={styles["my-boooks__row-grid"]}>
                  <Upload/>
                  <div className={styles["my-boooks__inputs-group"]}>
                    <Input
                      placeholder="Title"
                      onChange={e => setFieldValue("title", e.target.value)}
                      fullWidth
                    />
                    <Input
                      fullWidth
                      placeholder="Amount"
                      onChange={e => setFieldValue("amount", e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles["my-boooks__row-grid-2"]}>
                  <TextArea
                    placeholder="Short Description"
                    onChange={e => setFieldValue("title", e.target.value)}
                  />
                  <TextArea
                    placeholder="Description"
                    onChange={e => setFieldValue("title", e.target.value)}
                  />
                </div>
                <div className={styles["my-boooks__row-grid-3"]}>
                  <Select
                    mode="tag"
                    fullWidth
                    placeholder="Categories"
                    onSelect={value => console.log(value)}
                    options={categories.map(item => ({ label: item.title, value: item.id }))}
                  />
                  <Select
                    mode="tag"
                    fullWidth
                    placeholder="Authors"
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
  const { req, res } = context;

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
