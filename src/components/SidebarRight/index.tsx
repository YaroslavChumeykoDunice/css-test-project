import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './styles.module.css';

const pages = ['Page 4', 'Page 5', 'Page 6'];

const AnimatedDiv = animated('div');
const AnimatedButton = animated('button')


const SidebarRight = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarStyle = useSpring({
    width: isOpen ? 350 : 50,
    config: { tension: 220, friction: 48 },
  });

  const rotateStyle = useSpring({
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    config: { tension: 200, friction: 20 },
  });


  return (
    <AnimatedDiv
      style={{
        ...sidebarStyle,
        height: '100vh',
        borderLeft: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        overflow: 'hidden',
      }}
    >
      <AnimatedButton
        onClick={() => setIsOpen(!isOpen)}
        style={{
          ...rotateStyle,
          width: 35,
          height: 35,
          borderRadius: '50%',
          border: '1px solid black',
          cursor: 'pointer',
          marginLeft: 3,
          marginTop: 10,
        }}
      >
        {isOpen ? 'x' : '='}
      </AnimatedButton>
      {pages.map((page, index) => (
        <div
          key={index}
          className={styles.pagesContainer}
        >
          <div className={styles.pagesItem}/>
          {isOpen && <div className={styles.noWrap}>{page}</div>}
        </div>
      ))}
    </AnimatedDiv>
  );
};

export default SidebarRight;
