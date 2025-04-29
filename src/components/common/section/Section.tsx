import classNames from "classnames";
import { SectionProps } from "./section.interface";

import styles from "./section.module.css";

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={classNames(className, styles.section)}>
      {children}
    </section>
  );
};
