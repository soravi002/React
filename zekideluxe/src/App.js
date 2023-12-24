import React from 'react';
import { Container, Navbar, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
    <>
        <div className="App">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Mon Application</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="#features">Fonctionnalités</Nav.Link>
                    <Nav.Link href="#pricing">Tarifs</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container style={{ paddingTop: '20px' }}>
                <h1>Titre de la Page</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Carte 1</Card.Title>
                            <Card.Text>
                                Ceci est la description de la première carte.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Carte 2</Card.Title>
                            <Card.Text>
                                Ceci est la description de la deuxième carte.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Carte 3</Card.Title>
                            <Card.Text>
                                Ceci est la description de la troisième carte.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    </>
    );
}

export default App;