import { useState } from "react";
import classNames from "classnames";
import styles from './styles.module.css'

const pages = [
  'Page 1',
  'Page 2',
  'Page 3',
]

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames(styles.sidebar, { [styles.openSidebar]: isOpen })}>
      <div
        className={classNames(styles.sidebarItem, { [styles.marginLeft]: isOpen })}
        onClick={() => setIsOpen(prev => !prev)}
      >
          {isOpen ? 'x' : '='}
      </div>
      {pages.map((item) => (
        <div className={styles.flex} key={item}>
          <div className={styles.sidebarItem}></div>
          {isOpen && <div className={styles.noWrap}>{item}</div>}
        </div>
      ))}
    </div>
  )
}

export default Sidebar;
