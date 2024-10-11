import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Logo from '../../Image/logo/SWP391.png'

const footer = () => {
    const shelterInfo = [{
        name: 'PawFund',
        address: '48 Bùi Thị Xuân',
        city: 'Thành phố X giấu tên',
        phone: '09099994953',
        openTime: '07:00',
        closeTime: '20:00',
        openDay: 'Thứ 2 - Chủ Nhật'
    }]

    return (
        <Container className='d-flex align-self-end row justify-content-around mx-auto'>
            <Image src={Logo} className='col-3 mx-auto' alt='Logo' roundedCircle />
            <div className='col-4 align-self-center mx-auto'>
                <p>Địa chỉ: {shelterInfo[0].address}, {shelterInfo[0].city}</p>
                <p>Điện thoại: {shelterInfo[0].phone}</p>
            </div>
            <div className='col-4 align-self-center mx-auto'>
                <p>Giờ mở cửa: {shelterInfo[0].openTime} - {shelterInfo[0].closeTime}</p>
                <p>Ngày mở cửa: {shelterInfo[0].openDay}</p>
            </div>
        </Container>
    )
}

export default footer
