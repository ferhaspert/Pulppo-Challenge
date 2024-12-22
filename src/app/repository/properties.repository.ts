import PropertyModel, { IProperty } from '@/app/models/property.model';
import { connectDB } from '../../database';

export const getProperties = async () => {
  await connectDB();
  const properties: IProperty[] = await PropertyModel.find().limit(10);
  console.log(properties);
  return properties;
};
