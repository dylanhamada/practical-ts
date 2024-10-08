// Zod is a TypeScript-first schema declaration and validation library for handling data validation, parsing, and type inference
import { z } from 'zod';

const url = 'https://www.course-api.com/react-tours-project';

// Define a type schema using the zod package
const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
});

// Define a type that uses the zod schema
type Tour = z.infer<typeof tourSchema>;

// Asynchronous function that returns a promise consisting of a Tour type
async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // If response is okay, parse json of the response
    // We assert that the variable "data" is of type array of Tours
    const rawData: Tour[] = await response.json();

    // We use the zod tourSchema schema and the safeParse method to check that the returned data conforms to the schema
    const result = tourSchema.array().safeParse(rawData);
    console.log(result.data);

    // If the data does not conform to the schema, we throw an error
    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }

    // Otherwise, return the data property of the returned "result" data
    return result.data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'there was an error...';
    console.log(errorMsg);
    // Implicitly, an empty array is also an array of type Tours, which does not conflict with the function return type that we assert
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour: any) => {
  console.log(tour.name);
});

// If we include a property in type Tour that doesn't actually exist in the back-end data, TypeScript doesn't have a way of checking that
