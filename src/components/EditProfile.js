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

const { RangePicker } = DatePicker;
const { TextArea } = Input;


const EditProfile = ({}) => {

    // let params = useParams();
    // const [movie, setMovie] = useState({
    //     id: null,
    //     title: "",
    //     rated: "",
    //     plot: "",
    //     poster: "",
    //     reviews: []
    // });

    // useEffect(() => {

    //     const getMovie = id => {
    //         MovieDataService.getMovieById(id)
    //             .then(response => {
    //                 let movie = {
    //                     id: id,
    //                     title: response.data.title,
    //                     rated: response.data.rated,
    //                     plot: response.data.plot,
    //                     poster: response.data.poster,
    //                     reviews: response.data.reviews
    //                 };
    //                 setMovie(movie);
    //             });
    //     };

    //     getMovie(params.id);

    // }, [params.id]);

    return (
        <div className="App">
            <Container className="title-container">
                <h2 className="page-title">EDIT PLAYER PROFILES</h2>
            </Container>
            <Container className="main-container">
            
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 24 }}
                layout="vertical"
                className="form-control"
            >
            <Form.Item label="Name">
                <Input />
            </Form.Item>

            <Form.Item label="Date Of Birth">
                <DatePicker />
            </Form.Item>

            <Form.Item label="Location">
                <Input />
            </Form.Item>

            <Form.Item label="Team">
                <Input />
            </Form.Item>

            <Form.Item label="Gender">
                <Radio.Group>
                    <Radio value="Male"> Male </Radio>
                    <Radio value="Female"> Female </Radio>
                    <Radio value="Transgender"> Female </Radio>
                    <Radio value="NA"> Prefer Not to Say </Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item label="About">
                <TextArea rows={4} />
            </Form.Item>

            <Form.Item label="Interests">
                <TextArea rows={4} />
            </Form.Item>

            <Form.Item>
                <Button className='create-profile'>Edit Profile</Button>
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

