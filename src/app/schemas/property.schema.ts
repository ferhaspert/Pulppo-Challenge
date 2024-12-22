import { Schema } from 'mongoose';

export const PropertySchema: Schema = new Schema({
  referenceCode: { type: String, required: true },
  agent: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    profilePicture: { type: String, required: true },
    email: { type: String, required: true },
    _id: { type: Schema.Types.ObjectId, required: true },
  },
  import: {
    source: { type: String, required: true },
    id: { type: String, required: true },
    url: { type: String, required: true },
    original: { type: Schema.Types.Mixed }, // Define if needed
    announcers: { type: [Schema.Types.Mixed] }, // Define if needed
    hash: { $numberLong: { type: String, required: true } },
    _id: { type: Schema.Types.ObjectId, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  },
  company: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    logo: {
      default: { type: String, required: true },
      pulppo: { type: String, required: true },
      pulppoInverted: { type: String, required: true },
    },
    site: { type: String, required: true },
    _id: { type: Schema.Types.ObjectId, required: true },
  },
  contact: { type: Schema.Types.Mixed }, // Define if needed
  agentSeller: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    profilePicture: { type: String, required: true },
    email: { type: String, required: true },
    _id: { type: Schema.Types.ObjectId, required: true },
  },
  agentDefaultSeller: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    profilePicture: { type: String, required: true },
    email: { type: String, required: true },
    _id: { type: Schema.Types.ObjectId, required: true },
  },
  financing: { type: [Schema.Types.Mixed] }, // Define if needed
  status: {
    last: { type: String, required: true },
    history: [
      {
        status: { type: String, required: true },
        timestamp: { type: Date, required: true },
      },
    ],
    reasonToFinish: { type: String, required: true },
  },
  type: { type: String, required: true },
  services: [
    {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      type: { type: Number, required: true },
    },
  ],
  attributes: {
    age: { type: Number, required: true },
    condition: { type: String, required: true },
    expenses: { type: Number, required: true },
    expensesDescription: { type: String, required: true },
    rooms: { type: Number, required: true },
    suites: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    toilettes: { type: Number, required: true },
    parkings: { type: Number, required: true },
    zonification: { type: String, required: true },
    roofedSurface: { type: Number, required: true },
    semiroofedSurface: { type: Number, required: true },
    totalSurface: { type: Number, required: true },
    unroofedSurface: { type: Number, required: true },
    orientation: { type: String, required: true },
    disposition: { type: String, required: true },
  },
  pictures: [
    {
      url: { type: String, required: true },
      description: { type: String, required: true },
      is_blueprint: { type: Boolean, required: true },
    },
  ],
  videos: [
    {
      url: { type: String, required: true },
      description: { type: String, required: true },
      provider: { type: String, required: true },
      id: { type: String, required: true },
    },
  ],
  listing: {
    isPromoted: { type: Boolean, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    value: { type: Number, required: true },
    priceHistory: { type: [Schema.Types.Mixed] }, // Define if needed
    price: {
      currency: { type: String, required: true },
      price: { type: Number, required: true },
    },
    operation: { type: String, required: true },
    addressIsRounded: { type: Boolean, required: true },
    publishOnPortals: { type: Boolean, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  },
  acm: {
    comparables: { type: [Schema.Types.Mixed] }, // Define if needed
  },
  development: {
    paymentPlans: { type: [Schema.Types.Mixed] }, // Define if needed
  },
  marketStats: {
    history: { type: [Schema.Types.Mixed] }, // Define if needed
  },
  notes: { type: [Schema.Types.Mixed] }, // Define if needed
  files: { type: [Schema.Types.Mixed] }, // Define if needed
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
  __v: { type: Number, required: true },
  portals: {
    easybroker: {
      id: { type: String, required: true },
      url: { type: String, required: true },
      status: { type: String, required: true },
    },
  },
  captureStatus: {
    history: { type: [Schema.Types.Mixed] }, // Define if needed
  },
  contract: {
    history: { type: [Schema.Types.Mixed] }, // Define if needed
  },
  isForeclosure: { type: Boolean, required: true },
  quality: { type: String, required: true },
});
