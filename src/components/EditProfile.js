import Container from 'react-bootstrap/Container';
import { Link, useParams } from 'react-router-dom';
import "./EditProfile.css";
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState, useCallback } from 'react';
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
import ProfilesService from '../services/ProfilesService';
import moment from "moment";
const { RangePicker } = DatePicker;
const { TextArea } = Input;


const EditProfile = ({}) => {

    let params = useParams();
    const dateFormat = "YYYY-MM-DD";

    const [form] = Form.useForm();

    const [profileInfo, setProfileInfo] = useState({});

    const retrieveProfileInfo = useCallback(() => {
        ProfilesService.getProfileById(params.id)
                .then(response => {
                    // console.log(response.data);
                    let data = response.data;
                    data['datepicker'] = data.date_of_birth.split("T")[0];
                    data['gender'] = getGenderValue(data.gender);
                    setProfileInfo(data);
                    // console.log(profileInfo);
                    form.setFieldsValue({
                        name: data.name,
                        gender: data.genderVal,
                        location: data.location,
                        about: data.about,
                        interests: data.interests,
                        team: data.team
                    });
                })
                .catch(e => {
                    console.log(e);
                });
    }, []);

    useEffect(() => {
        retrieveProfileInfo();
    }, [retrieveProfileInfo]);

    const [componentDisabled, setComponentDisabled] = useState(true);
    const [hideEditButton, setHideEditButton] = useState(false);

    const handleEdit = () => {
        setComponentDisabled(false);
        setHideEditButton(true);
    };

    const handleDiscard = () => {
        ProfilesService.getProfileById(params.id)
                .then(response => {
                    let data = response.data;
                    data['datepicker'] = data.date_of_birth.split("T")[0];
                    data['gender'] = getGenderValue(data.gender);
                    setProfileInfo(data);
                })
                .catch(e => {
                    console.log(e);
                });
        setComponentDisabled(true);
        setHideEditButton(false);
    };

    const getGenderValue = (genderName) => {

        if ( genderName == 'Male') {
            return 1;
        } else if (genderName == 'Female') {
            return 2;
        } else if(genderName == 'Transgender') {
            return 3;
        } else {
            return 4;
        }

    }

    const getGenderString = (genderValue) => {

        if ( genderValue == 1) {
            return "Male";
        } else if (genderValue == 2) {
            return "Female";
        } else if(genderValue == 3) {
            return "Transgender";
        } else {
            return "Prefer Not To Say";
        }

    }

    const onFinish = (values) => {

        let payload = {
            id : params.id,
            name : values.name,
            dob : ((Number(values.dob['$M'])+1)+"-"+values.dob['$D']+"-"+values.dob['$y']),
            location : values.location,
            interests : values.interests,
            team : values.team,
            gender : getGenderString(values.gender),
            about : values.about
        }

        ProfilesService.editProfile(payload)
            .then((response) => {
                console.log(response);
            });

        setComponentDisabled(true);
        setHideEditButton(false);

        // navigate('/view');
    };

    return (
        <div className="App">
            <Container className="title-container">
                <h2 className="page-title">EDIT PLAYER PROFILES</h2>
            </Container>
            <Container className="main-container">

            <Button className='edit-profile' onClick={handleEdit} disabled={hideEditButton}>Edit Profile</Button>
            
            <Form
                form = {form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 24 }}
                layout="vertical"
                className="form-control"
                disabled={componentDisabled}
                onFinish={onFinish}
            >
            <Form.Item label="Name" name="name" rules={[
                    {
                      required: true,
                      message: "Please input your Name!"
                    }
                ]}>
                <Input name="name" />
            </Form.Item>

            <Form.Item label="Date Of Birth" name="dob" rules={[
                    {
                      required: true,
                      message: "Please input your Date of Birth!"
                    }
                ]}>
                <DatePicker name = "dob" />
            </Form.Item>

            <Form.Item label="Location" name="location" rules={[
                    {
                      required: true,
                      message: "Please input your Location!"
                    }
                ]}>
                <Input name="location"/>
            </Form.Item>

            <Form.Item label="Team" name="team" rules={[
                    {
                      required: true,
                      message: "Please input your Team!"
                    }
                ]}>
                <Input name="team"/>
            </Form.Item>

            <Form.Item label="Gender" name="gender" rules={[
                    {
                      required: true,
                      message: "Please input your Gender!"
                    }
                ]}>
                <Radio.Group name="gender">
                    <Radio value={1}> Male </Radio>
                    <Radio value={2}> Female </Radio>
                    <Radio value={3}> Transgender </Radio>
                    <Radio value={4}> Prefer Not to Say </Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item label="About" name="about" rules={[
                    {
                      required: false
                    }
                ]}>
                <TextArea name="about" rows={4} />
            </Form.Item>

            <Form.Item label="Interests" name="interests" rules={[
                    {
                      required: false
                    }
                ]}>
                <TextArea name="interests" rows={4} />
            </Form.Item>

            <Form.Item>
                <Button className='submit-profile' htmlType='submit'>Submit</Button>
                <Button className='submit-profile' onClick={handleDiscard}>Discard</Button>
            </Form.Item>
            </Form>
            </Container>
            <Link to={"/view"}>
                    <Button className='back-button'>Back</Button>
            </Link>
        </div>
    );

};

export default EditProfile;

