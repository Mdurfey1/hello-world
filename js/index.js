$.get("https://www.reddit.com/r/awww.json",(data)=>{


	var redditPosts = data.data.children;

	redditPosts.forEach((post, i)=> {
		console.log(post);
		if(i =! 0){
			var imageUrl = post.data.preview.images[0].source.url
			$('body').append(imgCreator(imageUrl));
		}
	})
});

let imgCreator = (url) => `<img src="${url}"></img>`;