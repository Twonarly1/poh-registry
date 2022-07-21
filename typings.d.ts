type Input = {
  setNameSearched: any
  setAddressSearched: any
  submitAddress: any
  enteredText: any
  setEnteredText: any
}

type Submissions = {
  creationTime: !pohBigInt
  id: string
  index: number
  status: !pohStatus
  registered: !Boolean
  setEnteredText?: any
  submissionTime?: pohBigInt
  name: any
  requests: !pohRequest
  submission?: any
}

type pohCounter = {
  id: !ID
  vouchingPhase: !pohBigInt
  pendingRegistration: !pohBigInt
  pendingRemoval: !pohBigInt
  challengedRegistration: !pohBigInt
  challengedRemoval: !pohBigInt
  registered: !pohBigInt
  expired: !pohBigInt
  removed: !pohBigInt
}

type Profile = {
  ethAddress: string
  video: any
  photo: string | undefined
  submission: any
  profile: any
}
