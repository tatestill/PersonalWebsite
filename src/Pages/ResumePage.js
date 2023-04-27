import { Row, Col, Button} from "react-bootstrap"
import React from "react"
import { Document, Page } from "react-pdf"
import resume from '../Documents/StillRESUME.pdf'
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
export function ResumePage (){ 
    return(
        <Row className = "App-homepage">
            <Row>
                <h1 style ={{paddingTop:"15px"}}>My Resume</h1>
            <Col style={{display: "flex", justifyContent: "center", width: "100%", paddingTop: "15px", paddingBottom: "50px"}}>
            <Document file = {resume}>
                <Page pageNumber={1} renderTextLayer={false} style={{width: "100%"}}/>
                </Document>
            </Col>
            </Row>
            <Row><Col  style = {{ display: "flex", justifyContent: "center", paddingBottom: "50px"}}><a href = {resume} style = {{width: "25%"}}><Button >Download PDF</Button></a></Col></Row>
        </Row>
    )
}