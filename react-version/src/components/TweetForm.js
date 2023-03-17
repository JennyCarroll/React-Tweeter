import React from "react";

function TweetForm() {
  const placeholder = "What are you humming about?";
  return (
    <section className="newtweet">
      {/* forms automatically have submit and if you wanted to prevent default like below you could add onSubmit={(event) => event.preventDefault()} to the form attribtues */}
      <form method="post" action="/tweets" className="newtweet__form">
        <textarea
          className="form__textarea"
          name="text"
          placeholder={placeholder}
        ></textarea>
        <input
          // we are preventing default so that a post request is not made (because type = submit)and the page does not refresh
          // everytime there is a click it will call the function passed to it
          onClick={(event) => event.preventDefault()}
          type="submit"
          value="Tweet"
          className="form__input"
        />
        {/* when there is an input element and the type is submit, it turns into a button */}
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;
