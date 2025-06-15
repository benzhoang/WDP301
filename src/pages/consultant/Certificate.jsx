import React, { useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import "../../styles/Certificate.scss";

const Certificate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    { title: "Course Name", dataIndex: "courseName", key: "courseName" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Link", dataIndex: "link", key: "link" },
    { title: "Finish at", dataIndex: "finishAt", key: "finishAt" },
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
      courseName: "Certificate 1",
      title: "Loreal",
      link: "Sản phẩm cho da nhạy cảm",
      finishAt: "2021-05-15",
    },
    {
      key: 2,
      courseName: "Certificate 1",
      title: "Loreal",
      link: "Sản phẩm cho da nhạy cảm",
      finishAt: "2021-05-15",
    },
    {
      key: 3,
      courseName: "Certificate 1",
      title: "Loreal",
      link: "Sản phẩm cho da nhạy cảm",
      finishAt: "2021-05-15",
    },
    {
      key: 4,
      courseName: "Certificate 1",
      title: "Loreal",
      link: "Sản phẩm cho da nhạy cảm",
      finishAt: "2021-05-15",
    },
    ...Array.from({ length: 268 }, (_, i) => ({
      key: i + 5,
      courseName: "Certificate 1",
      title: "Loreal",
      link: "Sản phẩm cho da nhạy cảm",
      finishAt: "2021-05-15",
    })),
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
        // Thêm logic để xử lý dữ liệu (ví dụ: thêm vào data)
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
        className="certificate-table"
      />
      <Button
        className="add-btn"
        onClick={showModal}
        style={{ marginTop: "20px" }}
      >
        + Add new certificate
      </Button>
      <Modal
        title="Add New Certificate"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true, message: "Please input the content!" }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Certificate;
