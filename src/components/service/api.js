import axios from 'axios';

async function createPost() {
  const res = await axios.get('https://vercelapi-1i9s.vercel.app/api/mehsullar');
  return res.data;
}

export default createPost;



// async function getpost() {
//     const res = await axios.get('https://fakestoreapi.com/products')
//     return res.data
// }