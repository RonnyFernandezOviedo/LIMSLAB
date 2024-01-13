import gql from 'graphql-tag';

export const ADD_REFLEX_RULE = gql`
    mutation AddReflexR($payload: ReflexRuleInput!) {
        createReflexRule(payload: $payload) {
            __typename
            ... on ReflexRuleType {
                uid
                name
                description
                createdByUid
                createdAt
            }
            ... on OperationError {
                error
                suggestion
            }
        }
    }
`;

export const EDIT_REFLEX_RULE = gql`
    mutation editReflexR($uid: String!, $payload: ReflexRuleInput!) {
        updateReflexRule(uid: $uid, payload: $payload) {
            __typename
            ... on ReflexRuleType {
                uid
                name
                description
                createdByUid
                createdAt
            }
            ... on OperationError {
                error
                suggestion
            }
        }
    }
`;

export const ADD_REFLEX_ACTION = gql`
    mutation AddReflexA($payload: ReflexActionInput!) {
        createReflexAction(payload: $payload) {
            __typename
            ... on ReflexActionType {
                uid
                description
                level
                analyses {
                    uid
                    name
                }
                reflexRule {
                    uid
                    name
                }
            }
            ... on OperationError {
                error
                suggestion
            }
        }
    }
`;

export const EDIT_REFLEX_ACTION = gql`
    mutation editReflexA($uid: String!, $payload: ReflexActionInput!) {
        updateReflexAction(uid: $uid, payload: $payload) {
            __typename
            ... on ReflexActionType {
                uid
                description
                level
                analyses {
                    uid
                    name
                }
                reflexRule {
                    uid
                    name
                }
            }
            ... on OperationError {
                error
                suggestion
            }
        }
    }
`;

export const ADD_REFLEX_BRAIN = gql`
    mutation AddReflexB($payload: ReflexBrainInput!) {
        createReflexBrain(payload: $payload) {
            __typename
            ... on ReflexBrainType {
                uid
                reflexActionUid
                description
                analysesValues {
                    analysisUid
                    analysis {
                        uid
                        name
                    }
                    operator
                    value
                }
                addNew {
                    analysisUid
                    analysis {
                        uid
                        name
                    }
                    count
                }
                finalise {
                    analysisUid
                    analysis {
                        uid
                        name
                    }
                    value
                }
            }
            ... on OperationError {
                error
                suggestion
            }
        }
    }
`;

export const EDIT_REFLEX_BRAIN = gql`
    mutation editReflexB($uid: String!, $payload: ReflexBrainInput!) {
        updateReflexBrain(uid: $uid, payload: $payload) {
            __typename
            ... on ReflexBrainType {
                uid
                reflexActionUid
                description
                analysesValues {
                    analysisUid
                    analysis {
                        uid
                        name
                    }
                    operator
                    value
                }
                addNew {
                    analysisUid
                    analysis {
                        uid
                        name
                    }
                    count
                }
                finalise {
                    analysisUid
                    analysis {
                        uid
                        name
                    }
                    value
                }
            }
            ... on OperationError {
                error
                suggestion
            }
        }
    }
`;
