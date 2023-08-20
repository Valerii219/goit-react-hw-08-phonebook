import { instanceForContacts } from "./api";

export const fetchContacts  = async () => {
    const {data} = await instanceForContacts('contacts');
    return data; 
}
export const addContacts  = async (body) => {
    const {data} = await instanceForContacts.post('contacts', body);
    return data; 
}
export const deleteContacts  = async (contactId) => {
    const {data} = await instanceForContacts.delete(`contacts/${contactId}`);
    return data; 
}

