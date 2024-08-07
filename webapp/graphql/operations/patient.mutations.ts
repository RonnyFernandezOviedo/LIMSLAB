import gql from 'graphql-tag';

export const ADD_IDENTIFICATION = gql`
    mutation AddIdentification($name: String!) {
        createIdentification(name: $name) {
            ... on IdentificationType {
                __typename
                uid
                name
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const UPDATE_IDENTIFICATION = gql`
    mutation EditIdentification($uid: String!, $name: String!) {
        updateIdentification(uid: $uid, name: $name) {
            ... on IdentificationType {
                __typename
                uid
                name
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const ADD_PATIENT = gql`
    mutation AddPatient($payload: PatientInputType!) {
        createPatient(payload: $payload) {
            ... on PatientType {
                __typename
                uid
                patientId
                firstName
                middleName
                lastName
                dateOfBirth
                client {
                    uid
                    name
                    district {
                        name
                        province {
                            name
                        }
                    }
                }
                identifications {
                    uid
                    value
                    identificationUid
                    identification {
                        uid
                        name
                    }
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const UPDATE_PATIENT = gql`
    mutation EditPatient($uid: String!, $payload: PatientInputType!) {
        updatePatient(uid: $uid, payload: $payload) {
            ... on PatientType {
                __typename
                uid
                patientId
                firstName
                lastName
                dateOfBirth
                client {
                    uid
                    name
                    district {
                        name
                        province {
                            name
                        }
                    }
                }
                countryUid
                country {
                    uid
                    name
                }
                provinceUid
                province {
                    uid
                    name
                }
                districtUid
                district {
                    uid
                    name
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;
