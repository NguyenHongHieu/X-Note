import React from 'react'
import { Layout, Menu } from 'antd';
import { DeleteOutlined, FileDoneOutlined } from '@ant-design/icons';

const { Sider } = Layout;
// const { SubMenu } = Menu;

export const SideBar = () => {
  const [collapsedState, setCollapsedState] = React.useState(false);

  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setCollapsedState(collapsed);
  };
  return (
    <Sider collapsible collapsed={collapsedState} onCollapse={onCollapse}>
      <div className="logo">
        <h1 className="text-center text-white">Notes App</h1>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item icon={<FileDoneOutlined />} key="1">
          Notes
          </Menu.Item>
        <Menu.Item icon={<DeleteOutlined />} key="2">
          Trash
          </Menu.Item>
        <hr />
        <Menu.Item key="3">
          project
          </Menu.Item>
        <Menu.Item key="4">
          business
          </Menu.Item>
        <Menu.Item key="5">
          personal
          </Menu.Item>
        <Menu.Item key="6">
          + Add new label
          </Menu.Item>
      </Menu>
    </Sider>
  )
}
