// 'w92', 'w154', 'w185', 'w342', 'w500', 'w780', or 'w1280'
// default is: w342
const movieImage = (url: string, width: string) => {
    return `https://image.tmdb.org/t/p/${width}/${url}`
}

export default movieImage;