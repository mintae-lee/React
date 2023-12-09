import React, { useState } from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import logo from '../logo.svg';

const SiteHeader: React.FC = () => {
  // const [상태, 상태변경함수] = useState(초기값);
  // 초기값을 함수로 지정해주면 한번만 실행된다.
  const [activeItem, setActiveItem] = useState(() => { return 'home'});

  // onClick 이벤트를 받는 콜백함수. 여기에서 useState 의 상태변경함수를 실행한다.
  const handleItemClick: MenuItemProps['onClick'] = (e, { name }) => {
    // name 이 전달되면 active 상태를 on 시켜서 배경색을 선택중으로 변경한다
    // name 이 들어가는 인수에 콜백을 넣어주면 (prev) => { return new } 변경되기 이전값을 받을 수 있다.
    setActiveItem(name || "");
  }

  return (
    <Menu secondary style={{ marginTop: '10px', padding: '0 10px', borderBottom: '1px solid #d4d4d5' }}>
      <Menu.Item>
        <a href='http://localhost:3000/' style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt='logo' style={{ height: '30px', marginRight: '10px' }} />
          <span style={{ fontSize: '24px', fontWeight: '700' }}>Cats</span>
        </a>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item
          name='Help'
          active={activeItem === 'help'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default SiteHeader;
