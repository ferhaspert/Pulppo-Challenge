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

export const getPricesByState = async () => {
  try {
    await connectDB();
    const aggregationPipeline = [
      {
        $group: {
          _id: '$address.state.name',
          avg: {
            $avg: '$listing.price.price',
          },
          max: {
            $max: '$listing.price.price',
          },
          min: {
            $min: '$listing.price.price',
          },
        },
      },
      {
        $project: {
          name: '$_id',
          avg: 1,
          min: 1,
          max: 1,
          _id: 0,
        },
      },
    ];
    const result = await PropertyModel.aggregate(aggregationPipeline);
    return result;
  } catch (err) {
    console.log(JSON.stringify(err));
  }
};

export const getPricesByCity = async (state?: string | null) => {
  try {
    await connectDB();
    const aggregationPipeline = [
      ...(state
        ? [
            {
              $match: {
                'address.state.name': state,
              },
            },
          ]
        : []),
      {
        $group: {
          _id: '$address.city.name',
          avg: {
            $avg: '$listing.price.price',
          },
          max: {
            $max: '$listing.price.price',
          },
          min: {
            $min: '$listing.price.price',
          },
        },
      },
      {
        $project: {
          name: '$_id',
          avg: 1,
          min: 1,
          max: 1,
          _id: 0,
        },
      },
    ];
    const result = await PropertyModel.aggregate(aggregationPipeline);
    return result;
  } catch (err) {
    console.log(JSON.stringify(err));
  }
};
