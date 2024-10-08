const url = 'https://www.course-api.com/react-tours-project';

// Define a type alias
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

// Asynchronous function that returns a promise consisting of a Tour type
async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // If response is okay, parse json of the response
    // We assert that the variable "data" is of type array of Tours
    const data: Tour[] = await response.json();

    return data;
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
