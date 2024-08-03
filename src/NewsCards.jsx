import React, { useEffect, useState } from 'react';
import { Card, Badge, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
function NewsCards() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get('https://inshorts.vercel.app/news/top')
            .then(response => {
                setNews(response.data.data.articles);
            })
            .catch(error => {
                console.error('There was an error in API!', error);
            })
    }, []);
    return (
        <Container>
            <h1 className="mb-4 mt-4 text-info">NEWS CARDS</h1>
            <Row className="justify-content-md-center">
                {news.map((item, index) => (
                    <Col className="mb-3" key={index}>
                        <Card style={{ width: '20rem', borderRadius: '10px', backgroundColor: 'black', color: 'white', padding: '10px', flexDirection: 'column', textAlign: 'start' }}>
                            <Card.Header className="bg-transparent"><Badge bg="info" text='black'>{Array.isArray(item["categoryNames"])?item["categoryNames"].join(", "):item["categoryNames"]}</Badge></Card.Header>
                            <Card.Img variant="top" src={item["imageUrl"]} style={{ width: '100%', height: '250px', borderRadius: '10px' }} />
                            <Card.Body>
                                <Card.Title>{item["title"]}</Card.Title>
                                <Card.Text>
                                    {item["content"]}
                                </Card.Text>
                                <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Author: {item["authorName"]}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default NewsCards;