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
const { RangePicker } = DatePicker;
const { TextArea } = Input;


const EditProfile = ({}) => {

    let params = useParams();

    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        const retrieveProfileInfo = () => {
            ProfilesService.getProfileById(params.id)
                .then(response => {
                    // console.log(response);
                    setProfileInfo(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        };
        retrieveProfileInfo();
    }, [params.id]);

    const [componentDisabled, setComponentDisabled] = useState(true);
    const [hideEditButton, setHideEditButton] = useState(false);

    const handleEdit = () => {
        setComponentDisabled(false);
        setHideEditButton(true);
    };

    const handleDiscard = () => {
        ProfilesService.getProfileById(params.id)
                .then(response => {
                    // console.log(response);
                    setProfileInfo(response.data);
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

    return (
        <div className="App">
            <Container className="title-container">
                <h2 className="page-title">EDIT PLAYER PROFILES</h2>
            </Container>
            <Container className="main-container">

            <Button className='edit-profile' onClick={handleEdit} disabled={hideEditButton}>Edit Profile</Button>
            
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 24 }}
                layout="vertical"
                className="form-control"
                disabled={componentDisabled}
            >
            <Form.Item label="Name">
                <Input placeholder={profileInfo.name}/>
            </Form.Item>

            <Form.Item label="Date Of Birth">
                <DatePicker placeholder={profileInfo.date_of_birth} />
            </Form.Item>

            <Form.Item label="Location">
                <Input placeholder={profileInfo.location}/>
            </Form.Item>

            <Form.Item label="Team">
                <Input placeholder={profileInfo.team}/>
            </Form.Item>

            <Form.Item label="Gender">
                <Radio.Group defaultValue={getGenderValue(profileInfo.gender)}>
                    <Radio value={1}> Male </Radio>
                    <Radio value={2}> Female </Radio>
                    <Radio value={3}> Transgender </Radio>
                    <Radio value={4}> Prefer Not to Say </Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item label="About">
                <TextArea placeholder={profileInfo.about} rows={4} />
            </Form.Item>

            <Form.Item label="Interests">
                <TextArea placeholder={profileInfo.interests}rows={4} />
            </Form.Item>

            <Form.Item>
                <Button className='submit-profile'>Submit</Button>
                <Button className='submit-profile' onClick={handleDiscard}>Discard</Button>
                <Link to={"/view"}>
                    <Button className='back-button'>Back</Button>
                </Link>
            </Form.Item>
            </Form>
            </Container>
        </div>
    );

};

export default EditProfile;

