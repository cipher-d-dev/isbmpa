import { Link } from "react-router-dom";
import styles from "../css/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="404 Not Found"
        className={styles.image}
      />
      <h1>Oops! Page Not Found</h1>
      <p>We can't seem to find the page you're looking for.</p>
      <Link to={"/"} className={styles.button}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
