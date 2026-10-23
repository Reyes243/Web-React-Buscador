import type { FC } from "react";
import type { UserInfoResponse } from "../../types/github";
import styles from "./UserInfo.module.css";

export interface UserInfoProps {
  user: UserInfoResponse | null;
  loading?: boolean;
  error?: string | null;
}

export const UserInfo: FC<UserInfoProps> = ({ user, loading = false, error = null }) => {
  if (loading) {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner} />
          <p>Cargando información del usuario...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.errorBox}>
          <strong>Error:</strong> {error}
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.placeholderCard}>
        <h3>Ningún usuario seleccionado</h3>
        <p>Selecciona un perfil de los resultados para consultar sus detalles.</p>
      </div>
    );
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.userHeader}>
        <img
          src={user.avatar_url}
          alt={`Avatar de ${user.login}`}
          className={styles.userAvatar}
        />
        <div>
          <h2 className={styles.userName}>{user.name || user.login}</h2>
          <p className={styles.userLogin}>@{user.login}</p>
        </div>
      </div>

      {user.bio && <p className={styles.bio}>{user.bio}</p>}

      <div className={styles.extraDetails}>
        {user.location && (
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Ubicación</span>
            <span>{user.location}</span>
          </div>
        )}
        {user.company && (
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Empresa</span>
            <span>{user.company}</span>
          </div>
        )}
        {user.blog && (
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Sitio web</span>
            <a
              href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.blog}
            </a>
          </div>
        )}
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statBox}>
          <span className={styles.statValue}>{user.public_repos}</span>
          <span className={styles.statLabel}>Repositorios</span>
        </div>
        <div className={styles.statBox}>
          <span className={styles.statValue}>{user.followers}</span>
          <span className={styles.statLabel}>Seguidores</span>
        </div>
        <div className={styles.statBox}>
          <span className={styles.statValue}>{user.following}</span>
          <span className={styles.statLabel}>Seguidos</span>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.profileLinkButton}
      >
        <span>Ver perfil en GitHub</span>
      </a>
    </div>
  );
};

export default UserInfo;
