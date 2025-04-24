import React from "react";
import ContainerDiv from "~/components/containerDiv";

export default function DownloadPage() {
  return (
    <ContainerDiv className="m-8 p-4">
      <h1 className="mb-4 text-2xl font-bold">Download Dictionaries</h1>
      <p className="mb-2">
        You can explore and download all the Circassian dictionaries we use from our GitHub
        repository. The collection includes various dictionaries translating to and from Circassian
        in multiple languages.
      </p>
      <p>
        GitHub Repository:{" "}
        <a
          href="https://github.com/LearnCircassian/all-circassian-dictionaries-collection"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          all-circassian-dictionaries-collection
        </a>
      </p>
    </ContainerDiv>
  );
}
