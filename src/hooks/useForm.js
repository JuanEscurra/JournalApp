import {useState} from 'react'

export const useForm = (dataInitial={}) => {
    
    const [formData, setFormData] = useState(dataInitial);

    const handleInputChange = ({target}) => {
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
