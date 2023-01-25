import styles from "./styles.module.css";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
