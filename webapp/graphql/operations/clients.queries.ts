import gql from 'graphql-tag';

export const GET_ALL_CLIENTS = gql`
    query getAllClients($first: Int, $after: String, $text: String, $sortBy: [String!] = ["uid"]) {
        clientAll(pageSize: $first, afterCursor: $after, text: $text, sortBy: $sortBy) {
            totalCount
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            items {
                uid
                name
                email
                phoneMobile
                clienteDireccion
                clienteId
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
        }
    }
`;

export const SEARCH_CLIENTS = gql`
    query searchClients($queryString: String!) {
        clientSearch(queryString: $queryString) {
            uid
            name
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
    }
`;

export const GET_CLIENT_CONTACTS_BY_CLIENT_UID = gql`
    query getClientContactsByClientUid($clientUid: String!) {
        clientContactByClientUid(clientUid: $clientUid) {
            uid
            firstName
            lastName
            email
            mobilePhone
            consentSms
        }
    }
`;

export const GET_CLIENT_BY_UID = gql`
    query getClientByUid($uid: String!) {
        clientByUid(uid: $uid) {
            uid
            name
            email
            phoneMobile
            clienteDireccion
            clienteId
            districtUid
            district {
                uid
                name
                provinceUid
                province {
                    uid
                    name
                    countryUid
                    country {
                        uid
                        name
                    }
                }
            }
        }
    }
`;
