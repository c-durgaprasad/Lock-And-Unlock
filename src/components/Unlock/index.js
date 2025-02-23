// Write your code here
import {useState} from 'react'
import {BgContainer, LockImg, LockHeading, LockButton} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)
  const lockButtonClicked = () => {
    setLock(prev => !prev)
  }
  const imageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const lockText = isLocked
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  const buttonText = isLocked ? 'Unlock' : 'Lock'
  const imgAlt = isLocked ? 'lock' : 'unlock'

  return (
    <BgContainer>
      <LockImg src={imageUrl} alt={imgAlt} />
      <LockHeading>{lockText}</LockHeading>
      <LockButton type="button" onClick={lockButtonClicked}>
        {buttonText}
      </LockButton>
    </BgContainer>
  )
}

export default Unlock
