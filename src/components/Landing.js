import Container from 'react-bootstrap/Container';
import { Button, Space } from 'antd';
import "./Landing.css";

const LandingPage = ({}) => {

    return (
        <div className="App">
            <Container className="main-container">
                <Space wrap>
                    <Button type="primary">Create Profile</Button>
                    <Button type="primary">View All Profiles</Button>
                </Space>
            </Container>
        </div>
    );

};

export default LandingPage;

