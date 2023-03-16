import React, { useState } from 'react'
import { Menu, MenuItemProps } from 'semantic-ui-react'

interface MenuProps {}

const Header: React.FC<MenuProps> = () => {
  const [activeItem, setActiveItem] = useState<string>('editorials')

  const handleItemClick: MenuItemProps['onClick'] = (e, { name }) => {
    setActiveItem(name || "");
  }

  return (
    <Menu>
      <Menu.Item
        name='editorials'
        active={activeItem === 'editorials'}
        onClick={handleItemClick}
      >
        Editorials
      </Menu.Item>

      <Menu.Item
        name='reviews'
        active={activeItem === 'reviews'}
        onClick={handleItemClick}
      >
        Reviews
      </Menu.Item>

      <Menu.Item
        name='upcomingEvents'
        active={activeItem === 'upcomingEvents'}
        onClick={handleItemClick}
      >
        Upcoming Events
      </Menu.Item>
    </Menu>
  )
}

export default Header;
