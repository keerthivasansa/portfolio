import styles from "../styles/ribbon.module.css";

export function Ribbon() {
  return (
    <div className="relative">
      <div className="w-16 h-12 lg:h-24 lg:w-32 bg-accent text-green-800 items-end justify-center flex text-opacity-50 text-sm font-bold"></div>
      <div className={"border-accent " + styles.ribbonTriangle}></div>
    </div>
  );
}
