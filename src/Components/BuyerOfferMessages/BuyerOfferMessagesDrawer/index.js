import React, { useState } from 'react'
import cn from 'classnames'
import styles from './BuyerOfferMessagesDrawer.module.scss'
import { User7 } from '../../../assets/images'

const BuyerOfferMessagesDrawer = ({
  details: { userName, price, message, status, time }
}) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => setShowDetails(!showDetails)

  return (
    <div
      className={cn(
        styles['buyer__wrapper'],
        !showDetails && styles['buyer__wrapper--hidden']
      )}
    >
      <div className={styles.buyer__header}>
        <img src={User7} alt='user-avatar' />
        {userName}
      </div>
      <div
        className={cn(
          styles.buyer__details,
          !showDetails && styles['buyer__details--hidden']
        )}
      >
        <div className={styles['grid--colums']}>
          <span>
            <b>Price: </b>
            {price}
          </span>
          <span>
            <b>Location: </b>
            {`Chile`}
          </span>
        </div>
        <div className={styles['grid--colums']}>
          <span>
            <b>Status: </b>
            {status}
          </span>
          <span>
            <b>Time: </b>
            {time}
          </span>
        </div>
        <div>
          <b>Message: </b>
          {message}
        </div>
      </div>
      <div
        className={cn(
          styles['toggle__icon'],
          showDetails && styles['toggle__icon--rotate']
        )}
        onClick={toggleDetails}
      >
        View Details{' '}
        <svg
          width='12'
          height='7'
          viewBox='0 0 12 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.88086 6.03711C6.08594 6.24219 6.37305 6.24219 6.57812 6.03711L11.3359 1.23828C11.541 1.0332 11.541 0.705078 11.3359 0.541016L11.0488 0.253906C10.8438 0.0488281 10.5566 0.0488281 10.3516 0.253906L6.25 4.4375L2.10742 0.212891C1.90234 0.0488281 1.61523 0.0488281 1.41016 0.212891L1.12305 0.541016C0.917969 0.705078 0.917969 1.0332 1.12305 1.23828L5.88086 6.03711Z'
            fill='#414141'
          />
        </svg>
      </div>
    </div>
  )
}

export default BuyerOfferMessagesDrawer
