export const getPosts =async()=>{
    const responce =await fetch('https://jsonplaceholder.typicode.com/posts',{method: 'GET',}
        
    );
    return await responce.json();
}

export const getRandomUsers = async()=>{
    const responce = await fetch('https://randomuser.me/api/',{methos:' GET',});
    return await responce.json();
}