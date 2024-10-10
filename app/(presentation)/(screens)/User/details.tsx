import { useLocalSearchParams } from "expo-router";

const DetailsScreen:React.FC=()=>{
    const {id, q}= useLocalSearchParams(); 

    return (<>{id} & {q}</>)
}

export default DetailsScreen; 

