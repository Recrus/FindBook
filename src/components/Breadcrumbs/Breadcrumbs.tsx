import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks.ts";
import { selectBreadcrumbs } from "../../features/breadcrumbs/breadcrumbsSlice.ts";

const Breadcrumbs = () => {
  const breadcrumbs = useAppSelector(selectBreadcrumbs);

  return (
    <nav className="m-4 p-2 bg-primary w-fit opacity-50 rounded">
      <div className="container px-5 mx-auto flex items-center flex-wrap">
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={breadcrumb.href} className="flex items-center">
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link
                  to={typeof breadcrumb.href == "string" ? breadcrumb.href : ""}
                  className="hover:blue transition duration-150 border-b-2"
                >
                  {breadcrumb.label}
                </Link>
                <span className="mx-2 text-neutral">/</span>
              </>
            ) : (
              <span className="text-neutral">{breadcrumb.label}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
