const apiKey = 'yoLfIh6JL1KtTS1HASO9idD02Lg8C9cBY0fknQs7MC9Bpvg_x3BqiUmc2yqZ6Nk_VOb_-AhI2SGlFWHFaE_A3rqtZcZx4p-Th50pMy-TjEwvs6qe-VYojBRCtK6nYnYx'; 

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
