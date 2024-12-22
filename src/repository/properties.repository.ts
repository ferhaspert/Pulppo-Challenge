import { connectDB } from '@/database';
import PropertyModel, { IProperty } from '@/models/property.model';

export const getProperties = async () => {
  try {
    await connectDB();
    const properties: IProperty[] = await PropertyModel.find()
      .limit(1000)
      .sort({ createdAt: -1 });
    console.log(properties);
    return properties;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};
