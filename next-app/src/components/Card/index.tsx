import styles from "./styles.module.css";

export interface ICardProps {
  children: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
