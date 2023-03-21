import React, { useState } from 'react'
import { Menu, MenuItemProps, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

interface MenuProps {}

const TopNavigation: React.FC<MenuProps> = () => {
  const [activeItem, setActiveItem] = useState<string>('TOP')

  const handleItemClick: MenuItemProps['onClick'] = (e, { name }) => {
    setActiveItem(name || "");
  }

  return (
    <Menu>
      <Menu.Item
        name='TOP'
        active={activeItem === 'TOP'}
        onClick={handleItemClick}
      >
        TOP
      </Menu.Item>

      <Menu.Item
        as={Link}
        to="/favourites"
        name='favourites'
        active={activeItem === 'favourites'}
        onClick={handleItemClick}
      >
        お気に入り
      </Menu.Item>

      <Menu.Item
        name='review'
        active={activeItem === 'review'}
        onClick={handleItemClick}
      >
        お客様の声
      </Menu.Item>
      
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='検索' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default TopNavigation;
