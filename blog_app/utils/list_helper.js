const totalLikes = (blogs) => {
    like_sum = blogs.reduce((accumulator, blog) => {
        return accumulator + blog.likes
    }, 0)
    return like_sum
}

const favouriteBlog = (blogs) => {
    let most_liked = 0
    for(let i = 0; i < blogs.length; i++){
        if(blogs[i].likes >= blogs[most_liked].likes){
            most_liked = i
        }
    }
    return [blogs[most_liked]]
}

module.exports = {
    totalLikes, favouriteBlog
  }