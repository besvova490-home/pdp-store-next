//interfases
import { AvatarInterface } from "../../types/Elements.types";

//helpers
import formatUserName from "../../helpers/formatting/formatUserName";

//styles
import styles from "../../assets/scss/elements/Avatar.module.scss";

function Avatar({ url, userName }: AvatarInterface): JSX.Element {

  return (
    <div className={styles.avatar}>
      {
        url
          ? <img src={url} alt={userName} className={styles.avatar__image}/>
          : <span className={styles["avatar__user-name"]}>{formatUserName(userName)}</span>
      }
    </div>
  );
}

export default Avatar;
