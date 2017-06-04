import React, { Component } from 'react';
import { Row, Col, Button, Panel } from 'tinper-bee';
import { RichEditorExample } from '../../components/index';

import './index.css';

class MyEditor extends Component{
    constructor(props) {
        super(props);

    }



    render() {


        return (
            <Row>
                <Col md={6}>
                    <Panel className="editor-panel">
                        <RichEditorExample />
                    </Panel>
                </Col>
                <Col md={6}>
                    <Panel className="editor-panel">
                        <RichEditorExample />
                    </Panel>
                </Col>
                <Col md={6}>
                    <Panel className="editor-panel">
                        <RichEditorExample />
                    </Panel>
                </Col>
                <Col md={6}>
                    <Panel className="editor-panel">
                        <RichEditorExample />
                    </Panel>
                </Col>
            </Row>
        );
    }
}


export default MyEditor;