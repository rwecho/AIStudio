"use client";
import { Button, Form, Input } from "antd";
import MainLayout from "../components/MainLayout";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";

const ContactPage = () => {
  const handleFinish = async (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    debugger;
    try {
      await axios.post("/api/contact", values);
      alert("感谢你的反馈！我们会尽快回复你。");
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-6">
          Have questions or feedback? Reach out to us using the form below or
          email us directly at{" "}
          <a
            href="mailto:rwecho@live.com"
            className="text-blue-600 hover:underline"
          >
            rwecho@live.com
          </a>
          .
        </p>

        <Form layout="vertical" onFinish={handleFinish}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="your.email@example.com" />
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <TextArea rows={4} placeholder="Your message" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
