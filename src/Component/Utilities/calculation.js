export const totalSumByReducer = (array) => array.reduce((previous, current) => {

    return previous + current;
}, 0)


export const clearAll = () => {
    // TODO Here Manually Reloading After Clear.
    localStorage.clear();
    window.location.reload();
}




// export{totalSumByReducer as totalSum};