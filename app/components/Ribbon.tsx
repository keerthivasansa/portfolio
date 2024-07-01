import styles from "../styles/ribbon.module.css";

export function Ribbon() {
  return (
    <>
      <div className="w-16 h-12 lg:h-24 lg:w-32 bg-accent"></div>
      <div className={"border-accent " + styles.ribbonTriangle}></div>
    </>
  );
}
