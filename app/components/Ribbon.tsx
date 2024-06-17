import styles from "../styles/ribbon.module.css";

export function Ribbon() {
  return (
    <>
      <div className="h-24 w-32 bg-accent"></div>
      <div className={"border-accent " + styles.ribbonTriangle}></div>
    </>
  );
}
