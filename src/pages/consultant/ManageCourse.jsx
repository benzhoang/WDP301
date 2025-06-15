import React, { useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import "../../styles/ManageCourse.scss";

const ManageCourse = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    { title: "Course ID", dataIndex: "courseId", key: "courseId" },
    { title: "Course Name", dataIndex: "courseName", key: "courseName" },
    { title: "Instructor", dataIndex: "instructor", key: "instructor" },
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
      courseId: "CS001",
      courseName: "Introduction to Programming",
      instructor: "John Doe",
      date: "2025-06-15",
    },
    {
      key: 2,
      courseId: "CS002",
      courseName: "Web Development Basics",
      instructor: "Jane Smith",
      date: "2025-06-14",
    },
    {
      key: 3,
      courseId: "CS003",
      courseName: "Data Science Fundamentals",
      instructor: "Bob Johnson",
      date: "2025-06-13",
    },
    {
      key: 4,
      courseId: "CS004",
      courseName: "Machine Learning 101",
      instructor: "Alice Brown",
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
        className="course-table"
      />
      <Button
        className="add-btn"
        onClick={showModal}
        style={{ marginTop: "20px" }}
      >
        + Add new course
      </Button>
      <Modal
        title="Add New Course"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="courseId"
            label="Course ID"
            rules={[{ required: true, message: "Please input the course ID!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="courseName"
            label="Course Name"
            rules={[
              { required: true, message: "Please input the course name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="instructor"
            label="Instructor"
            rules={[
              { required: true, message: "Please input the instructor!" },
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
        </Form>
      </Modal>
    </div>
  );
};

export default ManageCourse;
