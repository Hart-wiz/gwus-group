import React from "react";

const Form = () => {
  return (
    <div>
      <form
        action="https://formsubmit.co/contact@gwusgroup.com"
        method="POST"
        className=" flex flex-col gap-3  "
      >
        <fieldset>
          <label htmlFor="">Name</label>
          <input type="text" name="name" placeholder="Your Name" required />
        </fieldset>

        <fieldset>
          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder="Your Email" required />
        </fieldset>
        <fieldset>
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="h-50"
          ></textarea>
        </fieldset>
        <button
          type="submit"
          className="bg-amber-700 text-white p-3 cursor-pointer hover:opacity-85 mt-2"
        >
          Send
        </button>

        {/* Optional hidden fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value={
            "http://gwusgroup.com/thankyou" || "http://localhost:5173/thankyou"
          }
        />
      </form>
    </div>
  );
};

export default Form;
