import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, Select } from "antd";
import "../../styles/ManageBooking.scss";

const { Option } = Select;

const ManageBooking = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    { title: "Booking ID", dataIndex: "bookingId", key: "bookingId" },
    { title: "Customer Name", dataIndex: "customerName", key: "customerName" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Status", dataIndex: "status", key: "status" },
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
      bookingId: "BK001",
      customerName: "Nguyen Van A",
      date: "2025-06-15",
      status: "Confirmed",
    },
    {
      key: 2,
      bookingId: "BK002",
      customerName: "Tran Thi B",
      date: "2025-06-14",
      status: "Pending",
    },
    {
      key: 3,
      bookingId: "BK003",
      customerName: "Le Van C",
      date: "2025-06-13",
      status: "Cancelled",
    },
    {
      key: 4,
      bookingId: "BK004",
      customerName: "Pham Thi D",
      date: "2025-06-12",
      status: "Confirmed",
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
        className="booking-table"
      />
      <Button
        className="add-btn"
        onClick={showModal}
        style={{ marginTop: "20px" }}
      >
        + Add new booking
      </Button>
      <Modal
        title="Add New Booking"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="bookingId"
            label="Booking ID"
            rules={[
              { required: true, message: "Please input the booking ID!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="customerName"
            label="Customer Name"
            rules={[
              { required: true, message: "Please input the customer name!" },
            ]}
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
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select the status!" }]}
          >
            <Select placeholder="Select a status">
              <Option value="Confirmed">Confirmed</Option>
              <Option value="Pending">Pending</Option>
              <Option value="Cancelled">Cancelled</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageBooking;
