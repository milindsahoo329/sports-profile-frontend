import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import "./CreateProfile.css";
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';
import { useNavigate } from "react-router-dom";
import ProfilesService from '../services/ProfilesService';
const { RangePicker } = DatePicker;
const { TextArea } = Input;


const CreateProfile = ({}) => {

    const navigate = useNavigate();

    const onFinish = (values) => {

        let payload = {
            name : values.name,
            dob : ((Number(values.dob['$M'])+1)+"-"+values.dob['$D']+"-"+values.dob['$y']),
            location : values.location,
            interests : values.interests,
            team : values.team,
            gender : values.gender,
            about : values.about
        }

        ProfilesService.createProfile(payload)
            .then((response) => {
                // console.log(response);
            })

        navigate('/view');
    };

    return (
        <div className="App">
            <Container className="title-container">
                <h2 className="page-title">CREATE A PLAYER PROFILE</h2>
            </Container>
            <Container className="main-container">
            
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 24 }}
                layout="vertical"
                className="form-control"
                onFinish={onFinish}
            >
            <Form.Item 
                label="Name" 
                name="name"
                rules={[
                    {
                      required: true,
                      message: "Please input your name!"
                    }
                ]}>
                <Input name="name"/>
            </Form.Item>

            <Form.Item 
                label="Date Of Birth"
                name="dob"
                rules={[
                    {
                      required: true,
                      message: "Please input your Date of Birth!"
                    }
                ]}>
                <DatePicker name="dob" />
            </Form.Item>

            <Form.Item 
                label="Location"
                name="location"
                rules={[
                    {
                      required: true,
                      message: "Please input your Location!"
                    }
                ]}>
                <Input name="location"/>
            </Form.Item>

            <Form.Item 
                label="Team"
                name="team"
                rules={[
                    {
                      required: true,
                      message: "Please input your Team"
                    }
                ]}>
                <Input name="team"/>
            </Form.Item>

            <Form.Item 
                label="Gender"
                name="gender"
                rules={[
                    {
                      required: true,
                      message: "Please select an option"
                    }
                ]}>
                <Radio.Group name="gender">
                    <Radio value="Male"> Male </Radio>
                    <Radio value="Female"> Female </Radio>
                    <Radio value="Transgender"> Transgender </Radio>
                    <Radio value="NA"> Prefer Not to Say </Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item 
                label="About"
                name="about"
                rules={[
                    {
                      required: false
                    }
                ]}>
                <TextArea name="about" rows={4} />
            </Form.Item>

            <Form.Item
                label="Interests"
                name="interests"
                rules={[
                    {
                      required: false
                    }
                ]}>
                <TextArea name="interests" rows={4} />
            </Form.Item>

            <Form.Item>
                <Button className="create-profile" htmlType="submit">Create Profile</Button>
                <Link to={"/"}>
                    <Button className='back-button'>Back</Button>
                </Link>
            </Form.Item>
            </Form>
            </Container>
        </div>
    );

};

export default CreateProfile;

