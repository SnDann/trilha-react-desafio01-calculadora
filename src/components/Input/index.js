import { InputContainer } from "./styles";
const Input= ({value}) => {
    return (
      <InputContainer>
        <Input disable value={value}/>
      </InputContainer>
    );
  }
  
  export default Input;