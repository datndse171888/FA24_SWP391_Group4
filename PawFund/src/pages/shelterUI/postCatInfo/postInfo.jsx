import React from 'react'
import Header from '../../../component/header/header';
import './postInfo.css';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../../../Image/cat/cat05.jpg';
const postInfo = () => {


  return (
    <div>
      <Header />
      <Container className='bodyPostCat'>
        <div >
          <h1 className='titleInfoCat mx-auto'>Information of cat</h1>
        </div>
        <Row>
          <Col className='colum1'>
            <div >
              <p className='titleimg'>Image:</p>
              <input type='file' name="image" required className='imgPostCat' /> <br />
            </div>
          </Col>

          <Col>
            <form className='formPostCat'>

              <div className='infoPostCat '>
                <p className='titlepost'>Name:</p>
                <input type="text" name="name" required className='editlabel' /> <br />

                <p className='titlepost'> Color: </p>
                <input type="text" name="color" required className='editlabel' /> <br />

                <p className='titlepost'>  Gender:</p>
                <input type="text" name='gender' required className='editlabel' /> <br />

                <p className='titlepost'>Age:</p>
                <input type="text" name='age' required className='editlabel' /> <br />

                <p className='titlepost'>  Weight:</p>
                <input type="text" name='weight' required className='editlabel' /> <br />
                <p className='titlepost'>Breed:</p>
                <input type="text" name='breed' required className='editlabel' /> <br />
                <p className='titlepost'> Sterilization:</p>
                <input type="text" name='sterilization' required className='editlabel' /> <br />

                <p className='titlepost'>  Vaccination:</p>
                <input type="text" name='vaccination' required className='editlabel' /> <br />

                <p className='titlepost'>Status:</p>
                <input type="text" name='status' required className='editlabel' /> <br />


              </div>
            </form>
          </Col>

        </Row>
        <div className='btnPostCat'>
          <button className='btnPost'>Post</button>
        </div>
      </Container>
    </div>

  )
}

export default postInfo
