import { Link } from '@inertiajs/react'
import Button from './Button'
import React, { useEffect, useState } from 'react'

const Card = (props) => {
    const { image, title, likes, description, href, auth, onClickBtn } = props

    const [isUserLike, setIsUserLike] = useState(false)

    useEffect(() => {
        setIsUserLike(likes.some(like => like.user_id === auth.user.id))
    }, [likes])

    return (
        <div className="card">
            <img src={image} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} alt={title} />
            <div className="card-body">
                <span style={{ fontSize: '14px', color: '#6c757d' }}>{likes.length} orang menyukai ini</span>
                <Link href={href} style={{ textDecoration: 'none' }}>
                    <h5 className="card-title">{title}</h5>
                </Link>
                <p className="card-text text-dark" style={{ fontSize: '16px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical' }}>{description}</p>
                <Button type='button' onClick={onClickBtn} className={`${isUserLike ? 'bg-pink text-white' : 'btn-outline-secondary'} d-block w-100`}>
                    {isUserLike ? 'Disukai' : 'Suka'}
                </Button>
            </div>
        </div>
    )
}

export default Card
