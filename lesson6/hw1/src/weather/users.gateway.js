export const getCityData = () =>
  fetch(`https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities`)
    .then((response) => {
      debugger;
      if (response.ok) return response.json();
      debugger;
      throw new Error();
    })
    .then((user) => console.log(user));
