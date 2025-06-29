import { Container } from "react-bootstrap";
import { useCallback, useEffect, useRef, useState } from "react";

import { IdsNav } from "../../../constants";
import { BurgerMenu } from "./burgerMenu";

import styles from "./menu.module.css";
import classNames from "classnames";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  const closeSelect = useCallback((event: MouseEvent) => {
    const { target } = event;
    if (target instanceof Node && !rootRef.current?.contains(target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", closeSelect);
    return () => {
      document.removeEventListener("click", closeSelect);
    };
  }, [closeSelect]);

  return (
    <nav className={styles.menu} ref={rootRef}>
      <Container>
        <div className={styles.menuListWrap}>
          <ul
            className={classNames(
              { [styles.openMenu]: isOpen },
              styles.menuList
            )}
          >
            <li className={styles.menuItem}>
              <a href={`#${IdsNav.MAIN}`} className={styles.menuLink}>
                Главная
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href={`#${IdsNav.SCHEDULE}`} className={styles.menuLink}>
                Расписание
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href={`#${IdsNav.DRESS_CODE}`} className={styles.menuLink}>
                Дресс-код
              </a>
            </li>           
            <li className={styles.menuItem}>
              <a href={`#${IdsNav.ADDITIONAL}`} className={styles.menuLink}>
                Дополнительно
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href={`#${IdsNav.FEEDBACK}`} className={styles.menuLink}>
                Обратная связь
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.burgerMenu}>
          <div></div>
          <div onClick={() => setIsOpen((prev) => !prev)}>
            <BurgerMenu />
          </div>
        </div>
      </Container>
    </nav>
  );
};
