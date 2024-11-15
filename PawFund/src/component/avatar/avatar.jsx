import { useState } from 'react'
import { Image, Offcanvas, ListGroup } from 'react-bootstrap'
import DefaultAvatar from '../../Image/defaultAvatar.png'
import './avatar.css'

const avatar = () => {

    const [profile, setProfile] = useState({
        avatar: '',
        name: ''
    })

    const [showCanvas, setShowCanvas] = useState(false)

    const handleShowCanvas = () => {
        setShowCanvas(!showCanvas)
    }

    const logout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    // get data from api => get profile

    return (
        <div>
            <Image
                src={profile && profile.avatar ? profile.avatar : DefaultAvatar}
                id='avatar' alt='Avatar'
                onClick={handleShowCanvas}
                roundedCircle />
            <Offcanvas show={showCanvas} onHide={handleShowCanvas} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{profile.name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup >
                        <ListGroup.Item action href="/">
                            Profile
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={logout}>
                            Logout
                        </ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default avatar
