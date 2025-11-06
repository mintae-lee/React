import React, { useState } from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import logo from '../logo.svg';

const SiteHeader: React.FC = () => {
  // const [状態, 状態更新関数] = useState(初期値);
  // 初期値を関数で渡すと一度だけ評価される。
  const [activeItem, setActiveItem] = useState(() => { return 'home'});

  // onClick イベントを受け取るコールバック。この中で useState の更新関数を呼び出す。
  const handleItemClick: MenuItemProps['onClick'] = (e, { name }) => {
    // name が渡されると active 状態をオンにして背景色を選択中に切り替える。
    // name に渡す引数をコールバックにすると (prev) => { return new } のように更新前の値を参照できる。
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
