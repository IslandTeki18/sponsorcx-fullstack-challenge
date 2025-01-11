type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: "primary" | "secondary" | "success" | "danger";
};

const variantClasses = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800",
  secondary:
    "bg-gray-600 text-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-800",
  success:
    "bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800",
  danger:
    "bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800",
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = "primary",
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageNumbers.push(
          <a
            key={i}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(i);
            }}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
              currentPage === i
                ? variantClasses[variant]
                : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-gray-100 dark:ring-gray-600 dark:hover:bg-gray-700"
            } focus:z-20 focus:outline-offset-0`}
            aria-current={currentPage === i ? "page" : undefined}
          >
            {i}
          </a>
        );
      } else if (
        (i === currentPage - 2 && currentPage > 3) ||
        (i === currentPage + 2 && currentPage < totalPages - 2)
      ) {
        pageNumbers.push(
          <span
            key={i}
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 dark:text-gray-300 dark:ring-gray-600"
          >
            ...
          </span>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="w-full flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(Math.max(1, currentPage - 1));
          }}
          className={`relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium ${
            currentPage === 1
              ? "text-gray-300 dark:text-gray-600"
              : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-600"
          }`}
        >
          Previous
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(Math.min(totalPages, currentPage + 1));
          }}
          className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium ${
            currentPage === totalPages
              ? "text-gray-300 dark:text-gray-600"
              : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-600"
          }`}
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Showing{" "}
            <span className="font-medium">
              {Math.min(1 + (currentPage - 1) * 10, totalPages * 10)}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(currentPage * 10, totalPages * 10)}
            </span>{" "}
            of <span className="font-medium">{totalPages * 10}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(Math.max(1, currentPage - 1));
              }}
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-gray-600 dark:hover:bg-gray-700 ${
                currentPage === 1 ? "pointer-events-none" : ""
              }`}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {renderPageNumbers()}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(Math.min(totalPages, currentPage + 1));
              }}
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-gray-600 dark:hover:bg-gray-700 ${
                currentPage === totalPages ? "pointer-events-none" : ""
              }`}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
