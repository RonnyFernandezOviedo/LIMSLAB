import{R as e}from"./index-7e8465c2.js";const n=e`
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
`,i=e`
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
`,o=e`
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
`,a=e`
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
`,r=e`
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
`;e`
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
`;export{n as A,r as D,i as E,o as a,a as b};
