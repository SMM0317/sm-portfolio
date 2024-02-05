import React from 'react'
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Form, Input, Button, message } from 'antd';
import './Contact.css'
import Footer from '../Footer/Footer';
import emailjs from '@emailjs/browser';

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

const contactDetails = [
    {id : 1, icon: <PhoneOutlined />, details: '9922732105'},
    {id : 2, icon: <MailOutlined />, details: 'swapnilmanale9922@gmail.com'},
    {id : 3, icon: <EnvironmentOutlined />, details: 'Pune, Maharashtra'}
]

const onFinish = (values) => {
  console.log('Received values:', values);

  const customMessage = (
    <div className='message'>
      <p className='messageText'>I'm glad that you tried to contact me using the Contact form.
       But there is a technical issue with the form.
      Please go with Email or Social media.</p>
    </div>
  );

  const templateParams = {
    to_name: 'Swapnil Manale',
    from_name: values.name,
    message: values.message,
    reply_to: values.email,
  };

  emailjs.send('service_n222v4r', 'template_2a53y2i', templateParams, 'Rrz68MBp7A0h6k-ua')
    .then((response) => {
      console.log('Email sent successfully:', response);
      messageApi.success('Email sent successfully!', 5);
    })
    .catch((error) => {
      console.error('Email failed to send:', error);
      messageApi.info(customMessage, 10);
    });

  form.resetFields();
};

  return (
    <section id='contact'>
     <span className='contactText'>Contact</span>
     <div className='lineAnime'></div>
     <div className='contactContainer'>
      <div className='contactDetails'>
        <span className='contactSubText'>Drop Me a Message</span>
        {contactDetails.map((contact) => (
        <div key={contact.id} className='eachContactBox'>
           <div className='iconBox'>{contact.icon}</div>
           <p className='detailText'>{contact.details}</p>
        </div>
        ))}
      </div>
      <div className='contactForm'>
          <Form
            name='contactForm'
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name='name'
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input placeholder='Name' />
            </Form.Item>
            <Form.Item
              name='email'
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Please enter a valid email address!' },
              ]}
            >
              <Input placeholder='Email' />
            </Form.Item>
            <Form.Item
              name='message'
              rules={[{ required: true, message: 'Please enter your message!' }]}
            >
              <TextArea showCount maxLength={1000} placeholder='Message' />
            </Form.Item>
            {contextHolder}
            <Form.Item>
              <Button type='primary' htmlType='submit' className='sendbtn'>
                Send 
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className='divider'></div>
      <Footer/>
    </section>
  )
}

export default Contact