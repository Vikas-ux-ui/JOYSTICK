import axios from 'axios';

export const FetchApi= async(currentPage)=> {
    try {
      const myRes = await axios.get(currentPage);
      return{
        data:myRes.data,
        staus:"Sucess"
      }
    } catch (e) {
      return{
        data:e,
        staus:"Fail"
      }
    }
    
}

