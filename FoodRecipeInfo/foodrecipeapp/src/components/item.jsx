import styles from "./item.module.css";
export default function item({ item }) {
  return (
    <div>
      <div className={Styles.itemContainer}>
        <div className={Styles.imageContainer}>
          <img
            className={styles.image}
            src={
              `https://img.spoonacular.com/ingredients_100x100/` + item.image
            }
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount}
            {item.unit}
          </div>
        </div>

        <h3>
          {item.amount}
          {item.unit}
        </h3>
      </div>
    </div>
  );
}
