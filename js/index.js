
let imgCreator = (url) => `<img src="${url}"></img>`;


$.get('/getRedditInfo', (response) => {
	response = JSON.parse(response)
	
	var redditPosts = response.data.children;
	redditPosts.forEach((post, i)=> {		
		if(i =! 0){
			var imageUrl = post.data.preview.images[0].source.url
			$('body').append(imgCreator(imageUrl));
		}
	})
})

