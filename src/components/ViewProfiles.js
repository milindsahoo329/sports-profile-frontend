import Container from 'react-bootstrap/Container';
import { Button, Space } from 'antd';
import { Card, Col, Row } from 'antd';
import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./ViewProfiles.css";
import profilelogo from '../images/profile.png';
import multiprofilelogo from '../images/multiprofiles.png';
import ProfilesService from '../services/ProfilesService';
const { Meta } = Card;


const ViewProfiles = ({}) => {

    const [profiles, setProfiles] = useState([]);

    const retrieveProfiles = useCallback(() => {
        ProfilesService.getAllProfiles()
            .then(response => {
                console.log(response);
                setProfiles(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }, []);

    useEffect(() => {
        retrieveProfiles();
    }, [retrieveProfiles]);

    return (
        <div className="App">
            <Container className="title-container">
                <h2 className="page-title">ALL PLAYER PROFILES</h2>
            </Container>
            <Container className="main-container">
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                    {
                        profiles.map((x) => {
                            return (
                                <Col span={8}>
                                <Link to={"/edit"}>
                                    <Card title={x.name} bordered={false} hoverable>
                                        {"Team - " + x.team + " , " + "Location - " + x.location}
                                    </Card>
                                </Link>
                                </Col>
                            )
                        })
                    }
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


