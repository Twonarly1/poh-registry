export type Input = {
  setNameSearched: any
  setAddressSearched: any
  submitAddress: any
  enteredText: any
  setEnteredText: any
}

export type Submissions = {
  creationTime: !pohBigInt
  id: string
  index: number
  status: !pohStatus
  registered: !Boolean
  setEnteredText?: any
  submissionTime?: pohBigInt
  name: string
  requests: !pohRequest
  submission?: any
}

export type pohCounter = {
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

export type Profile = {
  ethAddress: string
  video: string | undefined
  photo: string | undefined
  submission: any
  profile: any
}

export type Tab = {
  name: string
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}
