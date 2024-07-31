import React, { useState } from "react";
import { Menu,Dropdown,Button,Layout,Modal,Form,Select,Input,Tabs,Drawer } from "antd";
import { UserOutlined, LoginOutlined, MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Option } = Select;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="1" icon={<LoginOutlined />} onClick={showModal}>
        Login
      </Menu.Item>
    </Menu>
  );

  const tabItems = [
    {
      key: "1",
      label: "Login",
      children: (
        <Form name="login" layout="vertical" onFinish={handleOk}>
          <Form.Item
            name="usertype"
            label="User Type"
            rules={[{ required: true, message: "Please select user type!" }]}
          >
            <Select>
              <Option value="Admin">Admin</Option>
              <Option value="User">User</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      key: "2",
      label: "Register",
      children: (
        <Form name="register" layout="vertical" onFinish={handleOk}>
          <Form.Item
            name="usertype"
            label="User Type"
            rules={[{ required: true, message: "Please select user type!" }]}
          >
            <Select>
              <Option value="Admin">Admin</Option>
              <Option value="User">User</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>
      ),
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px #f0f1f2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            icon={<MenuOutlined />}
            onClick={showDrawer}
            style={{ marginRight: "20px", fontSize: "20px" }}
          />
          <div style={{ fontSize: "20px", fontWeight: "bold", color: "#000" }}>
            RockG MicroTech
          </div>
        </div>
        <div style={{ display: "none", flex: 1, justifyContent: "center" }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ backgroundColor: "#fff", borderBottom: "none" }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Explore</Menu.Item>
            <Menu.Item key="3">Features</Menu.Item>
            <Menu.Item key="4">About</Menu.Item>
            <Menu.Item key="5">Contact Us</Menu.Item>
          </Menu>
        </div>
        <Dropdown overlay={userMenu} placement="bottomRight">
          <Button icon={<UserOutlined />} shape="circle" />
        </Dropdown>
      </Header>

      {/* Drawer for sidebar menu */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={onClose}
        visible={drawerVisible}
        width={"200px"}
      >
        <Menu
          mode="vertical"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: "#fff" }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Explore</Menu.Item>
          <Menu.Item key="3">Features</Menu.Item>
          <Menu.Item key="4">About</Menu.Item>
          <Menu.Item key="5">Contact Us</Menu.Item>
        </Menu>
      </Drawer>

      {/* Modal for Login and Register */}
      <Modal
        title="Authentication"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        centered
        style={{ top: "20px", maxWidth: "600px", width: "80%" }}
      >
        <Tabs defaultActiveKey="1" centered items={tabItems} />
      </Modal>

      <style jsx>{`
        @media (min-width: 768px) {
          .ant-menu-horizontal {
            display: flex !important;
          }
        }

        @media (max-width: 767px) {
          .ant-menu-horizontal {
            display: none !important;
          }
        }

        .ant-modal-centered .ant-modal {
          top: 20px;
        }

        .ant-modal {
          padding-top: 20px !important;
        }

        .ant-tabs-nav {
          margin-bottom: 0 !important;
        }

        .ant-tabs-content {
          padding: 10px !important;
        }
      `}</style>
    </Layout>
  );
};

export default Navbar;
