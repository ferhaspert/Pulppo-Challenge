import mongoose, { Document } from 'mongoose';
import { PropertySchema } from '../schemas/property.schema';

interface ObjectId {
  $oid: string;
}

export interface IProperty extends Document {
  _id: ObjectId;
  referenceCode: string;
  agent: {
    firstName: string;
    lastName: string;
    phone: string;
    profilePicture: string;
    email: string;
    _id: ObjectId;
  };
  import: {
    source: string;
    id: string;
    url: string;
    original: any; // Define if needed
    announcers: any[]; // Define if needed
    hash: { $numberLong: string };
    type: string;
    _id: ObjectId;
    createdAt: Date;
    updatedAt: Date;
  };
  portals: {
    inmuebles24: {
      url: string;
      id: string;
      status: string;
    };
  };
  company: {
    name: string;
    email: string;
    phone: string;
    logo: {
      default: string;
      pulppo: string;
      pulppoInverted: string;
    };
    site: string;
    _id: ObjectId;
  };
  contact: any; // Define if needed
  agentSeller: {
    firstName: string;
    lastName: string;
    phone: string;
    profilePicture: string;
    email: string;
    _id: ObjectId;
  };
  agentDefaultSeller: {
    firstName: string;
    lastName: string;
    phone: string;
    profilePicture: string;
    email: string;
    _id: ObjectId;
  };
  financing: any[]; // Define if needed
  status: {
    last: string;
    history: { status: string; timestamp: Date }[];
    reasonToFinish: string | null;
  };
  type: string;
  services: { id: number; name: string; type: number }[];
  attributes: {
    yearBuild: number;
    condition: string;
    expenses: number;
    expensesDescription: string;
    rooms: number;
    suites: number;
    bathrooms: number;
    toilettes: number;
    parkings: number;
    zonification: string;
    roofedSurface: number;
    semiroofedSurface: number;
    totalSurface: number;
    unroofedSurface: number;
    orientation: string;
    disposition: string;
  };
  pictures: { url: string; description: string; is_blueprint: boolean }[];
  videos: { url: string; description: string; provider: string; id: string }[];
  listing: {
    isPromoted: boolean;
    title: string;
    description: string;
    value: number;
    priceHistory: any[]; // Define if needed
    price: { currency: string; price: number };
    operation: string;
    addressIsRounded: boolean;
    publishOnPortals: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  acm: { comparables: any[] }; // Define if needed
  development: { paymentPlans: any[] }; // Define if needed
  marketStats: { history: any[] }; // Define if needed
  notes: any[]; // Define if needed
  files: any[]; // Define if needed
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  captureStatus: { history: any[] }; // Define if needed
  contract: { history: any[] }; // Define if needed
  isForeclosure: boolean;
  quality: string;
  address: {
    street: string;
    location: {
      type: string;
      coordinates: number[];
    };
    showLocation: boolean;
    zip: string;
    city: {
      name: string;
      id: string;
    };
    state: {
      name: string;
      id: string;
    };
    neighborhood: {
      name: string;
      id: string;
    };
    country: {
      name: string;
      id: string;
    };
  };
}

const PropertyModel =
  mongoose.models.Property ||
  mongoose.model<IProperty>('Property', PropertySchema, 'mls');
export default PropertyModel;
