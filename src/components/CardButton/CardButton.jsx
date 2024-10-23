import styles from './CardButton.module.css';

function CardButton({ children, className, ...props }) {
  const cl = `${styles['card-button']}` + (className ? ' ' + className : '');

  // console.log([...props]);

  return (
    <button {...props} className={cl}>
      {children}
    </button>
  );
}

export default CardButton;