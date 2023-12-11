import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      // Set loading to true when the form is submitted
      setLoading(true);

      // Perform your form submission logic here
      // For example, you can use fetch or axios to make an API call

      // Simulating a delay (you can replace this with your actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset loading to false when the submission is complete
      setLoading(false);

      // Add any additional logic you want after a successful submission
    } catch (error) {
      // Handle errors here
      console.error("Error submitting form:", error);

      // Reset loading to false in case of an error
      setLoading(false);
    }
  };

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10"
      disabled={loading}
    >
      {loading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
