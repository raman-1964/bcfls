import styles from "./Skeleton.module.css";
const Skeleton = ({ className, isWhiteLoader = false }) => {
  return (
    <div
      className={`${styles.skeletonLoader} ${className} ${
        isWhiteLoader ? styles.whiteLoader : styles.darkLoader
      }`}
    />
  );
};

export default Skeleton;
