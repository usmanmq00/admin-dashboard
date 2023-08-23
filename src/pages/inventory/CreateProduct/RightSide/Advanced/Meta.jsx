import React from "react";
import { Fields, TextArea } from "../../../../../components/common/Fields";

const Meta = ({ setFields, fields, handleChange }) => {
  return (
    <section className="space-y-6 bg-white rounded-lg p-4 w-full">
      <h1 className="font-semibold text-xl">Meta Options</h1>

      <Fields
        label={"Meta Tag Title"}
        placeholder={"Meta tag title"}
        description={
          "Set a meta tag title. Recommended to be simple and precise keywords."
        }
        width={"100%"}
        name={"metaTagTitle"}
        value={fields.metaTagTitle}
        onChange={handleChange}
      />

      <TextArea
        label={"Meta Tag Description"}
        placeholder={"Type your text here..."}
        description={
          "Set a meta tag description to the product for increased SEO ranking."
        }
        width={"100%"}
        height={"200px"}
        name={"metaTagDescription"}
        value={fields.metaTagDescription}
        onChange={handleChange}
      />

      <Fields
        label={"Meta Tag Keywords"}
        placeholder={"keywords"}
        description={
          "Set a list of keywords that the product is related to. Separate the keywords by adding a comma"
        }
        width={"100%"}
        name={"metaTagKeywords"}
        value={fields.metaTagKeywords}
        onChange={handleChange}
      />
    </section>
  );
};

export default Meta;
