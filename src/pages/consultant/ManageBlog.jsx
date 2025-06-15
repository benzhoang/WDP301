import React, { useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import "../../styles/ManageBlog.scss";

const ManageBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    { title: "Blog ID", dataIndex: "blogId", key: "blogId" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Author", dataIndex: "author", key: "author" },
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "View",
      key: "view",
      render: () => <Button className="view-btn">👁️</Button>,
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button className="delete-btn">🗑️</Button>,
    },
  ];

  const data = [
    {
      key: 1,
      blogId: "BL001",
      title: "Introduction to AI",
      author: "John Doe",
      date: "2025-06-15",
    },
    {
      key: 2,
      blogId: "BL002",
      title: "Machine Learning Basics",
      author: "Jane Smith",
      date: "2025-06-14",
    },
    {
      key: 3,
      blogId: "BL003",
      title: "Deep Learning Trends",
      author: "Bob Johnson",
      date: "2025-06-13",
    },
    {
      key: 4,
      blogId: "BL004",
      title: "AI in Healthcare",
      author: "Alice Brown",
      date: "2025-06-12",
    },
  ];

  const [form] = Form.useForm();

  const paginationConfig = {
    current: currentPage,
    total: 272,
    pageSize: 4,
    onChange: (page) => setCurrentPage(page),
    showSizeChanger: false,
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form values:", values);
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div className="container">
      <Table
        columns={columns}
        dataSource={data}
        pagination={paginationConfig}
        className="blog-table"
      />
      <Button
        className="add-btn"
        onClick={showModal}
        style={{ marginTop: "20px" }}
      >
        + Add new blog
      </Button>
      <Modal
        title="Add New Blog"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="blogId"
            label="Blog ID"
            rules={[{ required: true, message: "Please input the blog ID!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="author"
            label="Author"
            rules={[{ required: true, message: "Please input the author!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please input the date!" }]}
          >
            <Input type="date" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageBlog;
