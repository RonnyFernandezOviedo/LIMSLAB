import gql from 'graphql-tag';

export const ADD_CLIENT = gql`
    mutation AddClient($payload: ClientInputType!) {
        createClient(payload: $payload) {
            ... on ClientType {
                __typename
                uid
                name
                districtUid
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

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_CLIENT = gql`
    mutation editClient($uid: String!, $payload: ClientInputType!) {
        updateClient(uid: $uid, payload: $payload) {
            ... on ClientType {
                __typename
                uid
                name
                email
                phoneMobile
                clienteDireccion
                districtUid
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

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const ADD_CLIENT_CONTACT = gql`
    mutation AddClientContact($payload: ClientContactInputType!) {
        createClientContact(payload: $payload) {
            ... on ClientContactType {
                __typename
                uid
                firstName
                lastName
                email
                mobilePhone
                consentSms
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_CLIENT_CONTACT = gql`
    mutation editClientContact($uid: String!, $payload: ClientContactInputType!) {
        updateClientContact(uid: $uid, payload: $payload) {
            ... on ClientContactType {
                __typename
                uid
                firstName
                lastName
                email
                mobilePhone
                consentSms
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;



export const DELETE_CLIENT_CONTACT = gql`
    mutation deleteClientContact($uid: String!) {
        deleteClientContact(uid: $uid) {
            ... on DeletedItem {
                uid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;


export const DELETE_CLIENT = gql`
    mutation deleteClientContact($uid: String!) {
        deleteClient(uid: $uid) {
            ... on DeletedItem {
                uid
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;
