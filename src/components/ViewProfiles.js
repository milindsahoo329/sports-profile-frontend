import Container from 'react-bootstrap/Container';
import { Button, Space } from 'antd';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import "./ViewProfiles.css";
import profilelogo from '../images/profile.png';
import multiprofilelogo from '../images/multiprofiles.png';
const { Meta } = Card;


const ViewProfiles = ({}) => {

    return (
        <div className="App">
            <Container className="title-container">
                <h2 className="page-title">ALL PLAYER PROFILES</h2>
            </Container>
            <Container className="main-container">
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                    <Col span={8}>
                        <Link to={"/edit"}>
                            <Card title="Card title" bordered={false} hoverable>
                                Card content
                            </Card>
                        </Link>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={true} hoverable>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false} hoverable>
                            Card content
                        </Card>
                    </Col>
                    </Row>
                </div>
                <div className='back-button'>
                    <Link to={"/"}>
                        <Button>Back</Button>
                    </Link>
                </div>
            </Container>
        </div>
    );

};

export default ViewProfiles;


