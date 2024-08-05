import gql from 'graphql-tag';

export const GET_ALL_PATIENTS = gql`
    query getAllPatients($first: Int!, $after: String, $before: String, $text: String!, $sortBy: [String!] = ["uid"]) {
        patientAll(pageSize: $first, afterCursor: $after, beforeCursor: $before, text: $text, sortBy: $sortBy) {
            totalCount
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            items {
                uid
                patientId
                firstName
                middleName
                lastName
                dateOfBirth
                clientUid
                createdAt
                client {
                    uid
                    name
                    clienteId
                    email
                    phoneMobile
                    clienteDireccion
                    district {
                        uid
                        name
                        province {
                            uid
                            name
                            country {
                                uid
                                name
                            }
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
        }
    }
`;

export const SEARCH_PATIENTS = gql`
    query searchPatients($queryString: String!) {
        patientSearch(queryString: $queryString) {
            uid
            patientId
            firstName
            middleName
            lastName
            dateOfBirth
            client {
                uid
                name
                clienteId
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
    }
`;

export const GET_PATIENT_BY_UID = gql`
    query getPatientByUid($uid: String!) {
        patientByUid(uid: $uid) {
            uid
            patientId
            firstName
            middleName
            lastName
            dateOfBirth
            createdAt
            client {
                uid
                name
                clienteId
                email
                phoneMobile
                clienteDireccion
                district {
                    uid
                    name
                    province {
                        uid
                        name
                        country {
                            uid
                            name
                        }
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
    }
`;

export const IDENTIFICATION_TYPES = gql`
    query identificationTypes {
        identificationAll {
            uid
            name
        }
    }
`;
