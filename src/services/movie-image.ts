// 'w92', 'w154', 'w185', 'w342', 'w500', 'w780', or 'w1280'
const movieImage = (url: string) => {
    return `https://image.tmdb.org/t/p/w342/${url}`
}

export default movieImage;