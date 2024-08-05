import{R as t}from"./index-7e8465c2.js";const e=t`
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
`,n=t`
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
`,a=t`
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
`,o=t`
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
`;export{a as A,o as U,e as a,n as b};
