import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
export function HomePage (){ 
    return(
        <Row className = "App-homepage">
            <Col>
            <Row>
                <div style = {{marginTop: "50px", marginBottom: "25px"}}>About Tate Still</div>
            </Row>
            <Row style={{justifyContent:"center", borderRadius: "5px"}}>
                <div style={{fontSize: "16px", backgroundColor: "#b8c5e6", color:"black", maxWidth: "50%", borderRadius: "10px", textAlign: "left", textIndent: "20px"}}>
                    <div style={{padding: "15px"}}><p style={{paddingBottom: "0px"}}>Hello, my name is Tate Still and I'm a Computer Science major in my final year at UCF. During my time at UCF, I've taken various coursees to expand my knowledge and abilities in Computer Science.
                    In classes such as Processes for Object Oriented Software Design and Senior Design, I practiced working in agile workflows and developing as part of a team. During Senior Design I worked as a part of a team for RealityFlow, a virtual reality scripting tool.
                    My team was tasked with creating the website and mobile application for Reality Flow, along with the Social UI within the VR app. The link to the site can be found below: </p>
                    
                    <Link to = "https://beta.realityflow.io/" style={{paddingTop:"0px", paddingBottom: "100px"}}>https://beta.realityflow.io/</Link>.
                    <p></p>
                    <p>After four years of UCF I have developed solid understanding of several CompSci tools. I have experience in the following languages: C, C#, Java, Javascript, C++, Python.
                        Other items I have developed profiency with: React, Bootstrap, MongoDB, TensorFlow/Keras, Artifical Intelligence, Unity, Node.js, MySQL, GraphQL, and MongoDB
                    </p>
                    </div></div>
            </Row>
            <Row>
                <div style = {{marginTop: "25px", marginBottom: "25px"}}>Education</div>
            </Row>
            <Row style={{justifyContent:"center", borderRadius: "5px"}}>
                <div style={{fontSize: "16px", backgroundColor: "#b8c5e6", color:"black", maxWidth: "50%", borderRadius: "10px"}}>
                    <Row style={{fontSize: "24px", fontWeight: "bold"}}>
                    <Col>University of Central Florida</Col>
                    <Col>August 2019 to May 2023</Col>
                    </Row>
                    <Row>
                        <Col>
                        GPA : 3.2</Col>
                        <Col>Major: Computer Science</Col>
                    </Row>
                    <Row> <ul style={{listStyleType: "circle"}}><p style={{fontWeight: 'bold', fontSize: "18px", marginBottom:"0px"}}>Relevant Coursework: </p><li> Artifical Intelligence </li> <li>Machine Learning</li>
                    <li>Computer Graphics</li>
                    <li>Robot Vision</li>
                    <li>Processes for Object Oriented Software Design</li> 
                    <li>Security in Computing</li>
                    <li>Systems Software</li></ul></Row>
                </div>
            </Row>
            </Col>
            <Row style={{minHeight: "50px"}}></Row>
        </Row>
    )
}