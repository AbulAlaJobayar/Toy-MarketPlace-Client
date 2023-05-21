const UseTitle=title=>{
    useEffect(()=>{
        document.title=`${title}- Funtopia`;
    },[title])
};
export default UseTitle;