import React, { useState } from 'react'
import { Menu, MenuItemProps } from 'semantic-ui-react'

interface MenuProps {}

const SideNavigation: React.FC<MenuProps> = () => {
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
    </Menu>
  )
}

export default SideNavigation;
