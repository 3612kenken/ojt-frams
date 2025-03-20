import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';

export default function LogTable() {
  const [logs, setLogs] = useState([]);  // State to store the logs
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null);  // State to manage errors

  // Fetch logs from the API
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/dtrlogs/CL-2024-007');
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            setLogs(data);  // Set the fetched logs to state
            setLoading(false);  // Set loading to false after data is fetched
        } catch (error) {
            setError(error.message);  // Handle error if any
            setLoading(false);
        }
    };
    
    fetchData();
}, []);  // Empty dependency array means this will run only on mount


  
  
  
  if (loading) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <Spinner animation="border" variant="primary" />
            <p>Loading...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12}>
          <h3 className="text-center my-4">Employee Log Table</h3>
          <Table striped bordered hover responsive>
  <thead>
    <tr>
    <th>Date</th>
     <th>Month</th>
      
      <th>Time In AM</th>
      <th>Time Out AM</th>
      <th>Time In PM</th>
      <th>Time Out PM</th>
      <th>Time In OT</th>
      <th>Time Out OT</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
                        {logs.map((log) => (
                            <tr key={log._id}>
                            
                               
                                <td>{new Date(log.day).toLocaleDateString('en-US')}</td>
                                <td>{new Date(log.day).toLocaleDateString('en-US', { month: 'long' })}</td>
                                <td>{log.time_in_am}</td>
                                <td>{log.time_out_am}</td>
                                <td>{log.time_in_pm}</td>
                                <td>{log.time_out_pm}</td>
                                <td>{log.time_in_ot}</td>
                                <td>{log.time_out_ot}</td>
                                <td>{log.status}</td>
                            </tr>
                        ))}
                    </tbody>
</Table>


        </Col>
      </Row>
    </Container>
  );
}
