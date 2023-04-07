import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Footer(props) { 
    return (
        <Row className='App-footer'>
            <Col style={{paddingTop:'10px', paddingBottom:'4%', paddingLeft:'4%'}}>
                <Row style={{marginTop:'10px', marginBottom:'5px'}}>
                    <Col><h2>Tate Still</h2></Col>
                    <Col><h4>Quick Links</h4></Col>
                    <Col><h4>Contact</h4></Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col xs={4} rowSpan={3}><p>UCF Computer Science Graduate</p></Col>
                            <Col>
                                <Row>
                                    <Col><a className="App-link" href="./" target="_blank" rel="noopener noreferrer">
                                        Home
                                        </a></Col>
                                    <Col><p>tatestill@knights.ucf.edu</p></Col>
                                </Row>
                                <Row>
                                    <Col>                    <a
                        className="App-link"
                        href="https://github.com/tatestill"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Github
                    </a></Col>
                                    <Col><p>(386) 314-3362</p></Col>
                                </Row>
                                <Row>
                                    <Col></Col>
                    <Col></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginBottom:'5px'}}></Row>
            </Col>
      </Row>
    );
}