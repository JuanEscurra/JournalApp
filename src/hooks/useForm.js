import {useState} from 'react'

export const useForm = (dataInitial={}) => {
    
    const [formData, setFormData] = useState(dataInitial);

    const handleInputChange = ({target}) => {
        console.log({...formData, [target.name]: target.value})
        setFormData({...formData, [target.name]: target.value})
    }

    const reset = () => {
        setFormData(dataInitial);
    }

    return [
        formData,
        handleInputChange,
        reset,
        setFormData
    ];
}
