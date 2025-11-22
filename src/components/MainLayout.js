import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  //UploadOutlined,
  //UserOutlined,
  // VideoCameraOutlined,
} from "@ant-design/icons";
import { AiOutlineDashboard } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { SiBrandfolder } from "react-icons/si";
import { IoIosPeople, IoMdNotifications } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { FaBloggerB } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import { SlQuestion } from "react-icons/sl";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">PMM</span>
            <span className="lg-logo">PatMM Ltd</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: " ",
              icon: <AiOutlineDashboard style={{ fontSize: "1.75rem" }} />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <IoIosPeople style={{ fontSize: "1.75rem" }} />,
              label: "Customers",
            },
            {
              key: "Catalog",
              icon: <TiShoppingCart style={{ fontSize: "1.75rem" }} />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <TiShoppingCart style={{ fontSize: "1.75rem" }} />,
                  label: "Add product",
                },
                {
                  key: "product-list",
                  icon: <TiShoppingCart style={{ fontSize: "1.75rem" }} />,
                  label: "Product list",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder style={{ fontSize: "1.75rem" }} />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <SiBrandfolder style={{ fontSize: "1.75rem" }} />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategory style={{ fontSize: "1.75rem" }} />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategory style={{ fontSize: "1.75rem" }} />,
                  label: "Category list",
                },
                {
                  key: "color",
                  icon: (
                    <IoColorPaletteOutline style={{ fontSize: "1.75rem" }} />
                  ),
                  label: "Color",
                },
                {
                  key: "list-color",
                  icon: (
                    <IoColorPaletteOutline style={{ fontSize: "1.75rem" }} />
                  ),
                  label: "Color list",
                },
              ],
            },
            {
              key: "orders",
              icon: <LuClipboardList style={{ fontSize: "1.75rem" }} />,
              label: "Orders",
            },
            {
              key: "blogs ",
              icon: <FaBloggerB style={{ fontSize: "1.75rem" }} />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <MdLibraryAdd style={{ fontSize: "1.75rem" }} />,
                  label: "Add blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB style={{ fontSize: "1.57rem" }} />,
                  label: "Blog list",
                },
                {
                  key: "blog-category",
                  icon: <MdLibraryAdd style={{ fontSize: "1.75rem" }} />,
                  label: "Add blog category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB style={{ fontSize: "1.75rem" }} />,
                  label: "Blog category list",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <SlQuestion style={{ fontSize: "1.75rem" }} />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-10 align-items-center">
            <div className="position-relative">
              <IoMdNotifications style={{ fontSize: "1.75rem" }} />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div>
                <img
                  src="https://imgs.search.brave.com/XyybVh4bveQ0jbMPdGBSfreD6h0SJEXPfeaDtautxS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYWls/eWNvbGxlZ2lhbi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDIvTG9pcy5G/YW1pbHktR3V5LTkw/MHg2MzgucG5n"
                  style={{ width: "40px", height: "40px" }}
                  alt="user"
                />
              </div>
              <div>
                <h5 className="mb-0">Patrick</h5>
                <p className="mb-0">patrickmutua@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
