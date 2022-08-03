export type Input = {
  setNameSearched?: any
  setAddressSearched?: any
  handleSubmit: any
  enteredText: any
  setEnteredText: any
  placeholder: string
}

export type Submissions = {
  creationTime: !pohBigInt
  disputed: !Boolean
  id: string
  name: String!
  registered: !Boolean
  requests: pohRequest!
  status: !pohStatus
  submissionTime?: pohBigInt
  vouchees: pohSubmission!
  index: number
  setEnteredText?: any
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
  countersOptions: CountersOptions[]
}

export type Profile = {
  video: string | undefined
  photo: string | undefined
  submission: any
  profile: any
}

export type Request = {}

export type Tab = {
  name: string
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export enum pohStatus {
  NONE,
  VOUCHING,
  PENDINGREGISTRATION,
  PENDINGREMOVAL,
}

type CountersOptions =
  | 'Vouching'
  | 'PendingRegistration'
  | 'PendingRemoval'
  | 'ChallengedRegistration'
  | 'challengedRemoval'
  | 'Registered'
  | 'Expired'
  | 'Removed'
