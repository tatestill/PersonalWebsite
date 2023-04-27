import { Row, Col, Button} from "react-bootstrap"
import React from "react"
import { Document, Page } from "react-pdf"
import instructions from '../Documents/StillINSTRUCTIONS.pdf'
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
export function TechnicalWritingPage (){ 
    return(
        <Row className = "App-homepage">
            <Row>
                <h1 style ={{paddingTop:"15px"}}>Instructions</h1>
                <div style={{fontSize: "15px"}}>Instructions about a skateboard truck fix made for a class assignment</div>
            <Col style={{display: "flex", justifyContent: "center", width: "100%", paddingTop: "15px", paddingBottom: "50px"}}>
            <Document file = {instructions}>
                <Page pageNumber={1} renderTextLayer={false} style={{width: "100%"}}/>
                <Row style={{height: "25px"}}></Row>
                <Page pageNumber={2} renderTextLayer={false} style={{width: "100%"}}/>
                <Row style={{height: "25px"}}></Row>
                <Page pageNumber={3} renderTextLayer={false} style={{width: "100%"}}/>
                <Row style={{height: "25px"}}></Row>
                <Page pageNumber={4} renderTextLayer={false} style={{width: "100%"}}/>
                </Document>
            </Col>
            </Row>
            <Row></Row>
        </Row>
    )
}