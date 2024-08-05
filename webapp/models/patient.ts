import { IDistrict, IProvince,ILocation } from './location';
import { IClient } from './client';

export interface IIdentification {
    uid: string;
    name: string;
}

export interface IPatientIdentification {
    uid: string;
    identificationUid: string;
    identification: IIdentification;
    patientUid: string;
    value: string;
}

export interface IPatient {
    uid: string;
    patientId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    client: IClient;
    clientUid: string;
    dateOfBirth: Date;
    district: IDistrict;
    districtUid: string;
    province: IProvince;
    provinceUid: string;
    country: IDistrict;
    countryUid: string;
    identifications: IPatientIdentification[];
    createdAt: Date;
}

export interface IPatientIdentificationForm {
    identificationUid: string;
    value: string;
}
