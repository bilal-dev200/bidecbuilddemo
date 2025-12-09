"use client";
import { useState } from "react";
import { parsePhoneNumberFromString, getCountries, getCountryCallingCode } from "libphonenumber-js";

export default function PhoneInput() {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("US"); // default country
  const [error, setError] = useState("");
  const [formatted, setFormatted] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    try {
      const phoneNumber = parsePhoneNumberFromString(value, country);
      if (phoneNumber && phoneNumber.isValid()) {
        setError("");
        setFormatted(phoneNumber.formatInternational());
      } else {
        setError("Invalid phone number");
        setFormatted("");
      }
    } catch {
      setError("Invalid phone number");
      setFormatted("");
    }
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setPhone(""); // reset input on country change
    setFormatted("");
    setError("");
  };

  return (
    <div className="flex flex-col gap-3 max-w-full">
      {/* Country dropdown */}
      <div className="flex gap-2 min-w-full">
        <select
          value={country}
          onChange={handleCountryChange}
          className="border border-gray-300 p-3 rounded-lg text-black text-sm sm:text-base"
        >
          {getCountries().map((c) => (
            <option key={c} value={c}>
              {c} (+{getCountryCallingCode(c)})
            </option>
          ))}
        </select>

        {/* Phone input */}
        <input
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Phone number"
          className="border border-gray-300 p-3 rounded-lg text-black text-sm sm:text-base w-full"
        />
      </div>

      {/* Validation messages */}
      {error && <p className="text-red-500 text-xs">{error}</p>}
      {formatted && <p className="text-green-600 text-xs">Formatted: {formatted}</p>}
    </div>
  );
}