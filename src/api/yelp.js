import axios from 'axios';
 

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer Y-4zuzrLLIXscYiG3lF-fS48hCUqpeKctGJXMh3FYfT-ltKBVGqSpr30HYs2kVdLZfhzqpUUpAePyYoDUMiaBSYMCd3DngOFrjW-r0onBR5K705pwBb5lREmpQN_YHYx'
    }
});

