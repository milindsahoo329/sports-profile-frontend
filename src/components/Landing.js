import Container from 'react-bootstrap/Container';
import { Button, Card, Space } from 'antd';
import { Link } from 'react-router-dom';
import "./Landing.css";
import profilelogo from '../images/profile.png';
import multiprofilelogo from '../images/multiprofiles.png';
const { Meta } = Card;


const LandingPage = ({}) => {

    return (
        <div className="App">
            <Container className="title-container">
                <h2 className="page-title">MANAGE PLAYER PROFILES</h2>
            </Container>
            <Container className="main-container">
                <Space className="card-holder" wrap>
                    <Link to={"/create"}>
                        <Card 
                            className='landing-cards'
                            hoverable
                            cover={<img alt="example" src={profilelogo} />}
                        >
                        <Meta title="Create Profile" description="Form to create a player profile" />
                        </Card>
                    </Link>
                    <Link to={"/view"}>
                        <Card 
                            className='landing-cards'
                            hoverable
                            cover={<img alt="example" src={multiprofilelogo} />}
                        >
                        <Meta title="View All Profiles" description="List all the player profiles" />
                        </Card>
                    </Link>
                </Space>
            </Container>
        </div>
    );

};

export default LandingPage;

