import { gql } from '@apollo/client'

// The queries below are for the POH Registry:
export const GET_REGISTRY_COUNTERS = gql`
  query MyQuery {
    pohcounter(id: "1") {
      vouchingPhase
      pendingRemoval
      pendingRegistration
      challengedRemoval
      challengedRegistration
      registered
      expired
      removed
    }
  }
`

export const GET_SUBMISSION_BY_ADDRESS = gql`
  query MyQuery($id: ID = "") {
    pohsubmissions(where: { id: $id }) {
      creationTime
      id
      name
      registered
      submissionTime
      status
      requests {
        evidence {
          URI
        }
      }
      vouchees {
        id
        name
        submissionTime
      }
    }
  }
`

export const GET_SUBMISSION_BY_NAME = gql`
  query MyQuery($name_contains_nocase: String) {
    pohsubmissions(where: { name_contains_nocase: $name_contains_nocase }) {
      creationTime
      id
      name
      registered
      removed
      requests {
        evidence {
          URI
        }
      }
      status
      submissionTime
      vouchees {
        id
        name
        submissionTime
      }
    }
  }
`

export const GET_SUBMISSION_BY_ADDRESS_OR_NAME = gql`
  query MyQuery($id: ID = "", $name_contains_nocase: String) {
    pohsubmissions(
      where: { id: $id, name_contains_nocase: $name_contains_nocase }
    ) {
      creationTime
      id
      name
      registered
      submissionTime
      status
      requests {
        evidence {
          URI
        }
      }
      vouchees {
        id
        name
        submissionTime
      }
    }
  }
`

export const GET_SUBMISSIONS_BY_STATUS = gql`
  query MyQuery($first: Int = 5, $status: pohStatus = PendingRegistration) {
    pohsubmissions(
      first: $first
      orderDirection: desc
      where: { status: $status }
    ) {
      creationTime
      id
      name
      registered
      removed
      requests {
        evidence {
          URI
        }
      }
      status
      submissionTime
      vouchees {
        id
        name
        submissionTime
      }
    }
  }
`

export const GET_SUBMISSIONS_BY_ORDERING = gql`
  query MyQuery($first: Int = 5, $orderBy: pohSubmission_orderBy = registered) {
    pohsubmissions(first: $first, orderBy: $orderBy, orderDirection: desc) {
      creationTime
      id
      name
      registered
      removed
      requests {
        evidence {
          URI
        }
      }
      status
      submissionTime
      vouchees {
        id
        submissionTime
      }
    }
  }
`
