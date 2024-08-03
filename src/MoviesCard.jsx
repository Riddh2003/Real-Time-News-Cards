import { Badge, Card, Col, Container, Row } from "react-bootstrap";
function MoviesCard() {
    return (
        <Container style={{width:'100vw',display:'flex',flexDirection:'column'}}>
            <h1 className="mb-4 text-primary">MOVIE CARDS</h1>
            <Row >
                <Col className="mb-3">
                    <Card style={{ width: '20rem', borderRadius: '10px', backgroundColor: 'black', color: 'white', padding: '10px', flexDirection: 'column', textAlign: 'start' }}>
                        <Card.Header className="bg-transparent"><Badge>RELEASED</Badge></Card.Header>
                        <Card.Img variant="top" style={{ width: '100%', height: '250px', borderRadius: '10px' }} src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg" />
                        <Card.Body>
                            <Card.Title>INCEPTION</Card.Title>
                            <Card.Text>
                                Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced ...
                            </Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Leonardo DiCaprio, Cillian Murphy</Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Science fiction, Action</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '20rem', borderRadius: '10px', backgroundColor: 'black', color: 'white', padding: '10px', flexDirection: 'column', textAlign: 'start' }}>
                        <Card.Header className="bg-transparent"><Badge bg="success">UPCOMING</Badge></Card.Header>
                        <Card.Img variant="top" style={{ width: '100%', height: '250px', borderRadius: '10px' }} src="https://assetscdn1.paytm.com/images/cinema/pushpa-2-(1)-(1)-ff7e1f10-fbfc-11ee-bfde-1dbbef51e33c.jpg" />
                        <Card.Body>
                            <Card.Title>Pushpa 2: The Rule</Card.Title>
                            <Card.Text>
                                The Rule is an upcoming Indian action drama film directed and written by Sukumar under his banner Sukumar Writings and produced ...
                            </Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Allu Arjun, Fahadh Faasil, Rashmika Mandanna</Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Drama, Action</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '20rem', borderRadius: '10px', backgroundColor: 'black', color: 'white', padding: '10px', flexDirection: 'column', textAlign: 'start' }}>
                        <Card.Header className="bg-transparent"><Badge>NOW SHOWING</Badge></Card.Header>
                        <Card.Img variant="top" style={{ width: '100%', height: '250px', borderRadius: '10px' }} src="https://m.media-amazon.com/images/S/pv-target-images/855e8bb647c4a3ccfcdceb8d8d354ffc1df41908b203322b96c6683a0a070f0a._SX1080_FMjpg_.jpg" />
                        <Card.Body>
                            <Card.Title>MIRZAPUR: SEASON 3</Card.Title>
                            <Card.Text>
                                This action-packed crime drama boasts a dedicated fanbase, with its characters and memes achieving internet fame.
                            </Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Pankaj Tripathi, Shweta Tripathi, Divyendu Sharma, Ali Fazal</Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Action, Crime</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '20rem', borderRadius: '10px', backgroundColor: 'black', color: 'white', padding: '10px', flexDirection: 'column', textAlign: 'start' }}>
                        <Card.Header className="bg-transparent"><Badge>RELEASED</Badge></Card.Header>
                        <Card.Img variant="top" style={{ width: '100%', height: '250px', borderRadius: '10px' }} src="https://images.news18.com/ibnlive/uploads/2023/09/srk-jawan-tickets-16939872993x2.jpg?impolicy=website&width=640&height=480" />
                        <Card.Body>
                            <Card.Title>JAWAN</Card.Title>
                            <Card.Text>
                                Jawan is a 2023 Indian Hindi-language action thriller film co-written and directed by Atlee ...
                            </Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Shah Rukh Khan, Nayanthara, Vijay Sethupathi, Deepika Padukone</Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Thriller, Action</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '20rem', borderRadius: '10px', backgroundColor: 'black', color: 'white', padding: '10px', flexDirection: 'column', textAlign: 'start' }}>
                        <Card.Header className="bg-transparent"><Badge>RELEASED</Badge></Card.Header>
                        <Card.Img variant="top" style={{ width: '100%', height: '250px', borderRadius: '10px' }} src="https://m.economictimes.com/thumb/msid-96029666,width-1200,height-900,resizemode-4,imgsize-65784/pathaan-poster-release-srk-returns-with-a-bang-in-new-film-check-here.jpg" />
                        <Card.Body>
                            <Card.Title>PATHAAN</Card.Title>
                            <Card.Text>
                                One of the most famous movie genres is action. These films usually feature high-octane action, fights, stunts, and chase sequences.
                            </Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>
                                Shah Rukh Khan,
                                Deepika Padukone,
                                John Abraham,
                                Dimple Kapadia,
                                Ashutosh Rana</Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Chase Sequences, Fights</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '20rem', borderRadius: '10px', backgroundColor: 'black', color: 'white', padding: '10px', flexDirection: 'column', textAlign: 'start' }}>
                        <Card.Header className="bg-transparent"><Badge bg="success">UPCOMING</Badge></Card.Header>
                        <Card.Img variant="top" style={{ width: '100%', height: '250px', borderRadius: '10px' }} src="https://images.mid-day.com/images/images/2024/mar/sigham-ajay-a_d.jpg" />
                        <Card.Body>
                            <Card.Title>SINGHAM AGAIN</Card.Title>
                            <Card.Text>
                                Singham Again is an upcoming Indian Hindi-language action film directed by Rohit Shetty, who also co-produced it under Rohit Shetty ...
                            </Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>
                                Ajay Devgn,
                                Akshay Kumar,
                                Deepika Padukone
                            </Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Thriller, Comedy, Action</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '20rem', borderRadius: '10px', backgroundColor: 'black', color: 'white', padding: '10px', flexDirection: 'column', textAlign: 'start' }}>
                        <Card.Header className="bg-transparent"><Badge>RELEASED</Badge></Card.Header>
                        <Card.Img variant="top" style={{ width: '100%', height: '250px', borderRadius: '10px' }} src="https://miro.medium.com/v2/resize:fit:1400/1*xpw5SSE7evQhgq2_8_RtDw.gif" />
                        <Card.Body>
                            <Card.Title>THE INCREDIBLE HULK</Card.Title>
                            <Card.Text>
                                The Incredible Hulk is a 2008 American superhero film based on the Marvel Comics character the Hulk. Produced by Marvel Studios ...
                            </Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>
                                Edward Norton,
                                Liv Tyler,
                                Tim Roth</Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Superhero, Character</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '20rem', borderRadius: '10px', backgroundColor: 'black', color: 'white', padding: '10px', flexDirection: 'column', textAlign: 'start' }}>
                        <Card.Header className="bg-transparent"><Badge>RELEASED</Badge></Card.Header>
                        <Card.Img variant="top" style={{ width: '100%', height: '250px', borderRadius: '10px' }} src="https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg" />
                        <Card.Body>
                            <Card.Title>BLACK ADAM</Card.Title>
                            <Card.Text>
                            Black Adam is a 2022 American superhero film based on the DC character of the same name. Produced by New Line Cinema, DC Films ...
                            </Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>
                                Dwayne Johnson,
                                Pierce Brosnan,
                                Aldis Hodge,
                                Quintessa Swindell</Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Superhero, Action</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '20rem', borderRadius: '10px', backgroundColor: 'black', color: 'white', padding: '10px', flexDirection: 'column', textAlign: 'start' }}>
                        <Card.Header className="bg-transparent"><Badge bg="success">UPCOMING</Badge></Card.Header>
                        <Card.Img variant="top" style={{ width: '100%', height: '250px', borderRadius: '10px' }} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00369379-dhbwyndsaj-portrait.jpg" />
                        <Card.Body>
                            <Card.Title>WELCOME TO THE JUNGLE</Card.Title>
                            <Card.Text>
                            Welcome to the Jungle is scheduled to be released on 27 December 2024. The film is directed by Ahmed Khan and is written by Farhad Samji.
                            </Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Akshay Kumar, Sanjay Dutt</Card.Text>
                            <Card.Text style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Comedy, Drama</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default MoviesCard;