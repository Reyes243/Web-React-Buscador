import type { FC } from "react";
import type { SearchUserItem } from "../../types/github";
import styles from "./results.module.css";

export interface ResultItemProps {
  item: SearchUserItem;
  onDetailsClick: (item: SearchUserItem) => void;
  isSelected?: boolean;
}

export const ResultItem: FC<ResultItemProps> = ({ item, onDetailsClick, isSelected = false }) => {
  return (
    <div className={`${styles.resultItem} ${isSelected ? styles.selectedItem : ""}`}>
      <div className={styles.userInfoContainer}>
        <img
          src={item.avatar_url}
          alt={`Avatar de ${item.login}`}
          className={styles.avatar}
          loading="lazy"
        />
        <div>
          <div className={styles.loginName}>{item.login}</div>
          <div className={styles.userType}>{item.type}</div>
        </div>
      </div>

      <button
        type="button"
        className={styles.detailsButton}
        onClick={() => onDetailsClick(item)}
        title={`Ver detalles de ${item.login}`}
        aria-label={`Ver detalles de ${item.login}`}
      >
          <svg
            className={styles.eyeIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span>Ver detalles</span>
        </button>
    </div>
  );
};

export default ResultItem;
