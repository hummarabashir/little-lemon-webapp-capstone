

const fetchAPI = function(date) {
    if(!date){
        return []
    }
    let result = new Set();
for (let i in [0,1,2,3,4]){
    const randomHour=Math.floor(Math.random()*8)+10;
    const randomMin=Math.floor(Math.random()*4+1)*10;
    result.add(`${randomHour}:${randomMin}`)
}
    return Array.from(result);
};
const submitAPI = function(formData) {
    return true;
};

export {fetchAPI,submitAPI}
