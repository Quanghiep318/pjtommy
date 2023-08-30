import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './LoginPage.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

function LoginPage() {
  const [userData, setUserData] = useState([]);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log(userData);
  console.log(loginData);
  const handleSubmit = (event) => {
    event.preventDefault();

    const user = userData.find(
      (user) =>
        user.email === loginData.email &&
        user.password === loginData.password
    );
    console.log(user);
    if (user) {
      // Login successful, you can perform further actions here
      axios
        .patch(`users/${user.id}`, {
          isLogin: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
      localStorage.setItem("isLoginId", user.id);
      console.log("Đăng nhập thành công:", user);
      navigate("/");
    } else {
      // Invalid credentials
      console.log("Sai thông tin đăng nhập");
    }
  };
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
       <div className='LoginNavbar'>TOP/ ログイン</div>
       <div className='LoginPage1'>ログイン</div>
       <div className='LoginPage2'>
        <div className='LoginPage2-1'>
        <h3>会員ログイン</h3>
        <span>オンラインサイトでの登録がお済みのお客様</span><br />
        <div className='LoginPage2-1-2'>
        <div>
          
        </div>
        <Form
        
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <div className='EmailLogin'>
        <div className='EmailLogin1'>
          メールアドレス
          </div>
        <div className='EmailLogin2'>
        <Form.Item
        onSubmit={handleSubmit}
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input 
        type='email'
        name='email'
        value={loginData.email}
        onChange={handleInputChange}  
        prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>次回からメールアドレスの入力を省略する</Checkbox>
        </Form.Item>
        </div>
          
      
      </div>
      <div className='PasswordLogin'>
        <div className='PasswordLogin1'>パスワード</div>
        <div className='PasswordLogin2'><Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleInputChange}
        />
      </Form.Item>
      <a className="login-form-forgot" href="">
      パスワードをお忘れの方はこちら
        </a>
      </div>
      </div>
      
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        
      </Form.Item>
    </Form>
        </div>
        </div>
        <div className='LoginPage2-2'>
          <h3>初めてログインされるお客様</h3>
          <span>店舗で発行された会員カードをお持ちで</span><br />
          <span>オンラインサイトでの登録がお済みではないお客様</span><br />
          <div className='RegitersButton'>新規会員登録</div>
          <span>会員カードをお持ちでないお客様は、</span><br />
          <span>ご注文のタイミングで会員登録が可能です</span><br />
          <span>引き続きお買い物をお楽しみください</span>

        

        </div>
       </div>
       


    </div>
  )
}

export default LoginPage