import React from 'react'
import styles from './BuyerOfferMessages.module.scss'
import BuyerOfferMessagesDrawer from './BuyerOfferMessagesDrawer'

const BuyerOfferMessages = () => {


  const users = [
    {
      userName: 'Hulda Parsons',
      price: '$44,500.00',
      message: 'Hi Miguel, I’m offering you this price for this…',
      status: 'Pending',
      time: '11 hours ago'
    },
    {
      userName: 'Hulda Parsons',
      price: '$44,500.00',
      message: 'Hi Miguel, I’m offering you this price for this…',
      status: 'Pending',
      time: '12 hours ago'
    },
    {
      userName: 'Hulda Parsons',
      price: '$44,500.00',
      message: 'Hi Miguel, I’m offering you this price for this…',
      status: 'Pending',
      time: '13 hours ago'
    },
    {
      userName: 'Hulda Parsons',
      price: '$44,500.00',
      message: 'Hi Miguel, I’m offering you this price for this…',
      status: 'Pending',
      time: '14 hours ago'
    }
  ]


  const BuyerOfferMessagesMobile = () => (
    <div className={styles['container--mobile']}>
      <h1>Buyer Offers / Messages</h1>
      <div className={styles.buyer__info}>
        <h2>User Name</h2>
        {users.map(({ userName, price, message, status, time }, index) => {
          const details = { userName, price, message, status, time }
          return (
            <BuyerOfferMessagesDrawer
              key={`buyer-offer-drawer-${time}-${index}`}
              details={details}
            />
          )
        })}
      </div>
    </div>
  )

  return <BuyerOfferMessagesMobile />
}

export default BuyerOfferMessages
