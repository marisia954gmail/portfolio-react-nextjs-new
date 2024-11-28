import Image from "next/image";
const Project = () => {
  return (
    <>
  <div className="p-4 md:w-1/2 md" style={{maxWidth: '544px'}}>
    <div
      className="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700"
    >
      <div className="p-6">
        <div className="flex flex-row justify-between items-center">
          <div className="my-2">
          FolderIcon
          </div>
          <div className="flex flex-row justify-between">
            <div className="mx-1">
              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"

                ><span className="sr-only"></span
                >ExternalIcon</a>
            </div>
            <div className="mx-1">
              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                ><span className="sr-only">github</span
                >GithubIcon
              </a>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
           projectTitle
        </h2>
        <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
          projectDescription
        </p>
        <div className="flex flex-row justify-between">
          <div className="text-gray-400 text-sm font-extralight">
             projectTech1
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
    );
};

export default Project;
