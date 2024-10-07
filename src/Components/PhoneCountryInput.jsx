import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneCountryInput = ({ phoneNumber, setPhoneNumber }) => {
  return (
    <PhoneInput
      className="custom-phone "
      placeholder="Enter phone number"
      international
      countryCallingCodeEditable={false}
      style={{
        marginTop: "12px",
      }}
      defaultCountry="RU"
      value={phoneNumber?.toString()}
      onChange={setPhoneNumber}
    />
  );
};

export default PhoneCountryInput;
