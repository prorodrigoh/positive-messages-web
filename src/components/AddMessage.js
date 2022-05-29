import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'antd';

export default function AddMessage() {
  let navigate = useNavigate();

  const [newQuote, setNewQuote] = useState({message: ''})
  const [error, setError] = useState('');

  // CONTEXT - setLastQuote with the last message

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://goodvibesrepo-api.web.app/addnew', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newQuote),
    })
      .then(() => navigate('/messages'))
      .catch(setError);
  }

  const handleChange = (e) => {
    setNewQuote({
      [e.target.name]: e.target.value,
      'createdAt': Date.now()
    });
  }

  return (
    <Row>
      <Col span={8} />
        <Col span={8} >
          <section style={{ margin: '2em 1em' }}>
            <h1>Add New Message</h1>
            {error && <h2 style={{ color: 'red' }}>{error}</h2>}

            <form onSubmit={handleSubmit}>
              <label> Message: 
                <input name="message" type="text" value={newQuote.message}
                  onChange={handleChange} />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>

          </section>
        </Col>
      <Col span={8} />
    </Row>
  )
}
