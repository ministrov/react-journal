import styles from './JournalItem.module.css';

function JournalItem({ title, post, date }) {
  const formatedDate = new Intl.DateTimeFormat('ru-Ru').format(date);

  return (
    <>
      <h2 className={styles["journal-item-header"]}>{title}</h2>
      <div className={styles["journal-item-body"]}>
        <div className={styles["journal-item-date"]}>{formatedDate}</div>
        <div className={styles["journal-item-text"]}>{post}</div>
      </div>
    </>
  );
}

export default JournalItem;