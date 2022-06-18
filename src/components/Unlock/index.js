import {useState} from 'react'

import {MainContainer, Heading, Button, Image} from './styledComponents'

const Unlock = () => {
  const [lockOpen, setLockOpen] = useState(true)
  const onClickColor = () => {
    setLockOpen(prevState => !prevState)
  }

  return (
    <MainContainer>
      {lockOpen ? (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      {lockOpen ? (
        <Heading>Your Device is Locked</Heading>
      ) : (
        <Heading>Your Device is Unlocked</Heading>
      )}
      {lockOpen ? (
        <Button type="button" onClick={onClickColor}>
          Unlock
        </Button>
      ) : (
        <Button type="button" onClick={onClickColor}>
          Lock
        </Button>
      )}
    </MainContainer>
  )
}

export default Unlock
