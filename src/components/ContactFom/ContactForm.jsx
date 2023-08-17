import { TextField, Button } from "@mui/material"
import {StyledContainer, StyledForm  } from './styles'
import { ContactMail} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectIsLoading } from "../../redux/contacts/selectorContacts";
import { addContact } from "../../redux/contacts/contactsOperations";

const ContactForm = () => {
    
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        let contactForAdd = {name: form.name.value, number: form.number.value};
        console.log("form", contactForAdd);
        if(contacts.some(({name}) => name === contactForAdd.name)){
            alert(`${contactForAdd.name} is already in contacts`);
            return;
        }
        dispatch(addContact(contactForAdd));
        form.reset();
    }

    return(
        <StyledContainer>
            <StyledForm onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <TextField
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    label="Phone: "
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <Button startIcon={< ContactMail/>} type="submit" variant="outlined">
                    Add contact
                </Button>
            </StyledForm>
        </StyledContainer>
    )
}

export default ContactForm;